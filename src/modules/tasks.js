class Tasks {
  constructor() {
    this.tasks = [];
  }

  init = (element) => {
    element.innerHTML = '';
  };

  add = (task) => {
    this.tasks.push(task);
  };

  update = (desc, id) => {
    this.tasks[id].description = desc;
  };

  display = (element) => {
    this.tasks.forEach((task, index) => {
      const taskItem = document.createElement('li');
      taskItem.id = index;
      taskItem.innerHTML = `
      <input type="checkbox" id="task-${task.index}" name="task-${task.index}" ${task.completed ? 'checked' : 'unchecked'}>
      <p contenteditable="true" class="description">${task.description}</p>
      <i class="fa fa-ellipsis-v"><br>
      `;
      element.appendChild(taskItem);
    });
  };

  deleteAllCompleted = () => {
    this.tasks = this.tasks.filter((task) => task.completed === false);
  };

  updateIndex = () => {
    this.tasks.forEach((task, index) => {
      task.index = index + 1;
    });
  };

  delete = (index) => {
    this.tasks = this.tasks.filter((task) => task.index !== Number(index) + 1);
  };

  complete = (index, status) => {
    this.tasks[index].completed = status;
  }
}

const currentTasks = new Tasks();
export default currentTasks;
