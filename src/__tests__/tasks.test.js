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
    expect(currentTasks.tasks).toHaveLength(1);
  });
});