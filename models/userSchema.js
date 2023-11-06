//Creating a schema for users email id and name
// This is the schema
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type: 'String',
        required: true,
    },
    email:{
        type: 'String',
        unique: true,
        required: true,
    },
    password:{
        type: 'String',
        required: true,
    },
    createdAt:{
        type: 'Date',
        default:Date.now(),
    }
})
export const User = mongoose.model('User', userSchema);
