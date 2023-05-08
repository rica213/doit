export default class Task {
  /**
   * @param {String} description
   * @param {Boolean} completed
   * @param {Integer} index
   * @returns {Task}
  */
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  /**
   * Getter for instance variable completed
   * @returns {Boolean} completed
  */
  getStatus = () => {
    return this.completed;
  }

  /**
   * Getter for instance variable index
   * @returns {Integer} index
  */
  getIndex = () => {
    return this.index
  }

  /**
   * Getter for instance variable description
   * @returns {String} description
  */
  getDescription = () => {
    return this.description;
  }

  /**
   * Set status of the task
   * @param {Boolean} status 
  */
  setStatus = (status) => {
    this.completed = status;
  }

  /**
   * Set the description of the task
   * @param {String} description 
  */
  setDescription = (description) => { 
    this.description = description;
  }
}
