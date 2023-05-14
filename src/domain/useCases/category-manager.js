export default class CategoryManager {
  /**
   * Creates a new instance of CategoryManager
   * @constructor
   * @param {CategoryRepository}
   * @returns {CategoryManager}
   */
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  /**
   * Creates a new category and returns it
   * @param {Category} category
   * @returns {Category}
   */
  createCategory(category) {
    return this.categoryRepository.createCategory(category);
  }

  /**
   * Retrieves a category by its id and returns it
   * @param {Integer} id
   * @returns {Category}
   */
  getCategoryById(id) {
    return this.categoryRepository.getCategoryById(id);
  }

  /**
   * Retrieves all categories
   * @returns {<Array>Category}
   */
  getAllCategories() {
    return this.categoryRepository.getAllCategories();
  }

  /**
   * Updates an existing category with the given id
   * @param {Integer} id - The id of the category to be updated
   * @param {String} description - The new description for the category
   * @returns {Category|null} - The updated category is successful, or null if category with the given id doesn't exist
   */
  updateCategory(id, description) {
    return this.categoryRepository.updateCategory(id, description);
  }

  /**
   * Deletes a category with the given id
   * @param {Integer} id - The id of the category to be deleted
   * @returns {Category|null} - The deleted category, or null if no category with the specified id
   */
  deleteCategory(id) {
    return this.categoryRepository.deleteCategory(id);
  }

  /**
   * Retrieves all tasks for a given category id
   * @param {Integer} id - The id of the category that contains the tasks to be retrieved
   * @returns {<Array>Task|null} - An array of tasks if successful, or null if category with given id doesn't exist
   */
  getTasksByCategoryId(id) {
    return this.categoryRepository.getTasksByCategoryId(id);
  }

  /**
   * Assigns a task with the given id to a category with the given id
   * @param {Integer} taskId - The id of the task to be assigned to the category
   * @param {Intege} categoryId - The id of the category in which the task is assigned
   */
  assignTaskToCategory(taskId, categoryId, taskRepository) {
    return this.categoryRepository.assignTaskToCategory(taskId, categoryId, taskRepository);
  }

  /**
   * Removes a task with the given id from a category with the given id
   * @param {Integer} taskId - The id of the task to be removed from the category
   * @param {Intege} categoryId - The id of the category in which the task is removed from
   */
  removeTaskFromCategory(taskId, categoryId) {
    return this.categoryRepository.removeTaskFromCategory(taskId, categoryId);
  }
}