# Todo List App

:wave: [Preview](https://riahamhari.github.io/todo-app/)

This is a simple Todo List App built using HTML/CSS and JavaScript, with Webpack used to bundle the JS modules. The app allows users to add tasks with a due date, description, and priority. Tasks can also be assigned to a project.

## Features

- Add tasks with a title, description, due date, and priority
- Assign tasks to a project
- View all projects
- View all tasks in each project
- Edit the details of a task
- Mark a task as complete
- Delete a task

## Installation

To use this app, you will need to have [Node.js](https://nodejs.org/) installed on your computer.

1. Clone this repository: `git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`
2. Navigate to the project directory: `cd todo-list-app`
3. Install the dependencies: `npm install`
4. Run the app: `npm start`
5. Open your web browser and go to `http://localhost:8080/`

## Usage

### Creating a new task

1. Click the "Add Task" button in the top right corner of the screen.
2. Enter a title, description, due date, priority, and select a project (or create a new one).
3. Click the "Create Task" button to add the task to the list.

### Viewing tasks

To view tasks for a specific project, click on the project name in the sidebar. To view all tasks, click the "All Tasks" button in the sidebar.

### Editing a task

To edit the details of a task, click on the 'edit' icon. Ammend the fields as desired, then click the "Save Changes" button.

### Marking a task as complete

To mark a task as complete, click on the checkbox next to the task title.

### Deleting a task

To delete a task, click on the rubbish icon on the right side of the task.

## External Libraries

This app uses the following external libraries:

- [date-fns](https://date-fns.org/) for formatting and manipulating dates and times.

## Data Persistence

This app uses the Web Storage API to save data to localStorage on the user's computer. Data is saved every time a new project or task is created, and is retrieved when the app is first loaded. 

## Acknowledgements

This app was inspired by the following great todo apps:

- [Todoist](https://todoist.com/)
- [Things](https://culturedcode.com/things/)
- [any.do](https://www.any.do/)

