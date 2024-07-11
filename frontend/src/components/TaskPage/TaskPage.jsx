import React, { useEffect, useState } from 'react';
import TaskItem from '../TaskCard/TaskItem';
import { deleteTask, getTasks } from '../../api/task';
import './taskPage.css';
import Filter from '../Filter/Filter';
import { Link } from 'react-router-dom';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTasks(filter);
  }, [filter]);

  const fetchTasks = async (priority) => {
    const tasks = await getTasks(priority);
    setTasks(tasks);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className='task-page-container'>
      <div className='task-page-top'>
        <Filter setFilter={setFilter} />
        <Link to="/addTask" className="task-page-link">Add Task</Link>
      </div>
      {tasks.length === 0 && <p>No tasks found.</p>}
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onDelete={() => handleDeleteTask(task.id)} />
      ))}
    </div>
  );
};

export default TaskPage;