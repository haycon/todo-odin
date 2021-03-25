function test(description, checked) {
  rightBar.children[0].remove();

  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const descriptionP = document.createElement('p');
  const checkbox = document.createElement('input');
  //const add = document.createElement('input');

  div.id = 'showTodo';
  descriptionP.innerHTML = description;
  checkbox.type = 'checkbox';
  descriptionP.className = 'descriptionStyle';
  checkbox.className = 'checkboxStyle';

  div.appendChild(h1);
  div.appendChild(checkbox);
  div.appendChild(descriptionP);
  rightBar.appendChild(div);
}

export { test };
