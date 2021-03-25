import { createProject } from './createProject';
import { displayTodo } from './showTodo';

const Project = (projectName, Todo) => {
  return { projectName, Todo };
};

const Todo = (description, checked) => {
  return { description, checked };
};

let Chores = Todo('Finish todo website', false);
let Chores1 = Todo('Finish TOP', true);

let Programming = Project('Programming', Chores);

let projects = [Programming];
let todos = [Chores, Chores1];

function displayProjects() {
  const div = document.createElement('div');
  projectsNames.appendChild(div);

  projects.forEach((project) => {
    const h4 = document.createElement('h4');

    h4.innerHTML = project.projectName;
    h4.onclick = function () {
      displayTodo(todos.description, todos.checked);
    };

    div.appendChild(h4);
  });

  const h3 = document.createElement('h3');
  h3.innerHTML = 'New Project';
  h3.onclick = function () {
    createProject();
  };

  div.appendChild(h3);
  return div;
}

function createTodo() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const description = document.createElement('p');
  const checkbox = document.createElement('input');
  const button = document.createElement('button');

  div.id = 'frontPage';
  h1.innerHTML = 'Welcome';
  description.innerHTML = Chores.description;
  checkbox.type = 'checkbox';
  description.className = 'descriptionStyle';
  checkbox.className = 'checkboxStyle';
  button.innerHTML = 'Create new project';
  button.id = 'newProjectButton';
  button.addEventListener('click', createProject);

  div.appendChild(h1);
  div.appendChild(checkbox);
  div.appendChild(description);
  div.appendChild(button);
  rightBar.appendChild(div);
}

export { createTodo, displayProjects, projects };
