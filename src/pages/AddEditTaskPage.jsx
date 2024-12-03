/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/taskContext";

const AddEditTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, setTasks } = useTaskContext();

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "ToDo",
    creationDate: new Date().toISOString(),
  });

  useEffect(() => {
    if (id) {
      const taskToEdit = tasks.find((task) => task.id == id);
      if (taskToEdit) setForm(taskToEdit);
    }
  }, [id, tasks]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSetCurrentDate = () => {
    setForm((prevForm) => ({
      ...prevForm,
      creationDate: new Date().toISOString(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id == id ? form : task))
      );
    } else {
      setTasks((prevTasks) => [
        ...prevTasks,
        { ...form, id: +Date.now().toString() },
      ]);
    }
    navigate("/");
  };

  return (
    <div className='form-container'>
      <h1>{id ? "Edit Task" : "Add New Task"}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type='text'
            name='title'
            value={form.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name='description'
            value={form.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:
          <select
            name='status'
            value={form.status}
            onChange={handleChange}
            required
          >
            <option value='ToDo'>To Do</option>
            <option value='InProgress'>In Progress</option>
            <option value='Completed'>Completed</option>
          </select>
        </label>
        
        <label>
          Creation Date and Time:
          <input
            type='datetime-local'
            name='creationDate'
            value={form.creationDate.slice(0, 16)} 
            onChange={handleChange}
          />
        </label>
        
        <button type="button" onClick={handleSetCurrentDate}>
          Set Current Time
        </button>

        <button type='submit'>{id ? "Update Task" : "Create Task"}</button>
      </form>
    </div>
  );
};

export default AddEditTaskPage;
