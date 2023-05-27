import './style.css';
import { getData } from './modules/getApi.js';
import postUserData from './modules/userInput.js';

const form = document.getElementById('DataForm');
const refresh = document.getElementById('refresh');

form.addEventListener('submit', postUserData);
refresh.addEventListener('click', getData);