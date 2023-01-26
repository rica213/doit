/* eslint-disable no-underscore-dangle */
import Task from './task.js';
import { tasksContainer } from './taskElements.js';

class Tasks {
  constructor() {
    this._tasks = [];
  }

  init = () => {
    tasksContainer.innerHTML = '';
  };

  add = (task) => {
    this._tasks.push(task);
  };

  update = (desc, id) => {
    this._tasks[id]._description = desc;
  };

  display = () => {
    this._tasks.forEach((task, index) => {
      const taskItem = document.createElement('li');
      taskItem.id = index;
      taskItem.innerHTML = `
      <input type="checkbox" id="task-${task._index}" name="task-${task._index}" ${task._completed ? 'checked' : 'unchecked'}>
      <p contenteditable="true" class="description">${task._description}</p>
      <i class="fa fa-ellipsis-v" aria-hidden="true"><br>
      `;
      tasksContainer.appendChild(taskItem);
    });
  };

  deleteAllCompleted = () => {
    this._tasks = this._tasks.filter(task =>
      task._completed === false
    );
    tasksContainer.innerHTML = '';
  };

  updateIndex = () => {
    this._tasks.forEach((task, index) => {
      task._index = index + 1;
    });
  };

  delete = (index) => {
    this._tasks = this._tasks.filter(task => task._index !== Number(index)+1);
  };
}

const currentTasks = new Tasks();
export default currentTasks;
