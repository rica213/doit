class Category {
  /**  
   *  @param {String} description 
   *  @param {Integer} index
   *  @returns {Category}
  */
  constructor(description, index) {
    this.description = description;
    this.index = index;
    this.tasks = []; // contains list of task
  }

  /**
   * Getter for description
   * @returns {String}
  */
  getDescription = () => {
    return this.description;
  }

  /**
   * Getter for index
   * @returns {Integer}
  */ 
  getIndex = () => {
    return this.index;
  }

  /**
   * Getter for list of tasks
   * @returns {Task[]}
  */ 
  getTasks = () => {  
    return this.tasks;
  }

  /**
   * Set the description of the category
   * @param {String} description
  */ 
  setDescription = (description) => {
    this.description = description;
  }

  /**
   * Add new task to the category
   * @param {Task} task
  */ 
  addTask = (task) => {
    this.tasks.concat(task);
  }
}