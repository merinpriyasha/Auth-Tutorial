import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lastLogin: {
        type: Date,
        default: Date.now,
    },
    isVerified: {   // to verify user account is verfied or not
        type: Boolean, 
        default: false,
    },
    resetPasswordToken: String,        // for each user when they want to udate their password we can really udate this value
    resetPasswordExpiresAt: Date,      // for secure we can expire it within some time period(one hour)
    verificationToken: String,         // we can send verfication token to verify thier account
    verificationTokenExpiresAt: Date,  // above one also can exipr after one day or 6 hours..
}, {timestamps: true})


export const User = mongoose.model('User', userSchema);
