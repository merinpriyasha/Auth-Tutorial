import jwt from "jsonwebtoken";

 export const generateTokenAndSetCookie = (res, userId) =>{
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "7d",
	}); // this is return token where we called in sign method and we are passing payload called userId this is usefull when we decode the token which user has this token with the help of the user ID we can fetch the user profile from the db

	res.cookie("token", token, {
		httpOnly: true,                                //this cannot be accessible via js, only http and this is prevent XSS attact
		secure: process.env.NODE_ENV === "production", //this is true only we are in poroduction in localhos we have http and in production we have https
		sameSite: "strict",                            //same site also prevent an attact called csrf
		maxAge: 7 * 24 * 60 * 60 * 1000,               // this is equal to 7 days
	});

    return token;
    
}
