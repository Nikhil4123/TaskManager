/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskListPage from "./pages/TaskListPage";
import AddEditTaskPage from "./pages/AddEditTaskPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import { TaskProvider } from "./context/taskContext";
import Navbar from "./components/Navbar"; // Import the Navbar
import HomePage from "./HomePage";

const App = () => {
  return (
    <>
      <div>
        <HomePage />
      </div>
    </>
  );
};

export default App;
