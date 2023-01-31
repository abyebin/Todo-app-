import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import { addNew, displayForm, closeForm, resetForm, todoData } from './storage';
import { displayToPage } from './todayElements';
import { resetPage, deleteItems } from './newFile';

//querySelecters

const closeButton = document.getElementById('closeFormButton');
const resetFormButton = document.getElementById('resetFormButton');
const addNewButton = document.querySelector('.addNewTodo');
const submitButton = document.getElementById('submitForm');
const resetButton = document.querySelector('.reset');
const logobutton = document.querySelector('.logo-div');

//addEventListners
resetButton.addEventListener('click', resetPage);
closeButton.addEventListener('click', closeForm);
resetFormButton.addEventListener('click', resetForm);
addNewButton.addEventListener('click', displayForm);
submitButton.addEventListener('click', addNew);
logobutton.addEventListener('click', deleteItems);

window.onload = displayToPage();

// Get all cards
const cards = document.querySelectorAll(".box");
// Loop through each card
for (let i = 0; i < cards.length; i++) {
// Get delete icon for each card
const deleteIcon = cards[i].querySelector(".deleteB");
// Add click event to delete icon
deleteIcon.addEventListener("click", function() {
// Get card data
const cardData = cards[i].querySelector(".titleDiv").textContent;
// Delete card from local storage
let cardDataObjects = JSON.parse(localStorage.getItem("todoData")) || [];
cardDataObjects = cardDataObjects.filter(function(cardDataObject) {
return cardDataObject !== cardData;
});
cardDataObjects.splice(i,1)
localStorage.setItem("todoData", JSON.stringify(cardDataObjects));
// Remove card from the DOM
cards[i].remove();
localStorage.setItem("todoData", JSON.stringify(cardDataObjects));
});
}
