import './style.css';

import { createMyTask } from './modules/Manager.js';
import clearCompleted from './modules/completeClear.js';

const createTask = document.getElementById('create');
const form = document.querySelector('form');
const formInput = document.querySelector('.input');
const clearButton = document.querySelector('#DeleteButton');

createTask.addEventListener('click', (e) => {
  e.preventDefault();
  const myTask = formInput.value;
  if (myTask) {
    createMyTask();
    form.reset();
  }
});

clearButton.addEventListener('click', () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  clearCompleted(tasks);
});
