import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    title:{
        type: 'String',
        required: true,
    },
    description:{
        type: 'String',
        unique: true,
        required: true,
    },
    iscompleted:{
        type:'boolean',
        default:'false',
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required: true,
    },
    createdAt:{
        type: 'Date',
        default: Date.now(),
    }
})
export const Task = mongoose.model('Task', taskSchema);