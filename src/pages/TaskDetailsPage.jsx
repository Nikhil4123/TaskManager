/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTaskContext } from "../context/taskContext";

const TaskDetailsPage = () => {
  const { id } = useParams();
  const { tasks } = useTaskContext();

  const task = tasks.find((task) => task.id == id);

  if (!task) {
    return <p>Task not found!</p>;
  }

  return (
    <div className='details-container'>
      <h1>Task Details</h1>
      <h2>{task.title}</h2>
      <p>Description: {task.description || "No description provided"}</p>
      <p>Created: {new Date(task.creationDate).toDateString()}</p>
      <Link to='/' className='back-button'>
        Back to Dashboard
      </Link>
    </div>
  );
};

export default TaskDetailsPage;
