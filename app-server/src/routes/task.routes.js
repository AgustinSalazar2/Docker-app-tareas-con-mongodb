import express from 'express';

const router = express.Router();

import ctrlTask from '../controllers/tasks.controllers.js';

router.get('/task', ctrlTask.getTasks);

router.post('/task', ctrlTask.postTasks);

router.put('/task/:id', ctrlTask.putTasks);

router.delete('/task/:id', ctrlTask.deleteTasks);

router.put('/task/done/:id', ctrlTask.finishTasks);

export default router;