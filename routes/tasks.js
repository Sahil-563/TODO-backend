import express from 'express';
import { newTaskAdd,getMyTasks,updateTask,deleteTask} from '../controller/task.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();
router.post('/newTaskAdd',isAuthenticated,newTaskAdd);
router.get('/getUserTasks',isAuthenticated,getMyTasks);
router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask);
export default router