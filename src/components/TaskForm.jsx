/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const TaskForm = ({ initialData, onSubmit }) => {
  const [task, setTask] = useState(
    initialData || { title: "", description: "", status: "To Do", creationDate: new Date().toLocaleString() }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(task);
      }}
      className='task-form'
    >
      <input
        name='title'
        value={task.title}
        onChange={handleChange}
        placeholder='Title'
        required
      />
      <textarea
        name='description'
        value={task.description}
        onChange={handleChange}
        placeholder='Description'
      />
      <select name='status' value={task.status} onChange={handleChange}>
        <option value='To Do'>To Do</option>
        <option value='In Progress'>In Progress</option>
        <option value='Completed'>Completed</option>
      </select>
      <button type='submit' className='btn submit'>
        Save
      </button>
    </form>
  );
};

export default TaskForm;
