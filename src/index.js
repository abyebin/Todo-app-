import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import {addNew, displayForm, viewData } from './storage';

//querySelecters
const today = document.querySelector('.today');
const addNewButton = document.querySelector('.addNewTodo');
const submitButton = document.getElementById('submitForm');

//addEventListners
addNewButton.addEventListener('click', displayForm);
submitButton.addEventListener('click', addNew);

viewData()
