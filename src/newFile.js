
import { displayToPage } from "./todayElements"

export function resetPage(){
    const storedData = JSON.parse(localStorage.getItem('todoData'))
    storedData.pop()
    localStorage.setItem('todoData',JSON.stringify(storedData))
    const page = (document.querySelector('.right-main').innerHTML = '');
    displayToPage()
}

export function deleteItems(){
    const storedData = JSON.parse(localStorage.getItem('todoData'))
    
    storedData.splice(0,1)
    localStorage.setItem('todoData',JSON.stringify(storedData))
    const page = (document.querySelector('.right-main').innerHTML = '');
    displayToPage()
}

// const boxes = document.querySelector('.right-main')

// boxes.addEventListener('click',(event)=>{
//     if(event.target.matches('.fa-trash')){
//         const parentDiv = event.target.closest('.box')
//         parentDiv.remove()
//     }
// })


// export function deleteX(){
//     const deleteButton  = document.querySelector('fa-trash')
//     deleteButton.addEventListener('click',function(){
//         console.log("Hello")
//     })
// }
