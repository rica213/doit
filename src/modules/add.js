import Task from './task.js';
import { newTask } from './taskElements.js';
import currentTasks from './tasks.js';

const add = (event) => {
  if (newTask.value === ''){
    event.preventDefault();
    return;
  } else {
    const task = new Task(newTask.value, false, currentTasks._tasks.length);
    newTask.value = '';
    return task;
  }
};

export default add;
