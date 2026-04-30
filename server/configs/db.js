import mongoose from "mongoose";

const connnectDB = async()=>{
    try{
       mongoose.connection.on('connected',()=>console.log("database Connected"))
      await mongoose.connect(`${process.env.MONGODB}/AI`)
    }catch(err){
      console.log(err.message);    
    }
    
}

export default connnectDB;