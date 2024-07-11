const express = require('express');
const router = express.Router();
const { getTasks, getTaskById, addTask, updateTask, deleteTask } = require('../controllers/TaskController');

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks', addTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
