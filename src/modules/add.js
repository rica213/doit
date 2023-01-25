import Task from './Task.js';
import { newTask } from './TaskElements.js';
import currentTasks from './Tasks.js';

const add = (event) => {
  if (newTask.value === ''){
    event.preventDefault();
    return;
  } else {
    const task = new Task(newTask.value, false, currentTasks._tasks.length);
    return task;
  }
};

export default add;
