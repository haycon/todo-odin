import { projects } from '../index';

function editDescription(todo, description) {
  console.log(todo);
  todo.description = 'yes';
  console.log(todo);
}

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
      let editDiv = document.getElementById(todo.description);

      newDiv.id = 'editField';
      editField.id = 'editInput';
      submitBtn.id = 'submitBtn';
      submitBtn.innerHTML = '+';

      const editValue = editField.value;

      submitBtn.addEventListener('click', function () {
        editDescription(todo, description);
      });

      editDiv.appendChild(br);
      editDiv.appendChild(newDiv);
      newDiv.appendChild(editField);
      newDiv.appendChild(submitBtn);
    }
  }
}

export { editTodo, editDescription };
