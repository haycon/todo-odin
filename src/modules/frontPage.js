import { createProject } from './createProject';

const Todo = (description, checkbox) => {
  return { description, checkbox };
};

let Chores = Todo('Take out garbage', false);
let todos = [Chores];

function displayProjects() {
  const div = document.createElement('div');

  projectsNames.appendChild(div);

  todos.forEach((element) => {
    const h4 = document.createElement('h4');
    h4.innerHTML = element.description;
    div.appendChild(h4);
  });

  /* var list = function (family) {
    for (let project in todos) {
      h1.innerHTML += '<li>' + project + '</li>';
    }
  }; */

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
