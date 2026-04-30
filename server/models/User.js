import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const ueserSchema = new mongoose.Schema({
     name:{type: String , required:true},
     email:{type: String , required:true, unique:true},
     password:{type: String , required:true},
    
})

//Hash password before saving
ueserSchema.pre('save', async function () {
    if(!this.isModified('password')){
       
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    
})

const User = mongoose.model('User',ueserSchema);

export default User 