import { Todo, displayProjects, projects, todos } from './frontPage';

function createProject() {
  rightBar.children[0].remove();

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
  button.addEventListener('click', addTodo);

  rightBar.appendChild(div);
  div.appendChild(h2);
  div.appendChild(form);
  form.appendChild(labelProjectName);
  form.appendChild(inputProjectName);
  form.appendChild(br);
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
  let newProject = Project(projectName, null);
  projects.push(newProject);

  displayProjects();
  rightBar.children[0].remove();

  const div = document.createElement('div');
  const div2 = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const p2 = document.createElement('p');
  const labelDesc = document.createElement('label');
  const labelCheckbox = document.createElement('label');
  const inputDesc = document.createElement('input');
  const inputCheckbox = document.createElement('input');
  const br = document.createElement('br');
  const br2 = document.createElement('br');
  const button = document.createElement('button');

  div.id = 'newTodo';
  div2.id = 'displayTodos';
  h2.innerHTML = projectName;
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
  let n = 0;
  let p = document.createElement('p');
  let checkbox = document.createElement('input');
  let br = document.createElement('br');

  checkbox.classList.add('checkbox');
  checkbox.type = 'checkbox';
  p.innerHTML = inputDesc.value;
  p.classList.add('descriptionStyle');

  checkbox.addEventListener('click', function (e) {
    if (e.srcElement.checked == true) {
      p.classList.remove('unfinished');
      p.classList.add('completed');
    } else {
      p.classList.remove('completed');
      p.classList.add('unfinished');
    }
  });

  displayTodos.appendChild(br);
  displayTodos.appendChild(checkbox);
  displayTodos.appendChild(p);

  let newTodo = Todo(inputDesc.value, inputCheckbox.checked);
  todos.push(newTodo);
  console.log(todos);
  n += 3;
}
export { createProject };
