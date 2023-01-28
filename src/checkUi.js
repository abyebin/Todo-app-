const main = document.querySelector('.right-main')
import todaysTodo from "./todayElements"

export default function isEmpty(){
        main.textContent = ''
        todaysTodo()
}