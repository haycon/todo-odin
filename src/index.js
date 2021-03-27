import { createTodo, displayProjects } from './modules/frontPage';
import { createForm } from './modules/createProject';
import { displayTodoFrontPage } from './modules/showTodoFrontPage';

const Project = (projectName, todoList) => {
  return { projectName, todoList };
};

const Todo = (description, checked) => {
  return { description, checked };
};

displayProjects();
displayTodoFrontPage();

export { Project, Todo };
