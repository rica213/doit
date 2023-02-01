/**
 * @jest-environment jsdom
 */

import Task from '../modules/task';
import currentTasks from '../modules/tasks';

describe('UnitTests', () => {
  const newTask = new Task ("a dummy task", false, 0);
  test('add new task inside our to do list', () => {
    currentTasks.add(newTask);
    expect(currentTasks.tasks).toContain(newTask);
  });
});