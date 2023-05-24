const newId = (freshTasks) => freshTasks.map((task, id) => ({
  ...task,
  id: id + 1,
}));

const save = (freshTasks) => {
  const updateTask = newId(freshTasks);
  localStorage.setItem('tasks', JSON.stringify(updateTask));
};

export default save;