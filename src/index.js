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
      const taskItem = document.createElement('input');
      taskItem.setAttribute('type', 'checkbox');
      taskItem.setAttribute('id', `task-${task._index}`);
      taskItem.setAttribute('name', `task-${task._index}`);  
      const label = document.createElement('label');
      label.htmlFor = `task-${task._index}`;
      label.appendChild(document.createTextNode(task._description));
      tasksContainer.appendChild(taskItem);
      tasksContainer.appendChild(label);
    });
  };
}

const firstTask = new Task ('wash dishes', false, 0);
const secondTask = new Task ('fix car', false, 1);

const currentTasks = new Tasks();
currentTasks.add(firstTask);
currentTasks.add(secondTask);

const tasksContainer = document.querySelector('.list-tasks');
currentTasks.display();
