import { displayProjects } from './modules/frontPage';
import { displayTodoFrontPage } from './modules/showTodoFrontPage';

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

displayProjects();
displayTodoFrontPage();

export {
  Project,
  Todo,
  todos,
  Programming,
  projects,
  Chores,
  Chores1,
  Chores2,
};
