//Including the library
import mongoose from "mongoose";
//Connecting to a port using mongoose
export const db = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbname:'TODO_db',
    })
    .then(()=>console.log('DataBase Connected'))
    .catch((err)=>console.log(err));
}
