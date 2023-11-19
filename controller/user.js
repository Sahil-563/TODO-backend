import {User} from '../models/userSchema.js'

import bcrypt from 'bcrypt';
import { setcookie } from '../utils/features.js';
//Controller function to get all users
export const getAllUsers=async (req, res) => {
    
}

//controller function to register new user
export const newUserRegister = async (req, res) => {
    const{name,email,password}=req.body;
    let user = await User.findOne({email});
    if(user){ //Is user Email already exists then no need to register it again
        res.status(404).json({
            success:false,
            message:'User Already Exists',
        });
    }
    
    try{
        const hashedpasword = await bcrypt.hash(password,10);
        user = await User.create({name:name,email:email,password:hashedpasword});
        console.log("User is created with name", user.name);
        setcookie(user,'Registered Successfully',200,res);
    }
    catch(err){
        console.log('Registrtion failed!', err)
    }
}

//Login route controller function
export const login = async (req, res,next) => {
    const{email,password}=req.body;
    let user = await User.findOne({email});
    if(!user){
     //Is user Email already exists then no need to register it again
        res.status(404).json({
            success:false,
            message:'User donot Exists!Please register first!',
        
        });
        return;
    }
    const isMatch =  await bcrypt.compare(password, user.password);
    if(!isMatch){
        res.status(404).json({
            success:false,
            message:'Incorrect password',
        });
    }
    else{
        setcookie(user,`${user.name} logined successfully`,200,res);
    }

}
//Logout route controller function
export const logout = (req, res) => { 
    res.status(200).cookie("token","",{ expires:new Date(Date.now())}).json({success:true,'message':'Logged Out'});
   
}
export const getUserDetails = async (req,res) => {
    res.status(200).json({
        success:true,
        
    });
}

    
