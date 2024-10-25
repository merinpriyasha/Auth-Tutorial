import { User } from "../models/user.model.js";
import bycrypt from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js"

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

export const login = async (req, res) => {
    res.send("login route");
}

export const logout = async (req, res) => {
    res.send("logout route");
}