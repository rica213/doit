/* eslint-disable no-underscore-dangle */
import Task from './task.js';
import { tasksContainer } from './taskElements.js';

class Tasks {
  constructor() {
    this._tasks = [];
  }

  add = (task) => {
    this._tasks.push(task);
    tasksContainer.innerHTML = '';
  };

  update = (desc, id) => {
    this._tasks[id]._description = desc;
  };

  display = () => {
    this._tasks.forEach((task, index) => {
      const taskItem = document.createElement('li');
      taskItem.id = index;
      taskItem.innerHTML = `
      <input type="checkbox" id="task-${task._index}" name="task-${task._index}" ${task.completed ? 'checked' : 'unchecked'} onchange="console.log(this)">
      <p contenteditable="true" class="description">${task._description}</p>
      <i class="fa-solid fa-circle-ellipsis-vertical"></i><br>
      `;
      tasksContainer.appendChild(taskItem);
    });
  };

  hi = () => {
    console.log('hi');
  };
}

const currentTasks = new Tasks();
export default currentTasks;
