const User = require('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const cookieOption = {
    httpOnly:true,
    secure:false,
    sameSite:'Lax'
}

exports.signUp = async(req,res)=>{
    try {
        const { channelName, userName, about, profilePic, password} = req.body;
        const isExist = await User.findOne({userName});
        if(isExist){
            res.status(400).json({ error : "Username Already Exist Try Another"})
        }else{
            let updatedPass = await bcrypt.hash(password, 10);
            const user = new User({ channelName, userName, about, profilePic, password: updatedPass});
            await user.save();
            res.status(201).json({ message: 'User Registred Successfully', success: "yes" , data:user});
        }
    } catch (err) {
        res.status(500).json({error: 'Server Error'});
    }
}

exports.logIn = async(req,res)=>{
    try {
        const {userName , password} = req.body;
        const user = await User.findOne({userName});

        if(user && await bcrypt.compare(password, user.password)){

            // JWT token for authentication user
            const token = jwt.sign({ userId: user._id}, "SECRET-KEY");
            res.cookie('token', token, cookieOption);
            // console.log(token);
            res.json({message: 'Logged in Successfully', success:"true", token, user});
            
        }else{
            res.status(400).json({ error: 'Invalid User Name or Password'});
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error'});
    }
}

exports.logOut = async(req, res)=>{
    res.clearCookie('token',cookieOption).json({message:'Logged out successfully'});
}