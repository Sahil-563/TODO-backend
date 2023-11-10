import jwt from 'jsonwebtoken';
export const setcookie  = (user,message,statuscode,res)=>{
    const token = jwt.sign({id:user.id},process.env.JWT_SECRET);
        res.status(statuscode).cookie('token',token,{
            httpOnly:true,
            maxAge:0,
            sameSite:process.env.NODE_ENV === "Development" ?"lax":"none", //If sameSite is none then it is not important to have same frontend and backend url or domain name
            secure:process.env.NODE_ENV ==="Development" ?false:true, //if sameSite is none means Deployment mode is on then secure should be true otherwise if development mode is on then secure should be false 
        }).json({
            success: true,
            message,
            
        })
}