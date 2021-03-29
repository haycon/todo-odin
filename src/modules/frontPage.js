import { todos, projects } from '../index';
import { createProject } from './createProject';
import { displayTodo } from './showTodo';

function displayProjects() {
  leftBar.children[0].remove();
  const div = document.createElement('div');
  leftBar.appendChild(div);

  div.id = 'projectContainer';
  let h41 = document.createElement('h4');
  h41.innerHTML = 'Projects:';
  div.appendChild(h41);
  let n = 0;
  projects.forEach((project) => {
    const h4 = document.createElement('h4');
    h4.id = n;
    h4.innerHTML = project.projectName;
    h4.onclick = function () {
      displayTodo(todos.description, todos.checked);
    };

    div.appendChild(h4);
    n += 1;
  });

  const h3 = document.createElement('h3');
  h3.innerHTML = 'New Project';
  h3.onclick = function () {
    createProject();
  };

  div.appendChild(h3);
  return div;
}

export { displayProjects };
