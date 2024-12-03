/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from "react";
import { getTasks } from "../utils/localData";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks); 
  }, []);

  const value = { tasks, setTasks };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
