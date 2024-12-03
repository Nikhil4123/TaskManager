import tasks from "../mock/mockTasks.json";

let mockTasks = [...tasks];

export const getTasks = () => Promise.resolve(mockTasks);

export const addTask = (task) => {
  const newTask = { ...task, id: Math.random() };
  mockTasks.push(newTask);
  return Promise.resolve(newTask);
};

export const updateTask = (id, updatedTask) => {
  mockTasks = mockTasks.map((task) => (task.id === id ? updatedTask : task));
  return Promise.resolve(updatedTask);
};

export const deleteTask = (id) => {
  mockTasks = mockTasks.filter((task) => task.id !== id);
  return Promise.resolve();
};
