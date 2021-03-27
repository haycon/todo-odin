import { projects, todos, Programming } from './frontPage';
function displayTodoFrontPage() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');

  div.id = 'showTodo';
  h1.innerHTML = Programming.projectName;
  div.appendChild(h1);

  todos.forEach((todo) => {
    const descriptionP = document.createElement('p');
    const checkbox = document.createElement('input');
    const br = document.createElement('br');
    descriptionP.innerHTML = todo.description;
    checkbox.type = 'checkbox';
    descriptionP.className = 'descriptionStyle';
    checkbox.className = 'checkboxStyle';

    div.appendChild(checkbox);
    div.appendChild(descriptionP);
    div.appendChild(br);
  });
  rightBar.appendChild(div);
}

export { displayTodoFrontPage };
