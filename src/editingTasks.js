import { taskList } from "./task";
import { displayTask } from "./task";


// delete todo


export function deleteTodo(indexOfArray) {
    if (indexOfArray > -1) {
        taskList.splice(indexOfArray, 1);
    }
    const taskListSection = document.querySelector('#taskListSection')
    taskListSection.innerHTML = ''
    taskList.forEach((task) => displayTask(task))

}




