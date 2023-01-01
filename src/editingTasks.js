import { taskList, selectedTodo } from "./task";
import { displayTask } from "./task";
import { getStoredProjects, getStoredTasks } from "./localStorage";
import { storeTasks } from "./localStorage";
import { displayActiveTasks } from "./ui";
import { displayProject, updateModalOptions } from "./project";
import { storeProjects } from "./localStorage";
import { projectList } from "./project";


// delete todo


export function deleteTodo(indexOfArray) {
    console.log(indexOfArray)
    let tasks = JSON.parse(localStorage.getItem('taskList'));

    tasks.splice(indexOfArray, 1)
    // console.log(tasks)
    taskList.splice(indexOfArray, 1);
    storeTasks(tasks)

    // Remove the task at the specified index from the tasks array

    // Save the updated tasks array back to local storage
    // localStorage.setItem("taskList", JSON.stringify(tasks));
    tasks.forEach((task) => displayTask(task))
    displayActiveTasks()


}

export function deleteProject(nameOfProject) {

    removeProjectOption(nameOfProject)
    projectList = []
    const projects = JSON.parse(localStorage.getItem('projectList'))

    const updatedProjects = projects.filter((project) => project.name !== nameOfProject);
    for (let i = 0; i < updatedProjects.length; i++) {
        projectList.push(updatedProjects[i])
    }
    localStorage.setItem('projectList', '[]');

    // projectList.push(updatedProjects)
    const updatedTasks = taskList.filter((task) => task.projectSelected !== nameOfProject);

    // const inbox = document.querySelector('#inbox')
    // let current = document.getElementsByClassName("active");
    // current[0].className = current[0].className.replace(" active", "")
    // updatedProjects.forEach((project) => updateModalOptions(project))

    updatedProjects.forEach((project) => displayProject(project))

    // inbox.className += " active";v
    // displayActiveTasks()

    // for (let i = 0; i < updatedProjects.length; i++) {
    //     console.log(updatedProjects[i])
    // }


    storeTasks(updatedTasks)
    storeProjects(updatedProjects)

}

function removeProjectOption(name) {
    const selectElement = document.querySelector('#taskProject');
    const options = selectElement.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].text === name) {

            options.remove(i);
        }
    }


}

export function updateTodo() {
    const taskNameInput = document.querySelector('#editedTaskNameInput').value;
    const taskDescription = document.querySelector('#editedTaskDescription').value;
    const taskDueDate = document.querySelector('#editedTaskDueDate').value;
    const todoTime = document.querySelector('#editedTodoTime').value;
    const taskPriority = document.querySelector('#editedTaskPriority').value;
    const taskProject = document.querySelector('#editedTaskProject').value;

    const index = taskList.findIndex(task => task.taskId === selectedTodo.taskId);
    taskList[index].name = taskNameInput;
    taskList[index].description = taskDescription;
    taskList[index].date = taskDueDate;
    taskList[index].time = todoTime;
    taskList[index].priority = taskPriority;
    taskList[index].projectSelected = taskProject;
    storeTasks(taskList);
}



