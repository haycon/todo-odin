import { projects } from '../index';
import { addTodos, deleteTodo } from './createProject';
import { editTodo } from './editTodo';

function displayTodo() {
  rightBar.children[0].remove();
  console.log(projects[0]);

  const div = document.createElement('div');
  const div2 = document.createElement('div');
  const h1 = document.createElement('h1');
  const labelDesc = document.createElement('label');
  const inputDesc = document.createElement('input');
  const button = document.createElement('button');

  div.id = 'newTodo';
  div2.id = 'displayTodos';
  h1.innerHTML = event.target.innerHTML;
  inputDesc.id = 'inputDesc';
  labelDesc.innerHTML = 'Description: ';
  button.id = 'addBtn';
  button.innerHTML = '+';
  button.addEventListener('click', addTodos);

  div.appendChild(h1);

  let projectName = projects[event.path[0].id];
  projects[event.path[0].id].todoList.forEach((todo) => {
    const divTodo = document.createElement('div');
    const p = document.createElement('p');
    const checkbox = document.createElement('input');
    let erase = document.createElement('button');
    const br = document.createElement('br');
    const edit = document.createElement('button');

    divTodo.id = todo.description;
    divTodo.className = 'todoID';
    divTodo.setAttribute('data-id', todo.description);
    p.innerHTML = todo.description;
    erase.innerHTML = 'X';
    erase.id = 'eraseBtn';
    erase.addEventListener('click', function () {
      deleteTodo(event, projectName);
    });
    edit.innerHTML = 'Edit';
    edit.id = 'editBtn';
    edit.addEventListener('click', function () {
      editTodo(todo);
    });

    checkbox.type = 'checkbox';
    p.className = 'descriptionStyle';
    checkbox.className = 'checkbox';

    checkbox.addEventListener('click', function (e) {
      if (e.srcElement.checked == true) {
        p.classList.remove('unfinished');
        p.classList.add('completed');
      } else {
        p.classList.remove('completed');
        p.classList.add('unfinished');
      }
    });
    divTodo.appendChild(checkbox);
    divTodo.appendChild(p);
    divTodo.appendChild(erase);
    divTodo.appendChild(edit);
    divTodo.appendChild(br);
    div.appendChild(divTodo);
    div.appendChild(div2);
  });

  div.appendChild(labelDesc);
  div.appendChild(inputDesc);
  div.appendChild(button);

  rightBar.appendChild(div);
}

export { displayTodo };
