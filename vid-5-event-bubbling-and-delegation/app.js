const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

/*
document.addEventListener('click', (e) => {
  console.log(e.target);
})
*/

/* Capitalization Behavior

listDiv.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.textContent = e.target.textContent.toUpperCase();
  }
});

listDiv.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.textContent = e.target.textContent.toLowerCase();
  }
});

*/

listUl.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    if (e.target.className === 'remove') {
      let li = e.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (e.target.className === 'up') {
      let li = e.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
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
  ul.appendChild(li);
  addItemInput.value = '';
});
