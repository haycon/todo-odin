function editTodo() {
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

      newDiv.id = 'editField';
      editField.id = 'editInput';
      let editDiv = document.getElementById(event.path[1].id);

      editDiv.appendChild(newDiv);
      newDiv.appendChild(editField);
    }
  }
}

export { editTodo };
