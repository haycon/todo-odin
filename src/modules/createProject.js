function createProject() {
  frontPage.remove();

  const div = document.createElement('div');
  const h2 = document.createElement('h2');
  const labelDesc = document.createElement('label');
  const labelCheckbox = document.createElement('label');
  const form = document.createElement('form');
  const inputDesc = document.createElement('input');
  const inputCheckbox = document.createElement('input');
  const br = document.createElement('br');
  const button = document.createElement('button');

  h2.innerHTML = 'Create a new project';
  labelDesc.innerHTML = 'Name: ';
  labelCheckbox.innerHTML = 'Done (Yes/No): ';
  inputCheckbox.type = 'checkbox';
  button.innerHTML = 'Add';

  rightBar.appendChild(div);
  div.appendChild(h2);
  div.appendChild(form);
  form.appendChild(labelDesc);
  form.appendChild(inputDesc);
  form.appendChild(br);
  form.appendChild(labelCheckbox);
  form.appendChild(inputCheckbox);
  div.appendChild(button);

  return div;
}

let addBookToLibrary = () => {
  let title1 = document.getElementById('title').value;
  let author1 = document.getElementById('author').value;
  let pages1 = document.getElementById('pages').value;
  let read1 = document.getElementById('read').checked;
  let newBook = new Book(title1, author1, pages1, read1);
  myLibrary.push(newBook);

  const d = document.createElement('div');
  const a = document.createElement('div');
  const title = document.createElement('h3');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');
  const btn = document.createElement('button');
  const checkbox = document.createElement('input');
  let s = document.querySelector('.main');
  d.classList.add('books');
  checkbox.type = 'checkbox';
  btn.classList.add('deleteBtn');

  s.appendChild(d);
  d.appendChild(title);
  d.appendChild(author);
  d.appendChild(pages);
  d.appendChild(a);
  a.appendChild(read);
  a.appendChild(checkbox);
  d.appendChild(btn);

  a.classList.add('readStatus');
  checkbox.classList.add('checked');
  d.setAttribute('data-id', myLibrary.length);
  title.innerHTML = 'Title: ' + title1;
  author.innerHTML = 'Author: ' + author1;
  pages.innerHTML = 'Pages: ' + pages1;
  if (read1 == true) {
    read.innerHTML = 'Read';
    checkbox.checked = true;
  } else {
    read.innerHTML = 'Not read';
  }

  checkbox.addEventListener('click', (e) => {
    if (e.path[1].querySelector('p').innerHTML == 'Read') {
      e.path[1].querySelector('p').innerHTML = 'Not read';
    } else {
      e.path[1].querySelector('p').innerHTML = 'Read';
    }
  });

  btn.innerHTML = 'Delete';
  btn.addEventListener('click', (id) => {
    let selector = id.path[1];
    let index = id.path[1].getAttribute('data-id');
    myLibrary.splice(index, 1);
    selector.parentNode.removeChild(selector);
  });
};

export { createProject };
