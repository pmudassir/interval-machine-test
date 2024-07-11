import React, { useState } from 'react';
import { addTask } from '../../api/task';
import { useNavigate } from 'react-router-dom';
import './addTask.css';

const AddTask = () => {
  const [task, setTask] = useState({
    heading: '',
    description: '',
    date: '',
    time: '',
    image: '',
    priority: 'low'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(task);
    navigate('/');
  };

  return (
    <div className='task-form-container'>
      <form className="task-form" onSubmit={handleSubmit}>
        <input type="text" name="heading" value={task.heading} onChange={handleChange} placeholder="Heading" required />
        <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description"></textarea>
        <input type="date" name="date" value={task.date} onChange={handleChange} required />
        <input type="time" name="time" value={task.time} onChange={handleChange} required />
        <input type="file" name="image" onChange={(e) => setTask({ ...task, image: e.target.files[0].name })} />
        <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
