import express from 'express';
import cors from 'cors';
const app = express();
import {db} from './config/mongoose.js'

import dotenv from'dotenv';
dotenv.config({
    path:'./config/config.env',
})
db();
import userRouter from './routes/users.js'//importing user route from './routes/users.js'
import taskRouter from './routes/tasks.js'//importing task route from './routes/tasks.js'
import cookieParser from 'cookie-parser';
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:['GET','PUT','POST','DELETE'],
    credentials:true,
}))
app.use(cookieParser());
app.use(express.json());//Using middleware to send json data in response
app.get('/', (req, res) => {
    res.send('Nicely Working')
})
app.use('/api/v1/users', userRouter);
app.use('/api/v1/tasks', taskRouter);

app.listen(4000, (err)=>{
    if (err) {
        console.log('Error in running the server');
        return
    }

    console.log(`The server is running on port no. ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})