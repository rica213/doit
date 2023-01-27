/* eslint-disable no-else-return */
import Task from './task.js';
import { newTask } from './taskElements.js';
import currentTasks from './tasks.js';

const add = (event) => {
  if (newTask.value === '') {
    event.preventDefault();
    return false;
  } else {
    const task = new Task(newTask.value, false, currentTasks.tasks.length + 1);
    newTask.value = '';
    return task;
  }
};

export default add;
