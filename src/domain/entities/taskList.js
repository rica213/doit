/**
 * @param {String} description
 * @param {Integer} index
 * @returns {TaskList}
 */
class TaskList {
  constructor(description, index) {
    this.description = description;
    this.index = index;
    this.tasks = []; // contains list of tasks
  }

  /**
   * Getter for the instance variable description
   * @returns {String} description
   */
  getDescription = () => this.description;

  /**
   * Getter for the instance variable index
   * @returns {Integer} index
   */
  getIndex = () => this.index;

  /**
   * Getter for the attribute tasks
   * @returns {Task[]} tasks
   */
  getListTasks = () => this.tasks;

  /**
   * Add a new task to the task list
   * @param {Task} task
   */
  addTask = (task) => {
    this.tasks.concat(task);
  };

  /** 
   * Set description of the taskList
   * @param {String} description
  */
  setDescription = (description) => {
    this.description = description;
  }


/*   update = (desc, id) => {
    this.tasks[id].description = desc;
  };

  init = (element) => {
    element.innerHTML = "";
  };

  display = (element) => {
    this.tasks.forEach((task, index) => {
      const taskItem = document.createElement("li");
      taskItem.id = index;
      taskItem.innerHTML = `
      <input type="checkbox" id="task-${task.index}" name="task-${
        task.index
      }" ${task.completed ? "checked" : "unchecked"}>
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
  }; */
}

// const currentTasks = new Tasks();
export default Tasks;
