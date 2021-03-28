import { Project, Todo, todos, Programming, projects } from '../index';
import { newTodos, addTodos } from './createProject';

function displayTodo() {
  rightBar.children[0].remove();

  const div = document.createElement('div');
  const h1 = document.createElement('h1');

  div.id = 'showTodo';
  h1.innerHTML = event.target.innerHTML;
  div.appendChild(h1);

  console.log(projects);
  console.log(projects[0].todoList);

  projects[0].todoList.forEach((todo) => {
    console.log(todo);
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
