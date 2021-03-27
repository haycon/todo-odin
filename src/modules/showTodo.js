import { Project, Todo, todos, Programming } from '../index';

function displayTodo(description, checked) {
  rightBar.children[0].remove();

  const div = document.createElement('div');
  const h1 = document.createElement('h1');

  div.id = 'showTodo';
  h1.innerHTML = event.target.innerHTML;
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

export { displayTodo };
