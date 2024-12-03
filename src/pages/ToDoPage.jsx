/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTaskContext } from "../context/taskContext";

const ToDoPage = () => {
  const { tasks, setTasks } = useTaskContext();

  useEffect(() => {
    console.log("Tasks in ToDoPage:", tasks); 
  }, [tasks]);

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toDoTasks = tasks.filter((task) => task.status === "ToDo");

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">ToDo Tasks</h1>
      <div className="task-actions">
        <Link to="/add" className="add-task-button">
          Add New Task
        </Link>
      </div>

      <div className="task-list">
        {toDoTasks.length === 0 ? (
          <p>No tasks found in "ToDo" status.</p> 
        ) : (
          toDoTasks.map((task) => (
            <div key={task.id} className="task-card">
              <h3>{task.title}</h3>
              <p className="meta">Created: {new Date(task.creationDate).toDateString()}</p>
              <div className="task-actions">
                <Link to={`/details/${task.id}`} className="details-button">
                  View Details
                </Link>
                <Link to={`/edit/${task.id}`} className="edit-button">
                  Edit
                </Link>
                <button onClick={() => handleDelete(task.id)} className="delete-button">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ToDoPage;
