 import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const verifyToken = async(req,res,next)=>{
       let token = req.headers.authorization ?.replace("bearer", "").trim(" ");
              
        try{
             const decode = jwt.verify(token,process.env.SECRET)
              const userId = decode.id;

              const user = await User.findById(userId) 
                
                   if(!user){
                     return res.json({success:false,message:"Not authorized, user not founded"});
                   }

                   req.user = user;
                   next()

        }catch(err){
            return res.status(401).json({message:"NOT authorized,token failed "})
        }
}