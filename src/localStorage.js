// import { taskList } from "./task";
import { displayTask } from "./task";

export function storeTasks(listOfTasks) {
    localStorage.setItem("taskList", JSON.stringify(listOfTasks))
}

// code below will be used to retrieve the items from tasklist
export function getStoredTasks() {
    const listItems = JSON.parse(localStorage.getItem('taskList'));
    return listItems
}

export function storeProjects(listOfProjects) {
    localStorage.setItem("projectList", JSON.stringify(listOfProjects))
}

export function getStoredProjects() {
    const projects = JSON.parse(localStorage.getItem('projectList'));
    return projects
}
// code below will be used to load the saved tasks from storage
export function loadStoredTasks() {
    for (let i = 0; i < getStoredTasks().length; i++) {
        displayTask(getStoredTasks()[0])
    }
}







// To automatically save the to-do list when items are added or removed, you can use JavaScript
//  event listeners to listen for events such as clicks or form submissions, and then trigger the
//  saving of the list when these events occur.

// For example, if you have a form for adding new items to the to-do list, you can use the submit
//  event to listen for when the form is submitted, and then save the updated list to local storage.
//  Here is an example of how you can do this:

// Copy code
// document.querySelector('form').addEventListener('submit', function(e) {
//   e.preventDefault();
//   // Add the new item to the to-do list
//   // Save the updated list to local storage
//   localStorage.setItem('todoList', JSON.stringify(listItems));
// });
// In this code, the addEventListener() method is used to listen for the submit event on the form element. 
// When the form is submitted, the preventDefault() method is used to prevent the default behavior of the
//  form (which is to submit the form data to a server), and then the updated list is saved to local storage
//  using the setItem() method.


// Similarly, you can use event listeners to listen for other events, such as clicks on buttons for removing
//  items from the list, and then save the updated list when these events occur. This will ensure that the
// to-do list is automatically saved whenever it is updated.