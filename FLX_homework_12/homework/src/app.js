const rootNode = document.getElementById('root');

const newApplication = document.createAttribute('class');
newApplication.value = 'todo-application';

const newApplicationDiv = document.createElement('div');
newApplicationDiv.setAttribute('class', 'newApplication');

const addTaskHeader = document.createElement('header');
addTaskHeader.setAttribute('class', 'todo-header');
addTaskHeader.textContent = 'Add task';

const addTaskInput = document.createElement('input');
addTaskInput.setAttribute('type', 'text');
addTaskInput.setAttribute('class', 'add-task-input');
addTaskInput.setAttribute('autofocus', '');

const buttonWrapper = document.createElement('div');
buttonWrapper.setAttribute('class', 'button-wrapper');

const saveChangesButton = document.createElement('button');
saveChangesButton.setAttribute('class', 'saveChangesBtn');
saveChangesButton.disabled = true;
saveChangesButton.textContent = 'Save changes';

const cancelButton = document.createElement('button');
cancelButton.setAttribute('class', 'cancelBtn');
cancelButton.textContent = 'Cancel';

const addTaskButton = document.querySelector('button');
const application = document.querySelector('header');
const p = document.querySelector('p');

addTaskButton.addEventListener('click', function () {
  window.location.hash = '/add';
  application.style.setProperty('display', 'none');
  addTaskButton.style.setProperty('display', 'none');
  p.style.setProperty('display', 'none');
  rootNode.appendChild(newApplicationDiv);
  buttonWrapper.appendChild(saveChangesButton);
  buttonWrapper.appendChild(cancelButton);
  newApplicationDiv.appendChild(addTaskHeader);
  newApplicationDiv.appendChild(addTaskInput);
  newApplicationDiv.appendChild(buttonWrapper);
});

addTaskInput.onchange = addTaskInput.onkeyup = e => {
  const newTask = addTaskInput.value.trim();

  newTask ? saveChangesButton.disabled = false : saveChangesButton.disabled = true;

  if (e.key === 'Enter') {
    if (newTask) {
      addTask(newTask);
    }
  }
};

const toDoList = document.createElement('div');
toDoList.setAttribute('class', 'todo-list');
rootNode.appendChild(toDoList);
saveChangesButton.addEventListener('click', function () {
  addTask(addTaskInput.value.trim());
  window.location.hash = '';
  application.style.setProperty('display', '');
  addTaskButton.style.setProperty('display', '');
  addTaskHeader.style.setProperty('display', 'none');
  addTaskInput.style.setProperty('display', 'none');
  saveChangesButton.style.setProperty('display', 'none');
  cancelButton.style.setProperty('display', 'none');
});

cancelButton.addEventListener('click', function () {
  window.location = '';
});

const addTask = newTask => {
  const listItem = document.createElement('div');
  listItem.setAttribute('class', 'list-item');

  const taskText = document.createElement('span');
  taskText.appendChild(document.createTextNode(newTask));

  const imgTodo = document.createElement('img');
  imgTodo.setAttribute('src', './assets/img/todo-s.png');

  const checkButton = document.createElement('button');
  checkButton.setAttribute('class', 'check-btn');

  const imgDelete = document.createElement('img');
  imgDelete.setAttribute('src', './assets/img/remove-s.jpg');

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'delete-btn');

  checkButton.appendChild(imgTodo);
  deleteButton.appendChild(imgDelete);
  listItem.appendChild(checkButton);
  listItem.appendChild(taskText);
  listItem.appendChild(deleteButton);
  toDoList.appendChild(listItem);

  checkButton.addEventListener('click', function () {
    imgTodo.src = './assets/img/done-s.png';
    listItem.style.setProperty('background-color', '#807f7f');
    insertToBottom(listItem, toDoList);
  });
  deleteButton.addEventListener('click', function () {
    listItem.remove();
  });
  addTaskInput.value = '';
  saveChangesButton.disabled = true
};

const insertToBottom = (item, list) => {
  item.remove();
  list.appendChild(item);
};