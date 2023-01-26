/* eslint-disable no-underscore-dangle */
import './style.css';
import currentTasks from './modules/tasks';
import add from './modules/add.js';
import { addBtn, newTask, tasksContainer } from './modules/taskElements.js';
import { save, retrieve } from './modules/localeStorage.js';

//add new task

newTask.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const task = add(e);
    currentTasks.add(task);
    save();
    currentTasks.display();
    console.log(currentTasks._tasks);
  }
});

addBtn.addEventListener('click', (e) => {
  const task = add(e);
  currentTasks.add(task);
  save();
  currentTasks.display();
  console.log(currentTasks._tasks);
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


window.addEventListener('load', () => {
  retrieve();
  currentTasks.display();
});
