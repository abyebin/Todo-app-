import { displayToPage } from './todayElements';
const formDiv = document.querySelector('.addNewForm');
const form = document.getElementById('projectForm');

export let todoData = [
  {
    title: 'Wash Clothes',
    date: '2023-01-31',
    text: 'Its the end of the month, Wash Your Cloths.',
    priority: '10',
  },
  {
    title: 'Water Plants',
    date: '2025-01-01',
    text: 'Different people have different opinions on when and how to water the plants, but the most appropriate time of watering the plants is in the early morning or late evening..',
    priority: '50',
  },
  {
    title: 'Sea side walk',
    date: '2023-02-06',
    text: 'Go for a Walk',
    priority: '30',
  },
  {
    title: "Ebin's BirthDay",
    date: '2023-09-26',
    text: "Its Ebin's Birth Day, Remember to bring gift.",
    priority: '90',
  },
];

function Todo(title, date, text, priority) {
  this.title = title;
  this.date = date;
  this.text = text;
  this.priority = priority;
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
  const date = document.getElementById('date').value;
  const text = document.getElementById('text').value;
  const priority = document.getElementById('priority').value;

  if (title.length < 1 || date.length < 1) {
    return;
  } else {
    // const todo1 = new Todo(title, date, text, priority);
    // todoData.push(todo1);
    // localStorage.setItem('todoData',JSON.stringify(todoData))

    resetForm();
    closeForm();
    // event.preventDefault();

    const existingData = JSON.parse(localStorage.getItem('todoData')) || [];
    todoData = [...existingData, new Todo(title, date, text, priority)];
    localStorage.setItem('todoData', JSON.stringify(todoData));

    //prevent tasks from doubiling
    const page = (document.querySelector('.right-main').innerHTML = '');
    displayToPage();
    window.location.reload()
  }
}
