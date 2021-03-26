import { Todo, displayProjects, projects, todos } from './frontPage';

function createProject() {
  rightBar.children[0].remove();

  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const labelProjectName = document.createElement('label');
  const labelDesc = document.createElement('label');
  const labelCheckbox = document.createElement('label');
  const form = document.createElement('form');
  const inputProjectName = document.createElement('input');
  const inputDesc = document.createElement('input');
  const inputCheckbox = document.createElement('input');
  const br = document.createElement('br');
  const br1 = document.createElement('br');
  const br2 = document.createElement('br');
  const button = document.createElement('button');

  div.id = 'createTodo';
  h2.innerHTML = 'Create a new project';
  inputProjectName.id = 'inputProjectName';
  inputDesc.id = 'inputDescriptionName';
  inputCheckbox.id = 'inputCheckbox';
  labelProjectName.innerHTML = 'Project name: ';
  labelDesc.innerHTML = 'Description: ';
  labelCheckbox.innerHTML = 'Done (Yes/No): ';
  inputCheckbox.type = 'checkbox';
  button.innerHTML = 'Create';
  button.addEventListener('click', addTodo);

  rightBar.appendChild(div);
  div.appendChild(h2);
  div.appendChild(form);
  form.appendChild(labelProjectName);
  form.appendChild(inputProjectName);
  form.appendChild(br);
  form.appendChild(labelDesc);
  form.appendChild(inputDesc);
  form.appendChild(br2);
  form.appendChild(labelCheckbox);
  form.appendChild(inputCheckbox);
  form.appendChild(br1);
  form.appendChild(button);

  return div;
}

function addTodo() {
  const Project = (projectName, Todo) => {
    return { projectName, Todo };
  };

  const Todo = (description, checked) => {
    return { description, checked };
  };

  //It is a form, and therefore the page get's refreshed
  event.preventDefault();
  let projectName = document.getElementById('inputProjectName').value;
  let description = document.getElementById('inputDescriptionName').value;
  let checked = document.getElementById('inputCheckbox').checked;
  let newTodo = Todo(description, checked);
  let newProject = Project(projectName, newTodo);
  projects.push(newProject);

  displayProjects();
  rightBar.children[0].remove();

  const div = document.createElement('div');
  const div2 = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const p2 = document.createElement('p');
  const labelProjectName = document.createElement('label');
  const labelDesc = document.createElement('label');
  const labelCheckbox = document.createElement('label');
  const inputDesc = document.createElement('input');
  const inputCheckbox = document.createElement('input');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const br = document.createElement('br');
  const br2 = document.createElement('br');
  const button = document.createElement('button');

  div.id = 'newTodo';
  div2.id = 'displayTodos';
  p.classList.add('descriptionStyle');
  h2.innerHTML = projectName;
  p.innerHTML = description;
  p2.innerHTML = 'Add new todos:';
  inputDesc.id = 'inputDesc';
  labelDesc.innerHTML = 'Description: ';
  labelCheckbox.innerHTML = 'Done (Yes/No): ';
  inputCheckbox.type = 'checkbox';
  inputCheckbox.id = 'inputCheckbox';
  button.innerHTML = '+';
  button.addEventListener('click', addTodos);

  rightBar.appendChild(div);
  div.appendChild(div2);
  div2.appendChild(h2);
  div2.appendChild(checkbox);
  div2.appendChild(p);
  div.appendChild(p2);
  div.appendChild(labelDesc);
  div.appendChild(inputDesc);
  div.appendChild(br);
  div.appendChild(labelCheckbox);
  div.appendChild(inputCheckbox);
  div.appendChild(br2);
  div.appendChild(button);
}

function addTodos() {
  /*
    inputProjectName.id = 'inputProjectName';
    let inputDesc.id = 'inputDescriptionName';
    let inputCheckbox.id = 'inputCheckbox';
  */

  let p = document.createElement('p');
  let checkbox = document.createElement('input');
  let br = document.createElement('br');

  checkbox.type = 'checkbox';
  p.innerHTML = inputDesc.value;
  p.classList.add('descriptionStyle');

  displayTodos.appendChild(br);
  displayTodos.appendChild(checkbox);
  displayTodos.appendChild(p);

  let newTodo = Todo(inputDesc.value, inputCheckbox.checked);
  todos.push(newTodo);
  console.log(todos);
}

export { createProject };
