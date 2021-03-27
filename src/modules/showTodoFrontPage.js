import { projects, todos, Programming } from './frontPage';
import { deleteTodo } from './createProject';
import { Todo } from '../index.js';

function displayTodoFrontPage() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const divTodo = document.createElement('div');

  div.id = 'showTodo';
  h1.innerHTML = Programming.projectName;
  div.appendChild(h1);

  todos.forEach((todo) => {
    const descriptionP = document.createElement('p');
    const inputCheckbox = document.createElement('input');
    const br = document.createElement('br');
    let erase = document.createElement('button');

    //To add PID NPM?
    divTodo.id = 'todoID';
    descriptionP.innerHTML = todo.description;
    inputCheckbox.type = 'checkbox';
    descriptionP.className = 'descriptionStyle';
    inputCheckbox.id = 'inputCheckbox';
    erase.innerHTML = 'X';
    erase.id = 'eraseBtn';
    erase.onclick = deleteTodo;

    if (inputCheckbox.checked == true) {
      checkbox.checked = true;
      p.classList.add('completed');
    }

    inputCheckbox.addEventListener('click', function (e) {
      if (e.srcElement.checked == true) {
        p.classList.remove('unfinished');
        p.classList.add('completed');
      } else {
        p.classList.remove('completed');
        p.classList.add('unfinished');
      }
    });

    divTodo.appendChild(inputCheckbox);
    divTodo.appendChild(descriptionP);
    divTodo.appendChild(br);
    divTodo.appendChild(erase);
  });
  rightBar.appendChild(div);
}

export { displayTodoFrontPage };
