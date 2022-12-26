import { deleteTodo } from "./editingTasks"
import { getStoredTasks } from "./localStorage"
// gloal unique ID for todo
let UNIQUE_ID = 0
let taskList = []
taskList = getStoredTasks()




// factory function
const createTask = (name, description, date, time, priority, projectSelected) => {
    UNIQUE_ID++;  // Increment the UNIQUE_ID value
    return { name, description, date, time, priority, projectSelected, taskId: UNIQUE_ID }  // Add the taskId property to the task object
}



// extract task info from modal

function processNewTask() {
    const name = document.querySelector('#taskNameInput').value
    const description = document.querySelector('#taskDescription').value
    const date = document.querySelector('#taskDueDate').value
    const time = document.querySelector('#todoTime').value
    const priority = document.querySelector('#taskPriority').value
    const projectSelected = document.querySelector('#taskProject').value

    return createTask(name, description, date, time, priority, projectSelected)
}

function addTaskToInput() {
    const newTask = processNewTask()
    taskList.push(newTask)
    displayTask(newTask)



}



export function displayTask(task) {
    UNIQUE_ID++
    const taskListSection = document.querySelector('#taskListSection')
    const taskItem = document.createElement('li')
    taskItem.classList.add('list-group-item', 'taskItem')
    taskItem.setAttribute('id', `task${UNIQUE_ID}`)
    const taskName = document.createElement('div')
    taskName.classList.add('taskName')
    const formCheckInput = document.createElement('input')
    formCheckInput.classList.add('form-check-input', 'me-1')
    formCheckInput.setAttribute('type', 'checkbox')
    formCheckInput.setAttribute('id', `todo${UNIQUE_ID}`)

    const label = document.createElement('label')
    label.classList.add('form-check-label')
    label.setAttribute('data-bs-toggle', 'collapse')
    label.setAttribute('data-bs-target', `#collapseDetails${UNIQUE_ID}`)
    label.setAttribute('aria-expanded', 'false')
    label.setAttribute('aria-controls', `collapseDetails${UNIQUE_ID}`)
    label.setAttribute('type', 'button')
    label.textContent = ` ${task.name}`

    const taskAction = document.createElement('div')
    taskAction.classList.add('taskAction')
    const card = document.createElement('div')
    card.classList.add('card')
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const collapse = document.createElement('div')
    collapse.classList.add('collapse')
    collapse.setAttribute('id', `collapseDetails${UNIQUE_ID}`)

    const detailsCard = document.createElement('div')
    detailsCard.classList.add('card', 'card-body')
    const dueDate = document.createElement('span')
    dueDate.classList.add('list-group-item')
    dueDate.innerHTML = `<b>Due Date:</b> ${task.date} ${task.time}`
    const descDetails = document.createElement('span')
    descDetails.classList.add('list-group-item')
    descDetails.innerHTML = `<b>Description:</b> ${task.description}`
    const priority = document.createElement('span')
    priority.classList.add('list-group-item')
    priority.innerHTML = `<b>Priority:</b> ${task.priority}`


    // icons
    const editIcon = document.createElement('i')
    editIcon.classList.add('fa-regular', 'fa-pen-to-square', 'tt')
    editIcon.setAttribute('data-bs-placement', 'bottom')
    editIcon.setAttribute('title', 'edit')

    const priorityIcon = document.createElement('i')
    priorityIcon.classList.add('fa-solid', 'fa-flag', 'tt')
    priorityIcon.setAttribute('data-bs-placement', 'bottom')
    priorityIcon.setAttribute('title', 'Change Priority')

    const moveIcon = document.createElement('i')
    moveIcon.classList.add('fa-solid', 'fa-circle-arrow-right', 'tt')
    moveIcon.setAttribute('data-bs-placement', 'bottom')
    moveIcon.setAttribute('title', 'Move To Project')

    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fa-regular', 'fa-trash-can', 'tt')
    trashIcon.setAttribute('data-bs-placement', 'bottom')
    trashIcon.setAttribute('data-task-id', task.taskId)
    trashIcon.addEventListener('click', (e) => {

        const taskId = e.target.dataset.taskId
        console.log(taskId)
        const index = taskList.findIndex(task => task.taskId === parseInt(taskId))

        taskListSection.innerHTML = ''
        deleteTodo(index)

    })

    trashIcon.setAttribute('title', 'Delete')

    taskName.append(formCheckInput, label)
    taskAction.append(editIcon, priorityIcon, moveIcon, trashIcon)
    taskItem.append(taskName, taskAction)
    taskListSection.appendChild(taskItem)

    detailsCard.append(dueDate, descDetails, priority)
    collapse.appendChild(detailsCard)
    taskListSection.appendChild(collapse)

}

export { addTaskToInput }
export { taskList }

