import { deleteTodo, addTodos } from './createProject';
import { Project, Todo, todos, Programming, projects } from '../index';
import {} from './createProject';

function displayTodoFrontPage() {
  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const div2 = document.createElement('div');

  div.id = 'showTodo';
  div2.id = 'displayTodos';
  h1.innerHTML = Programming.projectName;

  div.appendChild(h1);

  todos.forEach((todo) => {
    const divTodo = document.createElement('div');
    const p = document.createElement('p');
    const inputCheckbox = document.createElement('input');
    const br = document.createElement('br');
    const erase = document.createElement('button');

    divTodo.id = 'todoID';
    divTodo.setAttribute('data-id', todo.description);
    p.innerHTML = todo.description;
    inputCheckbox.type = 'checkbox';
    p.className = 'descriptionStyle';
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
    divTodo.appendChild(p);
    divTodo.appendChild(br);
    divTodo.appendChild(erase);
    div.appendChild(divTodo);
    div.appendChild(div2);
  });

  const inputDesc = document.createElement('input');
  const button = document.createElement('button');

  button.innerHTML = '+';
  button.addEventListener('click', addTodos);
  inputDesc.id = 'inputDesc';

  rightBar.appendChild(div);
  div.appendChild(inputDesc);

  div.appendChild(button);
}

export { displayTodoFrontPage };
