import Tasks from '../models/Task.js';

const ctrlTask = {};
//Controlador para crear una nueva tarea
ctrlTask.postTasks = async (req, res) => {
    const {title, description} = req.body;

    const task = new Tasks({
        title,
        description,
    });

    try {
        const newTask = await task.save();
        return res.json({
            msg: 'Tarea creada correctamente'
        });
    } catch (error) {
        res.json({
            msg: 'Error al crear nueva tarea'
        });
    }
}

//Controlador para listar las tareas creadas
ctrlTask.getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find({active: true});
        if (tasks.length === 0) {
            return res.json({
                msg: "No tiene tareas creadas"
            })
        }
        return res.json(tasks);
    } catch (error) {
        res.json({
            msg: "Error al listar las tareas"
        });
    }
}

//Controlador para actualizar tareas
ctrlTask.putTasks = async (req, res) => {
    const idTask = req.params.id;
    try {
        if (!idTask) {
            return res.json({
                msg: 'no viene id en el parametro'
            })
        }
        const { title, description } = req.body;
    
        await Tasks.findByIdAndUpdate(idTask, { title, description });
    
        return res.json({
            msg: 'Tarea modificada correctamente'
        })
    } catch (error) {
        res.json({
            msg: "Error al modificar la tarea"
        });
    }
}

//controlador para eliminar tareas
ctrlTask.deleteTasks = async (req, res) => {
    const idTask = req.params.id;
    try {
        if (!idTask) {
            return res.json({
                msg: 'no viene id en el parametro'
            })
        }
    
        await Tasks.findByIdAndUpdate(idTask, { active: false });
    
        return res.json({
            msg: 'Tarea eliminada correctamente'
        })
    } catch (error) {
        res.json({
            msg: "Error al eliminar la tarea"
        });
    }
}

//Controlador para marcar tareas como completadas
ctrlTask.finishTasks = async (req, res) => {
    const idTask = req.params.id;
    try {
        if (!idTask) {
            return res.json({
                msg: 'no viene id en el parametro'
            });
        }
    
        await Tasks.findByIdAndUpdate(idTask, { finished: true });
    
        return res.json({
            msg: 'Tarea marcada como realizada'
        });
    } catch (error) {
        res.json({
            msg: "Error al modificar el estado"
        });
    }
}

export default ctrlTask;