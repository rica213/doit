class Category {
  /**
   *  Creates a new instance of the Category
   *  @constructor
   *  @param {Object} - An object containing the following properties:
   *  @param {String} description
   *  @param {Integer} index
   *  @returns {Category}
   */
  constructor({ description, index }) {
    this.description = description;
    this.index = index;
    this.tasks = []; // contains list of task
  }

  /**
   * Returns the description of a category
   * @returns {String}
   */
  getDescription = () => this.description;

  /**
   * Returns the id of a category
   * @returns {Integer}
   */
  getIndex = () => this.index;

  /**
   * Returns the list of tasks for a category
   * @returns {Task[]}
   */
  getTasks = () => this.tasks;

  /**
   * Sets the description of the category
   * @param {String} description
   */
  setDescription = (description) => {
    this.description = description;
  };

  /**
   * Adds a new task to the category
   * @param {Task} task
   */
  addTask = (task) => {
    this.tasks.concat(task);
  };
}
