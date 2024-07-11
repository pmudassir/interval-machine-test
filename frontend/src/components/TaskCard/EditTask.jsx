import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTaskById, updateTask } from '../../api/task';
import './editTask.css';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    heading: '',
    description: '',
    date: '',
    time: '',
    image: '',
    priority: 'low'
  });

  useEffect(() => {
    const fetchTask = async () => {
      const fetchedTask = await getTaskById(id);
      const formattedDate = new Date(fetchedTask.date).toISOString().split('T')[0];
      setTask({ ...fetchedTask, date: formattedDate });
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setTask(prevState => ({
      ...prevState,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('heading', task.heading);
    formData.append('description', task.description);
    formData.append('date', task.date);
    formData.append('time', task.time);
    formData.append('priority', task.priority);
    if (task.image) {
      formData.append('image', task.image);
    }
    await updateTask(id, formData);
    navigate('/');
  };

  return (
    <div className="edit-task-container">
      <h1>Edit Task</h1>
      <form className="edit-task-form" onSubmit={handleSubmit}>
        <div>
          <label>Heading</label>
          <input
            type="text"
            name="heading"
            value={task.heading}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={task.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Time</label>
          <input
            type="time"
            name="time"
            value={task.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Priority</label>
          <select
            name="priority"
            value={task.priority}
            onChange={handleChange}
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label>Image</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
