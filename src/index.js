import './style.css';
import currentTasks from './modules/tasks.js';
import add from './modules/add.js';
import {
  addBtn, newTask, tasksContainer, clearTasksBtn,
} from './modules/taskElements.js';
import { save, retrieve } from './modules/localeStorage.js';

// add new task

newTask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (newTask.value === '') {
      e.preventDefault();
    } else {
      const task = add(e);
      currentTasks.add(task);
      currentTasks.init(tasksContainer);
      save(currentTasks);
      currentTasks.display(tasksContainer);
    }
  }
});

// add new task

addBtn.addEventListener('click', (e) => {
  if (newTask.value === '') {
    e.preventDefault();
  } else {
    const task = add(e);
    currentTasks.add(task);
    currentTasks.init(tasksContainer);
    save(currentTasks);
    currentTasks.display(tasksContainer);
  }
});

// edit description

tasksContainer.addEventListener('keypress', (e) => {
  if (e.target.className === 'description' && e.key === 'Enter') {
    if (e.target.textContent) {
      e.preventDefault();
      currentTasks.update(e.target.textContent, e.target.parentElement.id);
      save(currentTasks);
    } else {
      e.preventDefault();
    }
  }
});

tasksContainer.addEventListener('change', (e) => {
  let desc = currentTasks.tasks[e.target.parentElement.id].description; // not striked
  if (e.target.type === 'checkbox') {
    if (e.target.checked) {
      currentTasks.complete(e.target.parentElement.id, true);
      e.target.nextElementSibling.innerHTML = `<strike>${desc}</strike>`;
      currentTasks.tasks[e.target.parentElement.id].description = `<strike>${desc}</strike>`;
      save(currentTasks);
    } else {
      currentTasks.complete(e.target.parentElement.id, false);
      desc = e.target.nextElementSibling.innerHTML.replaceAll(/(<strike>|<\/strike>)/g, '');
      e.target.nextElementSibling.innerHTML = desc;
      currentTasks.tasks[e.target.parentElement.id].description = desc;
      save(currentTasks);
    }
  } else {
    e.preventDefault();
  }
});

window.addEventListener('load', () => {
  retrieve(currentTasks);
  currentTasks.display(tasksContainer);
});

clearTasksBtn.addEventListener('click', () => {
  currentTasks.deleteAllCompleted();
  currentTasks.init(tasksContainer);
  currentTasks.updateIndex();
  save(currentTasks);
  currentTasks.display(tasksContainer);
});

// delete a task

tasksContainer.addEventListener('click', (e) => {
  if (e.target.className === 'fa fa-ellipsis-v') {
    e.target.className = 'fa-solid fa-trash';
  } else if (e.target.className === 'fa-solid fa-trash') {
    currentTasks.delete(e.target.parentElement.id);
    currentTasks.init(tasksContainer);
    currentTasks.updateIndex();
    save(currentTasks);
    currentTasks.display(tasksContainer);
  } else if (e.target.className === 'description') {
    e.preventDefault();
  }
});