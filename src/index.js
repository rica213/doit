/* eslint-disable no-underscore-dangle */
import './style.css';
import currentTasks from './modules/Tasks';
import add from './modules/add.js';
import { addBtn, newTask, tasksContainer } from './modules/TaskElements.js';

//add new task

newTask.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const task = add(e);
    currentTasks.add(task);
  }
});

addBtn.addEventListener('click', (e) => {
  const task = add(e);
  currentTasks.add(task);
});

currentTasks.display();
