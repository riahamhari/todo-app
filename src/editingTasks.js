import { taskList } from "./task";

// delete todo


export function deleteTodo(indexOfArray) {


    if (indexOfArray > -1) {
        taskList.splice(indexOfArray, 1);
    }



}




