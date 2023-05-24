const collection = [];

const addRemove = {
  existingTasks: () => collection,
  addTask: (taskDescription) => {
    const data = {
      description: taskDescription,
      completed: false,
      index: collection.length + 1,
    };
    if (data.description !== '') {
      collection.push(data);
    }
  },
  removeTask: (index) => {
    collection.splice(index, 1);
    return collection;
  },
};

module.exports = { collection, addRemove };