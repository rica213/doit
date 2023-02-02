/**
 * @jest-environment jsdom
 */

import Task from '../modules/task.js';
import currentTasks from '../modules/tasks.js';

describe('UnitTests', () => {
  const newTask = new Task('a dummy task', false, 1);
  test('add new task inside our to do list', () => {
    currentTasks.add(newTask);
    expect(currentTasks.tasks).toContain(newTask);
  });

  test('remove a task inside our to do list', () => {
    const another = new Task('another dummy task', false, 2);
    currentTasks.add(another);
    currentTasks.delete(0);
    currentTasks.updateIndex();
    expect(currentTasks.tasks).toHaveLength(1);
  });

  test('edit the description of a task', () => {
    currentTasks.update('edited task description', 0);
    expect(currentTasks.tasks[0].description).toEqual('edited task description');
  });

  test('The completed should be true or false', () => {
    currentTasks.complete(0, true);
    expect(currentTasks.tasks[0].completed).toBe(true);
  });
});