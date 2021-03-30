import { projects } from '../index';

function editTodo(todo) {
  let duplicate = document.getElementById('editField');
  let editDivCheck = document.getElementById('editField');

  if (duplicate) {
    if (editDivCheck) {
      editField.remove();
    }
  } else {
    if (!duplicate) {
      let newDiv = document.createElement('div');
      let br = document.createElement('br');
      let editField = document.createElement('input');
      let submitBtn = document.createElement('button');
      let editDiv = document.getElementById(event.path[1].id);

      newDiv.id = 'editField';
      editField.id = 'editInput';
      submitBtn.id = 'submitBtn';
      submitBtn.innerHTML = '+';

      submitBtn.addEventListener('click', function () {
        //Sets value of innerHTML of clicked p to the edited input
        event.path[2].children[1].innerHTML = editInput.value;
        const description = editInput.value;
        editObject(todo, description);
        projects[0].todoList[0].description = editInput.value;

        editField.remove();
        submitBtn.remove();
      });

      editDiv.appendChild(br);
      editDiv.appendChild(newDiv);
      newDiv.appendChild(editField);
      newDiv.appendChild(submitBtn);
    }
  }
}

const editObject = (todo, description) => {
  todo.description = description;
  console.log(todo);
};

export { editTodo };
