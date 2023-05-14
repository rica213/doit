import Task from 'task';
import TaskRepository from '../repositories/task-repository';

export default class TaskManager {
  /**
   * Creates a new instance of TaskManager
   * @constructor
   * @param {TaskRepository}
   * @returns {TaskManager}
   */
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  /**
   * Creates a task from taskData and
   * preserves it using task repository
   * @param {Object} taskData
   * @returns {Task}
   */
  createTask(taskData) {
    const task = new Task(taskData);
    return this.taskRepository.createTask(task);
  }

  /**
   * Gets the task from the repository
   * Updates the task properties
   * Saves the updated task to the repository
   * @async
   * @param {Integer} taskId
   * @param {Object} taskData
   * @returns {Task}
   * TODO: I need to look at this method closely
   */
  async updateTask(taskId, taskData) {
    const task = await this.taskRepository.getTaskById(taskId);
    task = { ...taskData };
    return this.taskRepository.updateTask(taskId, task);
  }

  /**
   * Deletes the task from the repository
   * @param {Integer} taskId
   */
  deleteTask(taskId) {
    return this.taskRepository.deleteTask(taskId);
  }

  /**
   * Gets the task from the repository
   * Updates the task status to be completed
   * Saves the updated task to the repository
   * @param {Integer} taskId
   * @returns {Task}
   */
  markTaskComplete(taskId) {
    const task = this.taskRepository.getTaskById(taskId);
    task.setStatus(true);
    return this.taskRepository.updateTask(taskId, task);
  }

  /**
   * Deletes all completed tasks and remove them from the JSON File
   * @returns {Array<Task>} - An array of completed tasks
   */
  deleteCompletedTasks() {
    return this.taskRepository.deleteCompletedTasks();
  }
}
