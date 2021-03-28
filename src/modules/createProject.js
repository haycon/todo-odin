import { Project, Todo, todos, Programming, projects } from '../index';
import { displayProjects } from './frontPage';

function createProject() {
  rightBar.children[0].remove();
  console.log(projects);
  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const labelProjectName = document.createElement('label');
  const form = document.createElement('form');
  const inputProjectName = document.createElement('input');
  const br = document.createElement('br');
  const br1 = document.createElement('br');
  const br2 = document.createElement('br');
  const button = document.createElement('button');

  div.id = 'createTodo';
  h2.innerHTML = 'Create a new project';
  inputProjectName.id = 'inputProjectName';
  labelProjectName.innerHTML = 'Project name: ';
  button.innerHTML = 'Create';
  button.addEventListener('click', createTodo);

  rightBar.appendChild(div);
  div.appendChild(h2);
  div.appendChild(form);
  form.appendChild(labelProjectName);
  form.appendChild(inputProjectName);
  form.appendChild(br);
  form.appendChild(button);

  return div;
}

function createTodo() {
  //Prevents default since there is a form, and therefore the page get's refreshed
  //Remove form?
  event.preventDefault();
  let projectName = document.getElementById('inputProjectName').value;
  let newProject = Project(projectName, []);
  projects.push(newProject);
  console.log(projects);

  displayProjects();
  rightBar.children[0].remove();

  const div = document.createElement('div');
  const div2 = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const p2 = document.createElement('p');
  const labelDesc = document.createElement('label');
  const inputDesc = document.createElement('input');
  const br = document.createElement('br');
  const br2 = document.createElement('br');
  const button = document.createElement('button');

  div.id = 'newTodo';
  div2.id = 'displayTodos';
  h2.innerHTML = projectName;
  p2.innerHTML = 'Add new todos:';
  inputDesc.id = 'inputDesc';
  labelDesc.innerHTML = 'Description: ';
  button.innerHTML = '+';
  button.addEventListener('click', addTodos);

  rightBar.appendChild(div);
  div.appendChild(div2);
  div2.appendChild(h2);
  div.appendChild(p2);
  div.appendChild(labelDesc);
  div.appendChild(inputDesc);
  div.appendChild(br);
  div.appendChild(br2);
  div.appendChild(button);
}

function addTodos() {
  const divTodo = document.createElement('div');
  let p = document.createElement('p');
  let checkbox = document.createElement('input');
  let erase = document.createElement('button');

  divTodo.id = 'todoID';
  divTodo.setAttribute('data-id', inputDesc.value);
  checkbox.classList.add('checkbox');
  checkbox.type = 'checkbox';
  p.innerHTML = inputDesc.value;
  p.classList.add('descriptionStyle');
  erase.innerHTML = 'X';
  erase.id = 'eraseBtn';
  erase.addEventListener('click', deleteTodo);

  checkbox.addEventListener('click', function (e) {
    if (e.srcElement.checked == true) {
      p.classList.remove('unfinished');
      p.classList.add('completed');
    } else {
      p.classList.remove('completed');
      p.classList.add('unfinished');
    }
  });

  displayTodos.appendChild(divTodo);
  divTodo.appendChild(checkbox);
  divTodo.appendChild(p);
  divTodo.appendChild(erase);

  let newTodo = Todo(inputDesc.value, false);
  console.log(projects);
  projects[projects.length - 1].todoList.push(newTodo);
  //console.log(projects[1].todoList);
}

function deleteTodo(e) {
  //Try and find another way to select clicked event.
  e.path[1].parentNode.removeChild(e.path[1]);

  //Find the index of the clicked todo
  let pos = todos
    .map(function (e) {
      return e.description;
    })
    .indexOf(e.path[1].getAttribute('data-id'));
  console.log(pos);
  //Removes the clicked todo from array
  if (pos > -1) {
    todos.splice(pos, 1);
  }

  array.push('1');
  console.log(array);
}
let array = [];
export { createProject, addTodos, deleteTodo, createTodo };
