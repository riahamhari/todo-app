import { addTaskToInput } from "./task";
import { addProject } from "./project";
import { taskList } from "./task";
import { displayTask } from "./task";
import { projectList } from "./project";
import { getStoredProjects } from "./localStorage";
import { displayProject } from "./project";
import { updateModalOptions } from "./project";
import { storeTasks } from "./localStorage";
import { getStoredTasks } from "./localStorage";
import { updateTodo } from "./editingTasks";



export function DOMevents() {
    window.addEventListener('load', () => {
        for (let i = 0; i < filterProjects('Inbox').length; i++) {
            displayTask(filterProjects('Inbox')[i])
        }
        getStoredProjects().forEach((project) => {
            displayProject(project)
            updateModalOptions(project)

        })
        // console.log(projectList)
        // console.log(taskList)
    })

    const saveBtn = document.querySelector('#saveBtn')
    saveBtn.addEventListener('click', function () {
        updateTodo()
        displayActiveTasks()

        // Hide the modal
        $('#updateTodoModal').modal('hide');
    });





    const addTaskBtn = document.querySelector('#submitTaskBtn')
    addTaskBtn.addEventListener('click', function () {
        addTaskToInput()
        storeTasks(taskList)
        clearModalData()
        displayActiveTasks()

        // deleteEvents()
    })

    const addProjectBtn = document.querySelector('#submitProjectBtn')
    addProjectBtn.addEventListener('click', function () {
        addProject()
        clearProjectModal()
        projectEvents()
        setActiveProject()

        // for (let i = 0; i < filterProjects(document.querySelector('.active').innerText).length; i++) {
        //     displayTask(filterProjects(document.querySelector('.active').innerText)[i])
        // }

    })

    const sidebarItems = document.querySelectorAll('.sidebar-item')
    sidebarItems.forEach((item) => item.addEventListener('click', () => {
        loadProjectTitle(item.innerText)
        clearDisplay()
        setActiveProject()
        for (let i = 0; i < filterProjects(`${item.innerText}`).length; i++) {
            displayTask(filterProjects(`${item.innerText}`)[i])
        }
    }))

    const inbox = document.querySelector('#inbox')
    inbox.addEventListener('click', () => {
        loadProjectTitle('Inbox')
        clearDisplay()
        setActiveProject()
        for (let i = 0; i < filterProjects('Inbox').length; i++) {
            displayTask(filterProjects('Inbox')[i])
        }
    })


    // const inbox = document.querySelector('#inbox')
    // inbox.addEventListener('click', function () {
    //     for (let i = 0; i < filterProjects('Inbox').length; i++) {
    //         displayTask(filterProjects('Inbox')[i])
    //     }

    // })






}

export function displayActiveTasks() {
    const taskListSection = document.querySelector('#taskListSection')
    taskListSection.innerHTML = ''

    let current = document.getElementsByClassName("active")[0].innerText
    for (let i = 0; i < filterProjects(`${current}`).length; i++) {
        displayTask(filterProjects(`${current}`)[i])
    }
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



export const clearDisplay = () => {
    const taskListSection = document.querySelector('#taskListSection')
    taskListSection.innerHTML = ''

}

export const loadProjectTitle = (title) => {
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

const clearProjectModal = () => {
    document.querySelector('#newProjectInput').value = ''
}





export const filterProjects = (projectName) => {
    if (getStoredTasks().length <= 0) {
        const filtered = taskList.filter(task => task.projectSelected === projectName);
        return filtered
    }
    else {
        const filtered = getStoredTasks().filter(task => task.projectSelected === projectName);
        return filtered
    }
}

// function loadStoredTasks() {
//     for (let i = 0; i < getStoredTasks().length; i++) {

//         displayTask(getStoredTasks()[0])
//     }
// }



