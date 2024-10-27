import { User } from "../models/user.model.js";
import bycrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js"
import { sendVerificationEmail, sendWelcomeEmail } from "../mailtrap/email.js";

export const signup = async (req, res) => {

    const{email, password, name} = req.body;

    try {
        if(!email || !password || !name){
            throw new Error("All fields are required");
        }

        const userAlredayExist = await User.findOne({email});
        if(userAlredayExist){
            return res.status(400).json({success:false, message: "User already exists"});
        }

        const hashPassword = await bycrypt.hash(password, 10);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        const user = new User({
            email,
            password: hashPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 //24 hours
        })

        await user.save() // save to database

        //authenticate in client by creating jwt token (create token and set it to the cookie)
        generateTokenAndSetCookie(res,user._id);

        await sendVerificationEmail(user.email, verificationToken);

        res.status(201).json({
			success: true,
			message: "User created successfully",
			user: {
				...user._doc,  //spread the user document as itis
				password: undefined, //but password set as undeifined or null beacuse we no need to display the password
			},
		});

    } catch (error){
        res.status(400).json({success:false, message: error.message});
    }
}

export const verifyEmail = async (req, res) =>{
    const { code } = req.body;  //get the token passed by request body
	try {
		const user = await User.findOne({
			verificationToken: code,
			verificationTokenExpiresAt: { $gt: Date.now() }, //verfiy this token is not expired and it is still valid
		});

		if (!user) {
			return res.status(400).json({ success: false, message: "Invalid or expired verification code" });
		}

		user.isVerified = true;
		user.verificationToken = undefined;           //after verify this email we can remove that data from db becuase it is not neccessary to keep it in db
		user.verificationTokenExpiresAt = undefined;  //after verify this email we can remove that data from db becuase it is not neccessary to keep it in db
		await user.save();

		await sendWelcomeEmail(user.email, user.name); //generate welcome email by using email template

		res.status(200).json({                         //if we forget to send some response after the perform some logic like above 
			success: true,                             //then in the postman we couldnot get any message wheter it is sucessfull or failure
			message: "Email verified successfully",
			user: {
				...user._doc,
				password: undefined,
			},
		});
	} catch (error) {
		console.log("error in verifyEmail ", error);
		res.status(500).json({ success: false, message: "Server error" });
	}
}

export const login = async (req, res) => {
    res.send("login route");
}

export const logout = async (req, res) => {
    res.send("logout route");
}
