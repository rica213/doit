/* eslint-disable no-underscore-dangle */
import Task from './Task.js';
import { tasksContainer } from './TaskElements.js';

class Tasks {
  constructor() {
    this._tasks = [];
  }

  add = (task) => {
    this._tasks.push(task);
  };

  display = () => {
    this._tasks.forEach((task) => {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
      <input type="checkbox" id="task-${task._index}" name="task-${task._index}" value="Bike">
      <label for="task-${task._index}">${task._description}</label><br>
      `;
      tasksContainer.appendChild(taskItem);
    });
  };
}

const currentTasks = new Tasks();
export default currentTasks;
