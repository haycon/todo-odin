import { projects } from '../index';

function editTodo() {
  let duplicate = document.getElementById('editField');
  let editDivCheck = document.getElementById('editField');

  console.log(projects[event.path[0].id]);
  projects[0].todoList[0].description = 'Hello';
  console.log(projects[0].todoList[0].description);

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

        console.log(projects[event.path[0].id]);
        projects[0].todoList[0].description = editInput.value;
        console.log(projects[0].todoList[0].description);

        editField.remove();
        submitBtn.remove();
      });

      editDiv.appendChild(br);
      editDiv.appendChild(newDiv);
      newDiv.appendChild(editField);
      newDiv.appendChild(submitBtn);

      /* if (editInput) {
        
      } */
    }
  }
}

export { editTodo };
