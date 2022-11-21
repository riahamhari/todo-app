import { addTaskToInput } from "./task";

export function DOMevents() {

    const addTaskBtn = document.querySelector('#submitTaskBtn')

    addTaskBtn.addEventListener('click', addTaskToInput)
}

export function setActiveProject() {
    const sidebarItems = document.querySelectorAll('.sidebar-item')
    for (let i = 0; i < sidebarItems.length; i++) {
        sidebarItems[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}



