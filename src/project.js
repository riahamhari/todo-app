import { storeProjects } from "./localStorage"
import { taskList } from "./task"
import { displayTask } from "./task"
import { getStoredProjects } from "./localStorage"
import { loadProjectTitle } from "./UI"
import { clearDisplay } from "./UI"
import { setActiveProject } from "./UI"
import { filterProjects } from "./UI"
import { deleteProject } from "./editingTasks"

let projectList = []
projectList = getStoredProjects()

const createProject = (name) => {
    const tasks = [];
    const taskNum = taskList.length;
    return { name, tasks, taskNum }


}

const processNewProject = () => {
    const projectName = document.querySelector('#newProjectInput').value
    return createProject(projectName)

}

const addProject = () => {
    const newProject = processNewProject()
    projectList.push(newProject)
    // const projects = generateProjectsArray()
    // console.log(projects)
    storeProjects(projectList)
    updateModalOptions(newProject)
    displayProject(newProject)

}

export function displayProject(project) {
    const projectGroup = document.querySelector('#projectGroup');
    const projectItem = document.createElement('li');
    projectItem.classList.add('list-group-item', 'border-0', 'sidebar-item', 'project-item');
    projectItem.innerHTML = `<div><i class="fa-regular fa-circle"></i>${project.name}</div><i id="deleteProject"
    class="fa-solid fa-trash-can"></i>`;
    projectItem.addEventListener('click', () => {
        loadProjectTitle(`${project.name}`)
        clearDisplay()
        setActiveProject()
        for (let i = 0; i < filterProjects(`${project.name}`).length; i++) {
            displayTask(filterProjects(`${project.name}`)[i])
        }

    });

    const deleteProjectButton = projectItem.querySelector('#deleteProject');
    deleteProjectButton.addEventListener('click', (e) => {
        // Prevent the click event from propagating to the parent element
        e.stopPropagation();
        // Add your delete logic here
        const projectID = e.target.parentNode.innerText

        // const index = projectList.findIndex(project => project.name === `${projectID}`)
        projectGroup.innerHTML = ''
        deleteProject(projectID)


    }, { once: true });



    projectGroup.appendChild(projectItem);
}


export function updateModalOptions(project) {
    const taskProject = document.querySelector('#taskProject')
    const projectOption = document.createElement('option')
    projectOption.setAttribute('value', `${project.name}`)
    projectOption.innerText = project.name
    taskProject.appendChild(projectOption)
}

// A function to generate the projects array from the projectList and taskList arrays
function generateProjectsArray() {
    return projectList.reduce((acc, project) => {
        acc.push({
            title: project.name,
            tasks: taskList.filter((task) => task.projectSelected === project.name),
        });
        return acc;
    }, []);
}





// function saveToLocalStorage() {
//     localStorage.setItem("myProjectList", JSON.stringify(projectList));
//     localStorage.setItem("currentId", (id).toString());
// }

export { addProject }
export { projectList }