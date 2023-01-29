import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import {addNew, displayForm, viewData } from './storage';
import { displayToPage } from './todayElements';

//querySelecters
const today = document.querySelector('.today');
const addNewButton = document.querySelector('.addNewTodo');
const submitButton = document.getElementById('submitForm');

//addEventListners
addNewButton.addEventListener('click', displayForm);
submitButton.addEventListener('click', addNew);
window.onload = displayToPage()

viewData()
let a = "Different people have different opinions on when and how to water the plants, but the most appropriate time of watering the plants is in the early morning or late evening.."
console.log(a.length)