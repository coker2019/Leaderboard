const { collection, addRemove } = require('./addItem.js');

describe('Task Add function to add tasks in  collection', () => {
  test('Does addTask function exist?', () => {
    expect(addRemove.addTask).toBeDefined();
  });
  test('Adding task to collection considering the  taskStatement', () => {
    expect(addRemove.addTask('Withdraw money from Bank')).toEqual(collection.description);
  });
  test('Add task to collection with the correct index', () => {
    expect(addRemove.addTask('Clear the Garden')).toEqual(collection.index);
  });
  test('Add task to collection confirm if it is being Completed', () => {
    expect(addRemove.addTask('Wash clothes')).toEqual(collection.isCompleted);
  });
});

describe('Checking the Remove function argument', () => {
  test('Does removeTask function exist?', () => {
    expect(addRemove.removeTask).toBeDefined();
  });

  it('Remove a task if it exist in the collection', () => {
    expect(addRemove.removeTask(0)).toEqual(addRemove.existingTasks());
  });
});