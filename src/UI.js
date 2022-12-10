import { addTaskToInput } from "./task";
import { addProject } from "./project";
import { taskList } from "./task";
import { displayTask } from "./task";
import { deleteTodo } from "./editingTasks"


export function DOMevents() {

    const addTaskBtn = document.querySelector('#submitTaskBtn')
    addTaskBtn.addEventListener('click', function () {
        addTaskToInput()
        clearModalData()
        // deleteEvents()
    })

    const addProjectBtn = document.querySelector('#submitProjectBtn')
    addProjectBtn.addEventListener('click', function () {
        addProject()
        projectEvents()
        setActiveProject()
        for (let i = 0; i < filterProjects(document.querySelector('.active').innerText).length; i++) {
            displayTask(filterProjects(document.querySelector('.active').innerText)[i])
        }

    })

    const sidebarItems = document.querySelectorAll('.sidebar-item')
    sidebarItems.forEach((item) => item.addEventListener('click', () => {
        loadProjectTitle(item.innerText)
        clearDisplay()
        setActiveProject()
    }))

    const inbox = document.querySelector('#inbox')
    inbox.addEventListener('click', function () {
        for (let i = 0; i < filterProjects('Inbox').length; i++) {
            displayTask(filterProjects('Inbox')[i])
        }

    })




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



const clearDisplay = () => {
    const taskListSection = document.querySelector('#taskListSection')
    taskListSection.innerHTML = ''

}

const loadProjectTitle = (title) => {
    const projectTitle = document.querySelector('#projectTitle')
    projectTitle.innerText = title

}


const projectEvents = () => {
    let projects = document.querySelectorAll('.project-item')
    projects.forEach((project) => project.addEventListener('click', () => {
        loadProjectTitle(project.innerText)
        clearDisplay()
        for (let i = 0; i < filterProjects(project.innerText).length; i++) {
            displayTask(filterProjects(project.innerText)[i])
        }

    }))
}








const clearModalData = () => {
    document.querySelector('#taskNameInput').value = ''
    document.querySelector('#taskDescription').value = ''
    document.querySelector('#taskDueDate').value = ''
    document.querySelector('#todoTime').value = ''
    // document.querySelector('#taskPriority').value = ''
    // document.querySelector('#taskProject').value = ''
}





const filterProjects = (projectName) => {

    const filtered = taskList.filter(task => task.projectSelected === projectName);
    return filtered
}



