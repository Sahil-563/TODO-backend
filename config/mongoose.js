//Including the library
import mongoose from "mongoose";
//Connecting to a port using mongoose
export const db = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbname:'TODO_db',
    })
    .then((c)=>console.log(`DataBase Connected with ${c.connection.host}`))
    .catch((err)=>console.log(err));
}
