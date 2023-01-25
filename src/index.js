import './style.css';
class Task {
  constructor(description, completed, index){
    this._description = description;
    this._completed = completed;
    this._index = index;
  }
}

class Tasks {
  constructor() {
    this._tasks = [];
  }

  add = (task) => {
    this._tasks.push(task);
  };

  display = () => {
    this._tasks.forEach((task)=>{
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
      <input type="checkbox" id="task-${task._index}" name="task-${task._index}" value="Bike">
      <label for="task-${task._index}">${task._description}</label><br>
      `;
      tasksContainer.appendChild(taskItem);
    });
  };
}

const firstTask = new Task ('wash dishes', false, 0);
const secondTask = new Task ('fix car', false, 1);
const thirdTask = new Task ('clean the house', false, 2);

const currentTasks = new Tasks();
currentTasks.add(firstTask);
currentTasks.add(secondTask);
currentTasks.add(thirdTask);

const tasksContainer = document.querySelector('.list-tasks');
currentTasks.display();
