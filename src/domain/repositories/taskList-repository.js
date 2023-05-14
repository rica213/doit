import fs from 'fs';
import TaskList from '../entities/taskList';

export default class TaskListRepository {
  /**
   * Create a new instance of the taskList repository
   * @constructor
   * @param {String} filepath - represents the path to the JSON File
   * @returns {taskListRepository}
   */
  constructor(filepath) {
    this.filepath = filepath;
  }

  /**
   * Retrieves all taskLists from the repository
   * @async
   * @returns {<Array>TaskList}
   */
  async getAllTaskLists() {
    try {
      const data = await fs.readFile(this.filepath);
      return JSON.parse(data);
    } catch (err) {
      console.error(err);
      return [];
    }
  }

  /**
   * Gets one taskList with a specified id
   * @async
   * @returns {TaskList}
   */
  async getTaskListById(id) {
    const taskLists = await this.getAllTaskLists();
    return taskLists.find((taskList) => taskList.index === id);
  }

  /**
   * Creates a new taskList and preserves it to the repository
   * @async
   * @param {TaskList} taskList - A taskList to be created and preserved
   * @returns {TaskList}
   */
  async createTaskList(taskList) {
    const taskLists = this.getAllTaskLists();
    taskLists.concat(taskList);
    await this.saveTaskLists(taskLists);
    return taskList;
  }

  /**
   * Updating an existing taskList
   * @async
   * @param {Integer} id - The id of the taskList to be updated
   * @param {String} description - The new description for the taskList
   * @returns {taskList|null} The updated taskList if successful, or null if the taskList with a specified id doesn't exist
   */
  async updateTaskList(id, description) {
    const taskLists = this.getAllTaskLists();
    const taskList = taskLists.find((taskList) => taskList.index === id);
    if (!taskList) {
      return null;
    }
    taskList.description = description;
    await this.saveTaskLists(taskLists);
    return taskList;
  }

  /**
   * Deletes the taskList with the specified id from the repository
   * @async
   * @param {Integer} id - The id of the taskList to be deleted
   * @returns {TaskList|null} - The deleted taskList, or null if no taskList with the specified id
   */
  async deleteTaskList(id) {
    const taskLists = this.getAllTaskLists();
    const index = taskLists.findIndex((taskList) => taskList.index === id);
    if (index !== -1) {
      const deletedTaskList = taskLists.splice(index, 1);
      await this.saveTaskLists(taskLists);
      return deletedTaskList;
    }
    return null;
  }

  /**
   * Writes all taskLists to the JSON File
   * @async
   * @param {<Array>TaskList} taskLists - An array of taskLists to be written to the JSON File
   * @throws {Error} - If there is an error writing the taskList data to the JSON File
   */
  async saveTaskLists(taskLists) {
    try {
      const data = JSON.stringify(taskLists);
      await fs.writeFile(this.filepath, data);
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Retrieves all tasks for a given taskList id
   * @param {Integer} id - The id of the taskList that contains the tasks to be retrieved
   * @returns {<Array>Task|null} - An array of tasks if successful, or null if taskList with given id doesn't exist
   */
  async getTasksBytaskListId(id) {
    const taskList = await this.getTaskListById(id);
    if (!taskList) {
      return null;
    }
    return taskList.tasks;
  }

  /**
   * Assigns a task with the given id to a taskList with the given id
   * @param {Integer} taskId - The id of the task to be assigned to the taskList
   * @param {Intege} taskListId - The id of the taskList in which the task is assigned
   */
  async assignTaskToTaskList(taskId, taskListId, taskRepository) {
    const taskLists = this.getAllTaskLists();
    const taskList = taskLists.find(
      (taskList) => taskList.index === taskListId,
    );
    const task = taskRepository.getTaskById(taskId);
    if (!taskList || !task) {
      return null;
    }
    taskList.tasks.concat(task);
    await this.saveTaskLists(taskLists);
    return taskList;
  }

  /**
   * Removes a task with the given id from a taskList with the given id
   * @param {Integer} taskId - The id of the task to be removed from the taskList
   * @param {Intege} taskListId - The id of the taskList in which the task is removed from
   */
  async removeTaskFromTaskList(taskId, taskListId) {
    const taskLists = this.getAllTaskLists();
    const taskList = taskLists.find(
      (taskList) => taskList.index === taskListId,
    );

    if (!taskList) {
      return null;
    }
    const index = taskList.tasks.findIndex((task) => task.index === taskId);
    if (index !== -1) {
      taskList.tasks.splice(index, 1);
      await this.saveTaskLists(taskLists);
      return taskList;
    }
    return null;
  }
}
