import { taskList } from "./task";
import { displayTask } from "./task";
import { getStoredTasks } from "./localStorage";
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

    let projects = JSON.parse(localStorage.getItem('projectList'))

    const updatedProjects = projects.filter((project) => project.name !== nameOfProject);
    storeProjects(updatedProjects)
    // projectList.push(updatedProjects)
    const updatedTasks = taskList.filter((task) => task.projectSelected !== nameOfProject);
    storeTasks(updatedTasks)
    // const inbox = document.querySelector('#inbox')
    // let current = document.getElementsByClassName("active");
    // current[0].className = current[0].className.replace(" active", "")
    updatedProjects.forEach((project) => updateModalOptions(project))
    updatedProjects.forEach((project) => displayProject(project))

    // inbox.className += " active";
    // displayActiveTasks()



}




