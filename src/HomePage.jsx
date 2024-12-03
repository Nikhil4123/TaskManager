/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskListPage from "./pages/TaskListPage";
import AddEditTaskPage from "./pages/AddEditTaskPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import { TaskProvider } from "./context/taskContext";
import Navbar from "./components/Navbar"; 
import CompletedPage from "./pages/CompletedPage"; 
import InProgressPage from "./pages/InProgressPage"; 
import ToDoPage from "./pages/ToDoPage"; 

const HomePage = () => {
  return (
    <TaskProvider>
      <Router>
        <div className="app-layout">
          <Navbar /> 
          <div className="main-content">
            <Routes>
              <Route path="/" element={<TaskListPage />} />
              <Route path="/add" element={<AddEditTaskPage />} />
              <Route path="/completed" element={<CompletedPage />} /> 
              <Route path="/in-progress" element={<InProgressPage />} /> 
              <Route path="/to-do" element={<ToDoPage />} /> 
              <Route path="/archived" element={<div>Archived Tasks</div>} />
              <Route path="/settings" element={<div>Settings</div>} />
              <Route path="/profile" element={<div>Profile</div>} />
              <Route path="/edit/:id" element={<AddEditTaskPage />} />
              <Route path="/details/:id" element={<TaskDetailsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </TaskProvider>
  );
};

export default HomePage;
