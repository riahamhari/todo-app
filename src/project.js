let projectList = []

const createProject = (name) => {
    const taskList = [];
    const taskNum = taskList.length;
    return { name, taskList, taskNum }


}

const processNewProject = () => {
    const projectName = document.querySelector('#newProjectInput').value
    return createProject(projectName)

}

const addProject = () => {
    const newProject = processNewProject()
    projectList.push(newProject)
    updateModalOptions(newProject)
    displayProject(newProject)


}

function displayProject(project) {
    const projectGroup = document.querySelector('#projectGroup');
    const projectItem = document.createElement('li');
    projectItem.classList.add('list-group-item', 'border-0', 'sidebar-item', 'project-item');
    projectItem.innerHTML = `<i class="fa-regular fa-circle"></i>${project.name}`;
    projectGroup.appendChild(projectItem);



}
function updateModalOptions(project) {
    const taskProject = document.querySelector('#taskProject')
    const projectOption = document.createElement('option')
    projectOption.setAttribute('value', `${project.name}`)
    projectOption.innerText = project.name
    taskProject.appendChild(projectOption)
}


// function saveToLocalStorage() {
//     localStorage.setItem("myProjectList", JSON.stringify(projectList));
//     localStorage.setItem("currentId", (id).toString());
// }

export { addProject }