import { createProject } from './createProject';
import { displayTodo } from './showTodo';

//Should this be moved into createProject.js addTodo function?
const Project = (projectName, todoList) => {
  return { projectName, todoList };
};

const Todo = (description, checked) => {
  return { description, checked };
};

let Chores = Todo('Finish todo website', false);
let Chores1 = Todo('Read a book', false);
let Chores2 = Todo('Push to github', false);

let todos = [Chores, Chores1, Chores2];
//let todos2 = [Chores, Chores1, Chores2];
//let multipleTodos = [todos, todos2];
let Programming = Project('Today', todos);

let projects = [Programming];

function displayProjects() {
  leftBar.children[0].remove();
  const div = document.createElement('div');
  leftBar.appendChild(div);

  let h41 = document.createElement('h4');
  h41.innerHTML = 'Projects:';
  div.appendChild(h41);

  projects.forEach((project) => {
    const h4 = document.createElement('h4');

    h4.innerHTML = project.projectName;
    h4.onclick = function () {
      displayTodo(todos.description, todos.checked);
    };

    div.appendChild(h4);
  });

  const h3 = document.createElement('h3');
  h3.innerHTML = 'New Project';
  h3.onclick = function () {
    createProject();
  };

  div.appendChild(h3);
  return div;
}

export { displayProjects, Project, Todo, projects, todos, Programming, Chores };
