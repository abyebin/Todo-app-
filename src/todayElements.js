import { todoData } from './storage';

const main = document.querySelector('.right-main');

export function displayToPage() {
  console.log(todoData);
  todoData.forEach((x) => {
    const box = document.createElement('div');
    box.classList.add('box');
    main.appendChild(box);

    const iconsDiv = document.createElement('div');
    iconsDiv.classList.add('iconsDiv');
    box.appendChild(iconsDiv);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv');
    box.appendChild(titleDiv);

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('dateDiv');
    box.appendChild(dateDiv);

    const noteDiv = document.createElement('div');
    noteDiv.classList.add('noteDiv');
    box.appendChild(noteDiv);

    for (let i in x) {
      console.log(x)
      if (i === 'title') {
        const titleText = document.createElement('h1');
        titleText.textContent = `${x[i]}`;
        titleDiv.appendChild(titleText);
      } else if (i === 'date') {
        const titleText = document.createElement('h3');
        titleText.textContent = `${x[i]}`;
        dateDiv.appendChild(titleText);
      } else if (i === 'text') {
        const titleText = document.createElement('p');
        titleText.textContent = `${x[i]}`;
        noteDiv.appendChild(titleText);
      } else if (i === 'priority') {
        let y = parseInt(x[i]);

        const priorityx = document.createElement('h3');
        if (y < 20) {
          iconsDiv.classList.add('priority');
          iconsDiv.classList.add('low');
        } else if (y >= 20 && y < 50) {
          iconsDiv.classList.add('priority');
          iconsDiv.classList.add('medium');
        } else if (y >= 50 && y < 80) {
          iconsDiv.classList.add('priority');
          iconsDiv.classList.add('high');
        } else {
          iconsDiv.classList.add('priority');
          iconsDiv.classList.add('urgent');
        }
      }
    }
  });
}
