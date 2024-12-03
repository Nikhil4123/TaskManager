/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTaskContext } from "../context/taskContext";

const TaskListPage = () => {
  const { tasks, setTasks } = useTaskContext();

  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");

  const statuses = ["All", "ToDo", "InProgress", "Completed"];

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (selectedStatus === "All") return true; 
      return task.status === selectedStatus;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.creationDate) - new Date(a.creationDate); 
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title); 
    }
    return 0;
  });

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Task Management Dashboard</h1>
      <div className="task-actions">
        <Link to="/add" className="add-task-button">
          Add New Task
        </Link>
      </div>

      <div className="filters">
        <div className="filter-status">
          <label>Status: </label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-search">
          <label>Search: </label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by task title or description"
          />
        </div>

        <div className="filter-sort">
          <label>Sort by: </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>

      <div className="columns">
        {selectedStatus === "ToDo" ? (
          <div className="column">
            <h2 className="column-title">All Tasks</h2>
            {sortedTasks.map((task) => (
              <div key={task.id} className="task-card">
                <h3>{task.title}</h3>
                <p className="meta">
                  Created: {new Date(task.creationDate).toDateString()}
                </p>
                <div className="task-actions">
                  <Link to={`/details/${task.id}`} className="details-button">
                    View Details
                  </Link>
                  <Link to={`/edit/${task.id}`} className="edit-button">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          statuses
            .filter((status) => status !== "All") 
            .map((status) => (
              <div key={status} className="column">
                <h2 className="column-title">{status}</h2>
                <Link to={`/${status.toLowerCase()}Page`} className="status-link">
                  View {status} Tasks
                </Link>

                {sortedTasks
                  .filter((task) => task.status === status)
                  .map((task) => (
                    <div key={task.id} className="task-card">
                      <h3>{task.title}</h3>
                      <p className="meta">
                        Created: {new Date(task.creationDate).toDateString()}
                      </p>
                      <div className="task-actions">
                        <Link to={`/details/${task.id}`} className="details-button">
                          View Details
                        </Link>
                        <Link to={`/edit/${task.id}`} className="edit-button">
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(task.id)}
                          className="delete-button"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default TaskListPage;
