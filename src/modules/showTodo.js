import { Project, Todo, todos, Programming } from '../index';
import { newTodos, createTodo } from './createProject';

function displayTodo(description, checked) {
  rightBar.children[0].remove();

  const div = document.createElement('div');
  const h1 = document.createElement('h1');

  div.id = 'showTodo';
  h1.innerHTML = event.target.innerHTML;
  div.appendChild(h1);

  newTodos.forEach((todo) => {
    const descriptionP = document.createElement('p');
    const checkbox = document.createElement('input');
    const br = document.createElement('br');
    const button = document.createElement('button');

    descriptionP.innerHTML = todo.description;
    checkbox.type = 'checkbox';
    descriptionP.className = 'descriptionStyle';
    checkbox.className = 'checkboxStyle';
    button.innerHTML = '+';
    button.addEventListener('click', addTodos);

    div.appendChild(button);
    div.appendChild(checkbox);
    div.appendChild(descriptionP);
    div.appendChild(br);
  });
  rightBar.appendChild(div);
}

export { displayTodo };
