/**
 * Create a new instance of taskList
 * @constructor
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
   * Returns the description of the taskList
   * @returns {String} description
   */
  getDescription = () => this.description;

  /**
   * Returns the index of the taskList
   * @returns {Integer} index
   */
  getIndex = () => this.index;

  /**
   * Returns the list of tasks in the taskList
   * @returns {<Array>Task} tasks
   */
  getListTasks = () => this.tasks;

  /**
   * Adds a new task to the task list
   * @param {Task} task
   */
  addTask = (task) => {
    this.tasks.concat(task);
  };

  /**
   * Sets a new description to the taskList
   * @param {String} description
  */
  setDescription = (description) => {
    this.description = description;
  }
}

export default TaskList;
