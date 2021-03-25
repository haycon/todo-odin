import { displayProjects, projects, todos } from './frontPage';

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
  p.classList.add('descriptionStyle');
  h2.innerHTML = projectName;
  p.innerHTML = description;
  p2.innerHTML = 'Add new todos:';
  labelDesc.innerHTML = 'Description: ';
  labelCheckbox.innerHTML = 'Done (Yes/No): ';
  inputCheckbox.type = 'checkbox';
  button.innerHTML = '+';
  //button.addEventListener('click', addTodo);

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

  /*
  a.classList.add('readStatus');
  checkbox.classList.add('checked');
  d.setAttribute('data-id', myLibrary.length);
  title.innerHTML = 'Title: ' + title1;
  author.innerHTML = 'Author: ' + author1;
  pages.innerHTML = 'Pages: ' + pages1;
  if (read1 == true) {
    read.innerHTML = 'Read';
    checkbox.checked = true;
  } else {
    read.innerHTML = 'Not read';
  }

  checkbox.addEventListener('click', (e) => {
    if (e.path[1].querySelector('p').innerHTML == 'Read') {
      e.path[1].querySelector('p').innerHTML = 'Not read';
    } else {
      e.path[1].querySelector('p').innerHTML = 'Read';
    }
  });

  btn.innerHTML = 'Delete';
  btn.addEventListener('click', (id) => {
    let selector = id.path[1];
    let index = id.path[1].getAttribute('data-id');
    myLibrary.splice(index, 1);
    selector.parentNode.removeChild(selector);
  });
 */
}

export { createProject };
