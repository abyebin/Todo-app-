import { displayToPage } from './todayElements';
const formDiv = document.querySelector('.addNewForm');
const form = document.getElementById('projectForm');

export const todoData = [
  {
    title: 'Wash Clothes',
    date: '2023-01-31',
    text: 'Its the end of the month, Wash Your Cloths.',
  },
  {
    title: 'Water Plants',
    date: '2025-01-01',
    text: 'Different people have different opinions on when and how to water the plants, but the most appropriate time of watering the plants is in the early morning or late evening..',
  },
  {
    title: 'Sea side walk',
    date: '2023-02-06',
    text: 'Go for a Walk',
  },
  {
    title: "Ebin's BirthDay",
    date: '2023-09-26',
    text: "Its Ebin's Birth Day, Remember to bring gift.",
  },
];

function Todo(title, date, text) {
  this.title = title;
  this.date = date;
  this.text = text;
}

export function closeForm() {
  formDiv.setAttribute('style', 'display: none');
}

export function resetForm() {
  form.reset();
}

export function displayForm() {
  formDiv.setAttribute('style', 'display: flex');
}

export function addNew() {
  const title = document.getElementById('todo').value;
  const data = document.getElementById('date').value;
  const text = document.getElementById('text').value;

  if (title.length < 1 || date.length < 1) {
    return;
  } else {
    const todo1 = new Todo(title, data, text);

    todoData.push(todo1);

    resetForm();
    closeForm();
    event.preventDefault();
    //prevent tasks from doubiling
    const page = (document.querySelector('.right-main').innerHTML = '');
    displayToPage();
    console.log([...todoData])
  }
}
