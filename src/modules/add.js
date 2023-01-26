/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import Task from './task.js';
import { newTask } from './taskElements.js';
import currentTasks from './tasks.js';

const add = (event) => {
  if (newTask.value === '') {
    event.preventDefault();
  } else {
    const task = new Task(newTask.value, false, currentTasks._tasks.length + 1);
    newTask.value = '';
    return task;
  }
};

export default add;
