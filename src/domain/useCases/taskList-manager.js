export default class TaskListManager {
  /**
   * Creates a new instance of TaskListManager
   * @constructor
   * @param {TaskListRepository}
   * @returns {TaskListManager}
   */
  constructor(taskListRepository) {
    this.taskListRepository = taskListRepository;
  }

  /**
   * Creates a new taskList and returns it
   * @param {TaskList} taskList
   * @returns {TaskList}
   */
  createTaskList(taskList) {
    return this.taskListRepository.createTaskList(taskList);
  }

  /**
   * Retrieves a taskList by its id and returns it
   * @param {Integer} id
   * @returns {TaskList}
   */
  getTaskListById(id) {
    return this.taskListRepository.getTaskListById(id);
  }

  /**
   * Retrieves all taskLists
   * @returns {<Array>taskList}
   */
  getAllTaskLists() {
    return this.taskListRepository.getAllTaskLists();
  }

  /**
   * Updates an existing taskList with the given id
   * @param {Integer} id - The id of the taskList to be updated
   * @param {String} description - The new description for the taskList
   * @returns {TaskList|null} - The updated taskList is successful, or null if taskList with the given id doesn't exist
   */
  updateTaskList(id, description) {
    return this.taskListRepository.updateTaskList(id, description);
  }

  /**
   * Deletes a taskList with the given id
   * @param {Integer} id - The id of the taskList to be deleted
   * @returns {TaskList|null} - The deleted taskList, or null if no taskList with the specified id
   */
  deleteTaskList(id) {
    return this.taskListRepository.deleteTaskList(id);
  }

  /**
   * Retrieves all tasks for a given taskList id
   * @param {Integer} id - The id of the taskList that contains the tasks to be retrieved
   * @returns {<Array>Task|null} - An array of tasks if successful, or null if taskList with given id doesn't exist
   */
  getTasksByTaskListId(id) {
    return this.taskListRepository.getTasksByTaskListId(id);
  }

  /**
   * Assigns a task with the given id to a taskList with the given id
   * @param {Integer} taskId - The id of the task to be assigned to the taskList
   * @param {Intege} taskListId - The id of the taskList in which the task is assigned
   */
  assignTaskToTaskList(taskId, taskListId, taskRepository) {
    return this.taskListRepository.assignTaskToTaskList(
      taskId,
      taskListId,
      taskRepository
    );
  }

  /**
   * Removes a task with the given id from a taskList with the given id
   * @param {Integer} taskId - The id of the task to be removed from the taskList
   * @param {Integer} taskListId - The id of the taskList in which the task is removed from
   */
  removeTaskFromTaskList(taskId, taskListId) {
    return this.taskListRepository.removeTaskFromTaskList(taskId, taskListId);
  }
}
