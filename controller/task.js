import {Task} from '../models/taskSchema.js'
export const newTaskAdd = async (req, res) => {
    const{title,description} = req.body;
    await Task.create({
       title: title,
       description: description,
       user:req.user,

    })
    res.status(200).json({
        success: true,
        message:'Added successfully'
    })
}
export const getMyTasks = async (req, res) => {
    const user_id = req.user.id;
    const tasks = await Task.find({user:user_id});
    res.status(200).json({
        success: true,
        tasks: tasks,
    })
}

export const updateTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if(!task){
        res.status(404).json({
            success:true,
            message:'Please add a task to update a task'
        })
        return;
    }
    task.iscompleted=!task.iscompleted;
    await task.save();
    res.status(200).json({
        success:true,
        message:'Task is updated successfully'
    })

}
export const deleteTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    try{
        await task.deleteOne();
        res.status(200).json({
            success:true,
            message:'Task is deleted successfully'
        })
    }
    catch(err){
        res.status(404).json({
            success:false,
            message:'Error in deleting task'
        })
        
    }
    
    
}