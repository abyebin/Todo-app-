import { displayToPage } from "./todayElements";

const formDiv = document.querySelector('.addNewForm');
const form = document.getElementById('projectForm');

export const todoData = [];

function Todo(title, date, text) {
  this.title = title;
  this.date = date;
  this.text = text;
}

function closeForm() {
  formDiv.setAttribute('style', 'display: none');
}

function resetForm() {
  form.reset();
}

export function displayForm() {
  formDiv.setAttribute('style', 'display: flex');
}

export function addNew() {
  const title = document.getElementById('todo').value;
  const data = document.getElementById('date').value;
  const text = document.getElementById('text').value;

  const todo1 = new Todo(title, data, text);
  todoData.push(todo1);
  resetForm();
  closeForm();
  event.preventDefault();
  displayToPage()
  console.log(todoData)
}

export function viewData() {
  console.log(todoData,"View Data");
}
