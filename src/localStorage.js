import { taskList } from "./task";


export function storage() {
    localStorage.setItem("taskList", JSON.stringify(taskList))
    console.log(localStorage)
}
