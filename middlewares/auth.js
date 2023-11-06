import {User} from '../models/userSchema.js';
import jwt from 'jsonwebtoken';
export const isAuthenticated=async  (req,res,next)=>{
    const {token}= req.cookies;
    if(!token){
        res.status(404).json({
            success:false,
            message:'Not logedin!Please login to have your details',
        })
        return;
    };
    const decodeddata = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await User.findById(decodeddata.id);
    next();
}