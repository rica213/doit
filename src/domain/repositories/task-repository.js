import fs from 'fs';
import Task from '../entities/task';

export default class TaskRepository {
  /**
   * Creates new instance of TaskRepository with the specified filepath
   * @constructor
   * @param {String} filepath
   * @returns {TaskRepository}
   */
  constructor(filepath) {
    this.filepath = filepath;
  }

  /** Retrieves all tasks from the repository
   * @async
   * @returns {<Array>Task}
   */
  async getAllTasks() {
    try {
      const data = await fs.readFile(this.filepath);
      return JSON.parse(data);
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  /** Gets one task with a specified id
   * @async
   * @param {Integer} id - The id of the task to return
   * @returns {Task|null} - The task that has the given id, or null if task with the given id is not found
   */
  async getTaskById(id) {
    const tasks = await this.getAllTasks();
    const task = tasks.find((task) => task.index === id);
    if (!task) {
      return null;
    }
    return task;
  }

  /**
   * Creates a new task and save it to the task repository
   * @async
   * @param {Task} task - A Task to be created and preserved
   * @returns {Task}
   */
  async createTask(task) {
    const tasks = await this.getAllTasks();
    tasks.concat(task);
    await this.saveTasks(tasks);
    return task;
  }

  /** Updates an existing task in the task list
   * @async
   * @param {Integer} id - The id of the task to be updated
   * @param {Object} updatedTask - An object representing the updated task
   * @param {String} updatedTask.description - The new description of the task
   * @param {Boolean} updatedTask.completed- Whether the task is completed or not
   * @returns {Task|null} The updated task object if successful, or null if the task with the specified ID does not exist
   */
  async updateTask(id, updatedTask) {
    const tasks = this.getAllTasks();
    const index = tasks.findIndex((task) => task.index === id);
    if (index !== -1) {
      tasks[index] = {
        ...updatedTask,
        id,
      };
      await this.saveTasks(tasks);
      return tasks[index];
    }
    return null;
  }

  /** Deletes the task with the specified ID from the repository
   * @async
   * @param {Integer} id - The id of the task to be deleted
   * @returns {Task|null} - The deleted task object, or null if no task with the specified id was found
   * @throws {Error} - If there is an error saving the updated task data to the JSON File
   */
  async deleteTask(id) {
    const tasks = this.getAllTasks();
    const index = tasks.findIndex((task) => task.index === id);
    if (index !== -1) {
      const deletedTask = tasks[index];
      tasks.splice(index, 1);
      await this.saveTasks(tasks);
      return deletedTask;
    }
    return null;
  }

  /**
   * Writes all existing tasks to the JSON file
   * @async
   * @param {<Array>Task} tasks - An array of task objects to be written to the JSON File
   * @throws {Error} - If there is an error writing the task data to the JSON File
   */
  async saveTasks(tasks) {
    try {
      const data = JSON.stringify(tasks);
      await fs.writeFile(this.filepath, data);
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Deletes all completed tasks and remove them from the JSON File
   * @returns {Array<Task>} - An array of completed tasks
   */
  async deleteCompletedTasks() {
    const tasks = await this.getAllTasks();
    const completedTasks = tasks.filter((task) => task.completed);
    completedTasks.forEach((task) => {
      tasks.splice(tasks.indexOf(task), 1);
    });
    await this.saveTasks(tasks);
    return completedTasks;
  }
}
