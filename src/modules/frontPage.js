import { createProject } from './createProject';
import { test } from './showTodo';
const Todo = (description, checked) => {
  return { description, checked };
};

let Chores = Todo('Take out garbage', false);
let Chores1 = Todo('Clean', true);
let todos = [Chores, Chores1];

function displayProjects() {
  const div = document.createElement('div');
  projectsNames.appendChild(div);

  todos.forEach((todo) => {
    const h4 = document.createElement('h4');

    h4.innerHTML = todo.description;
    h4.onclick = function () {
      test(todo.description, todo.checked);
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

export { createTodo, displayProjects };
