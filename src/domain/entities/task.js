export default class Task {
  /**
   * Creates a new instance of Task
   * @constructor
   * @param {Object}
   * @param {String} description
   * @param {Boolean} completed
   * @param {Integer} index
   * @returns {Task}
  */
  constructor({ description, completed, index }) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  /**
   * Returns the status of the task
   * @returns {Boolean} The completion status of the task
  */
  getStatus = () => this.completed

  /**
   * Returns the index of the task
   * @returns {Integer} index
  */
  getIndex = () => this.index

  /**
   * Returns the description of the task
   * @returns {String} description
  */
  getDescription = () => this.description

  /**
   * Sets the completion status of the task
   * @param {Boolean} status - The new completion status of the task
  */
  setStatus = (status) => {
    this.completed = status;
  }

  /**
   * Sets the description of the task
   * @param {String} description - The new description of the task
  */
  setDescription = (description) => {
    this.description = description;
  }
}
