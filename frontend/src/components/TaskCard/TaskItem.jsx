import React from 'react';
import { Link } from 'react-router-dom';
import { deleteTask } from '../../api/task';
import "./taskItem.css";

const TaskItem = ({ task, onDelete }) => {
  const handleDelete = async () => {
    try {
      await deleteTask(task.id);
      onDelete(task.id);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="task-item-container card">
      {task.image && (
        <img
          src={`/upload/${task.image}`}
          alt="Task"
          className="task-image"
        />
      )}
      <div className="task-item-details">
        <h3>{task.heading}</h3>
        <p>{task.description}</p>
        <p>{new Date(task.date).toLocaleDateString()} {task.time}</p>
        <p>Priority: {task.priority}</p>
        <div className="task-item-actions">
          <Link to={`/editTask/${task.id}`} className="button">Edit</Link>
          <button onClick={handleDelete} className="button delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
