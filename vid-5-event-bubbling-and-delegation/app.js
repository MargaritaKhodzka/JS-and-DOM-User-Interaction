const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
// attach buttons to existing list items
const lis = listUl.children;

const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor = 'lightsteelblue';

const attachListItemButtons = li => {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

// attach buttons to existing list items
for (let i = 0; i < lis.length; i++) {
  attachListItemButtons(lis[i]);
}

listUl.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    if (e.target.className === 'remove') {
      let li = e.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
  }
  if (e.target.className === 'up') {
    let li = e.target.parentNode;
    let prevLi = li.previousElementSibling;
    let ul = li.parentNode;
    if (prevLi) {
      ul.insertBefore(li, prevLi);
    }
  }
  if (e.target.className === 'down') {
    let li = e.target.parentNode;
    let nextLi = li.nextElementSibling;
    let ul = li.parentNode;
    if (nextLi) {
      ul.insertBefore(nextLi, li);
    }
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  // buttons will be attached to new list items
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});
