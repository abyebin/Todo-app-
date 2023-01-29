
import { todoData } from './storage';

const main = document.querySelector('.right-main');

export function displayToPage() {
  todoData.forEach((x) => {
    
    const box = document.createElement('div');
    box.classList.add('box')
    main.appendChild(box);

    for(let i in x){
      if(i === "title"){
        const titleText = document.createElement('h1') 
        titleText.textContent = `${x[i]}`
        box.appendChild(titleText)
      }
      else if(i === "date"){
        const titleText = document.createElement('h3') 
        titleText.textContent = `${x[i]}`
        box.appendChild(titleText)
      }
      else if(i === "text"){
        const titleText = document.createElement('p') 
        titleText.textContent = `${x[i]}`
        box.appendChild(titleText)
      }
    }
  });

}
