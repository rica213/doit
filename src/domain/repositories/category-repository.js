import fs from 'fs';

export default class CategoryRepository {
  /**
   * Create a new instance of the category repository
   * @constructor
   * @param {String} filepath - represents the path to the JSON File
   * @returns {CategoryRepository}
   */
  constructor(filepath) {
    this.filepath = filepath;
  }

  /**
   * Retrieves all categories from the repository
   * @async
   * @returns {<Array>Category}
   */
  async getAllCategories() {
    try {
      const data = await fs.readFile(this.filepath);
      return JSON.parse(data);
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  /**
   * Gets one category with a specified id
   * @async
   * @returns {Category}
   */
  async getCategoryById(id) {
    const categories = await this.getAllCategories();
    return categories.find((category) => category.index === id);
  }

  /**
   * Creates a new category and preserves it to the repository
   * @async
   * @param {Category} category - A category to be created and preserved
   * @returns {Category}
   */
  async createCategory(category) {
    const categories = this.getAllCategories();
    categories.concat(category);
    await this.saveCategories(categories);
    return category;
  }

  /**
   * Updating an existing category
   * @async
   * @param {Integer} id - The id of the category to be updated
   * @param {String} description - The new description for the category
   * @returns {Category|null} The updated category if successful, or null if the category with a specified id doesn't exist
   */
  async updateCategory(id, description) {
    const categories = this.getAllCategories();
    const category = categories.find((category) => category.index === id);
    if (!category) {
      return null;
    }
    category.description = description;
    await this.saveCategories(categories);
    return category;
  }

  /**
   * Deletes the category with the specified id from the repository
   * @async
   * @param {Integer} id - The id of the category to be deleted
   * @returns {Category|null} - The deleted category, or null if no category with the specified id
   */
  async deleteCategory(id) {
    const categories = this.getAllCategories();
    const index = categories.findIndex((category) => category.index === id);
    if (index !== -1) {
      const deletedCategory = categories.splice(index, 1);
      await this.saveCategories(categories);
      return deletedCategory;
    }
    return null;
  }

  /**
   * Writes all categories to the JSON File
   * @async
   * @param {<Array>Category} categories - An array of categories to be written to the JSON File
   * @throws {Error} - If there is an error writing the category data to the JSON File
   */
  async saveCategories(categories) {
    try {
      const data = JSON.stringify(categories);
      await fs.writeFile(this.filepath, data);
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Retrieves all tasks for a given category id
   * @param {Integer} id - The id of the category that contains the tasks to be retrieved
   * @returns {<Array>Task|null} - An array of tasks if successful, or null if category with given id doesn't exist
   */
  async getTasksByCategoryId(id) {
    const category = await this.getCategoryById(id);
    if (!category) {
      return null;
    }
    return category.tasks;
  }

  /**
   * Assigns a task with the given id to a category with the given id
   * @param {Integer} taskId - The id of the task to be assigned to the category
   * @param {Intege} categoryId - The id of the category in which the task is assigned
   */
  async assignTaskToCategory(taskId, categoryId, taskRepository) {
    const categories = this.getAllCategories();
    const category = categories.find((category) => category.index === categoryId);
    const task = taskRepository.getTaskById(taskId);
    if (!category || !task) {
      return null;
    }
    category.tasks.concat(task);
    await this.saveCategories(categories);
    return category;
  }

  /**
   * Removes a task with the given id from a category with the given id
   * @param {Integer} taskId - The id of the task to be removed from the category
   * @param {Intege} categoryId - The id of the category in which the task is removed from
   */
  async removeTaskFromCategory(taskId, categoryId) {
    const categories = this.getAllCategories();
    const category = categories.find((category) => category.index === categoryId);

    if (!category) {
      return null;
    }
    const index = category.tasks.findIndex((task) => task.index === taskId);
    if (index !== -1) {
      category.tasks.splice(index, 1);
      await this.saveCategories(categories);
      return category;
    }
    return null;
  }
}
