const Project = (projectName, todoList) => {
  return {
    projectName,
    todoList,
    set projectName(newName) {
      _projectName = newName;
    },
    get projectName() {
      return projectName;
    },
  };
};

const Todo = (description, checked) => {
  return { description, checked };
};

let Today = Project('Today', []);

var person = {
  firstName: 'John',
  lastName: 'Doe',
  language: '',
  set lang(lang) {
    this.language = lang;
  },
};

btn.addEventListener('click', function () {
  array.push(inputName.value);
  console.log(Project);
});

btnArray.addEventListener('click', function () {
  let projectName = arrayFill.value;
  let array1 = Project(projectName, []);
  console.log(array1);
});

console.log(Today);
/*
let arrayList = [];
function newArray(name) {
  name = [];
  console.log(arrayList);
}

function fill(something) {
  name.push(something);
}

let arrName = inputName.value;

btn.addEventListener('click', function () {
  newArray(arrName);
});

btnArray.addEventListener('click', function () {
  fill(arrName);
});
*/
