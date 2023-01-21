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
import { addDays, isWithinInterval, startOfToday, isToday } from 'date-fns';




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



    const nextSevenDays = document.querySelector('#nextSevenDays')
    nextSevenDays.addEventListener('click', () => {
        loadProjectTitle('Next 7 Days')
        clearDisplay()
        const tasksDueInSevenDays = getStoredTasks().filter((task) => {
            // Convert the due date to a Date object

            const dueDate = new Date(task.date);
            // get current day
            const today = startOfToday();

            // Get the date 7 days from now
            const sevenDaysFromNow = addDays(today, 7);


            // Check if the due date is within the next 7 days
            return isWithinInterval(dueDate, { start: today, end: sevenDaysFromNow });
        });
        tasksDueInSevenDays.forEach((taskDue) => {
            displayTask(taskDue)
        })
    })





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

    // const calendarItems = document.querySelectorAll('.calendar-item')
    // calendarItems.forEach((item) => item.addEventListener('click', () => {
    //     loadProjectTitle(item.innerText)
    //     clearDisplay()
    //     setActiveProject()

    // }))

    const inbox = document.querySelector('#inbox')
    inbox.addEventListener('click', () => {
        loadProjectTitle('Inbox')
        clearDisplay()
        setActiveProject()
        for (let i = 0; i < filterProjects('Inbox').length; i++) {
            displayTask(filterProjects('Inbox')[i])
        }
    })

    const today = document.querySelector('#today')
    today.addEventListener('click', () => {
        const tasksDueToday = getStoredTasks().filter((task) => isToday(new Date(task.date)))

        loadProjectTitle('Today')
        clearDisplay()
        // setActiveProject()
        tasksDueToday.forEach((taskDue) => {
            displayTask(taskDue)
        })

    })

    const angleDownIcon = document.querySelector('.fa-angle-down');

    angleDownIcon.addEventListener('click', () => {
        angleDownIcon.classList.toggle('rotate-90-degrees-clockwise');
        angleDownIcon.classList.toggle('rotate-90-degrees-anti-clockwise');
    });



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

    const calendarItems = document.querySelectorAll('.calendar-item')
    for (let i = 0; i < calendarItems.length; i++) {
        calendarItems[i].addEventListener("click", function () {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
    // const today = document.querySelector('#today')
    // today.addEventListener("click", () => {
    //     let current = document.getElementsByClassName("active");
    //     current[0].className = current[0].className.replace(" active", "");
    //     this.className += " active";
    // })


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









