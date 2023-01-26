/* eslint-disable no-underscore-dangle */
import './style.css';
import currentTasks from './modules/tasks';
import add from './modules/add.js';
import { addBtn, newTask, tasksContainer, clearTasksBtn } from './modules/taskElements.js';
import { save, retrieve } from './modules/localeStorage.js';

//add new task

newTask.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if(newTask.value===''){
      e.preventDefault();
    } else {
      const task = add(e);
      currentTasks.add(task);
      currentTasks.init();
      save();
      currentTasks.display();
    }
  }
});

addBtn.addEventListener('click', (e) => {
  if(newTask.value===''){
    e.preventDefault();
  } else {
    const task = add(e);
    currentTasks.add(task);
    currentTasks.init();
    save();
    currentTasks.display();
  }
});

  tasksContainer.addEventListener('keypress', function (e) {
    if (e.target.className === 'description' && e.key === 'Enter') {
      if(e.target.textContent){
        e.preventDefault();
        currentTasks.update(e.target.textContent, e.target.parentElement.id);
        save();
      } else {
        e.preventDefault();
      }
    }
  });

  tasksContainer.addEventListener('change', function (e) {
    let desc = currentTasks._tasks[e.target.parentElement.id]._description; //not striked
    if(e.target.type==='checkbox'){
      if(e.target.checked) {
        currentTasks._tasks[e.target.parentElement.id]._completed = true;
        e.target.nextElementSibling.innerHTML = `<strike>${desc}</strike>`;
        currentTasks._tasks[e.target.parentElement.id]._description = `<strike>${desc}</strike>`;
        save();
      } else {
        currentTasks._tasks[e.target.parentElement.id]._completed = false;
        desc = e.target.nextElementSibling.innerHTML.replaceAll(/(<strike>|<\/strike>)/g, '');
        e.target.nextElementSibling.innerHTML = desc;
        currentTasks._tasks[e.target.parentElement.id]._description = desc;
        save();
      }
    } else {
      e.preventDefault();
    }
  });

window.addEventListener('load', () => {
  retrieve();
  currentTasks.display();
});

clearTasksBtn.addEventListener('click', () => {
  currentTasks.deleteAllCompleted();
  currentTasks.updateIndex();
  save();
  currentTasks.display();
});

tasksContainer.addEventListener('click', function (e) {
  if(e.target.className === 'fa fa-ellipsis-v') {
    e.target.className = 'fa-solid fa-trash';
  } else if (e.target.className === 'fa-solid fa-trash'){
    currentTasks.delete(e.target.parentElement.id);
    currentTasks.init();
    currentTasks.updateIndex();
    save();
    currentTasks.display();
  } else {
    e.preventDefault();
  }
});