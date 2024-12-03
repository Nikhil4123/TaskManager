/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className='task-card'>
      <h3>{task.title}</h3>
      {task.description && <p>{task.description}</p>}
      <p className='meta'>Created: {task.creationDate}</p>
      <div className='actions'>
        <button
          onClick={() => navigate("/add", { state: { task } })}
          className='btn edit'
        >
          Edit
        </button>
        <button onClick={() => onDelete(task.id)} className='btn delete'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
