import { projects } from './frontPage';
function displayTodo(description, checked) {
  rightBar.children[0].remove();

  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const descriptionP = document.createElement('p');
  const checkbox = document.createElement('input');

  div.id = 'showTodo';
  console.log(projects[0].Todo.description);
  h1.innerHTML = projects[0].projectName;
  descriptionP.innerHTML = projects[0].Todo.description;
  checkbox.type = 'checkbox';
  descriptionP.className = 'descriptionStyle';
  checkbox.className = 'checkboxStyle';

  div.appendChild(h1);
  div.appendChild(checkbox);
  div.appendChild(descriptionP);
  rightBar.appendChild(div);
}

export { displayTodo };
