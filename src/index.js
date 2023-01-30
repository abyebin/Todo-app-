import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import {
  addNew,
  displayForm,
  closeForm,
  resetForm,
  toLocal,
  todoData,
} from './storage';
import { displayToPage } from './todayElements';

//querySelecters
const closeButton = document.getElementById('closeFormButton');
const resetFormButton = document.getElementById('resetFormButton');
const addNewButton = document.querySelector('.addNewTodo');
const submitButton = document.getElementById('submitForm');

//addEventListners
closeButton.addEventListener('click', closeForm);
resetFormButton.addEventListener('click', resetForm);

addNewButton.addEventListener('click', displayForm);
submitButton.addEventListener('click', addNew);

window.onload = displayToPage();
