import Task from './task.js';
import { newTask } from './taskElements.js';
import currentTasks from './tasks.js';

const add = (event) => {
  const task = new Task(newTask.value, false, currentTasks.tasks.length + 1);
  if (newTask.value === '') {
    event.preventDefault();
  } else {
    newTask.value = '';
  }
  return task;
};

export default add;
