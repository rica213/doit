/**
 * @jest-environment jsdom
 */

import Task from '../modules/task.js';
import currentTasks from '../modules/tasks.js';

describe('UnitTests', () => {
  test('add new task inside our to do list', () => {
    const newTask = new Task('a dummy task', false, 1);
    currentTasks.add(newTask);
    expect(currentTasks.tasks).toContain(newTask);
  });

  test('add another task inside our to do list', () => {
    const another = new Task('another dummy task', false, 2);
    currentTasks.add(another);
    expect(currentTasks.tasks).toContain(another);
  });

  test('remove a task inside our to do list', () => {
    currentTasks.delete(0);
    expect(currentTasks.tasks).toHaveLength(1);
  });

  test('update the index', () => {
    currentTasks.updateIndex();
    expect(currentTasks.tasks[0].index).toBe(1);
  });

  test('edit the description of a task', () => {
    currentTasks.update('edited task description', 0);
    expect(currentTasks.tasks[0].description).toEqual('edited task description');
  });

  test('The completed should be true', () => {
    currentTasks.complete(0, true);
    expect(currentTasks.tasks[0].completed).toBe(true);
  });

  test('add a third task inside our to do list', () => {
    const thirdTask = new Task('third task', false, 2);
    currentTasks.add(thirdTask);
    expect(currentTasks.tasks).toContain(thirdTask);
  });

  test('The completed should be true', () => {
    currentTasks.complete(1, true);
    expect(currentTasks.tasks[1].completed).toBe(true);
  });

  test('delete all completed tasks', () => {
    currentTasks.deleteAllCompleted();
    expect(currentTasks.tasks).toEqual([]);
  });

  test('empty the ul', () => {
    document.body.innerHTML ='<ul class="list-tasks"><li></li><li></li></ul>';
    const tasksContainer = document.querySelector('.list-tasks');
    currentTasks.init(tasksContainer);
    const list = document.querySelectorAll('.list-tasks li');
    expect(list).toHaveLength(0);
  });

  test('add new task inside our to do list', () => {
    const newTask = new Task('a dummy task', false, 1);
    currentTasks.add(newTask);
    expect(currentTasks.tasks).toContain(newTask);
  });

  test('add another task inside our to do list', () => {
    const another = new Task('another dummy task', false, 2);
    currentTasks.add(another);
    expect(currentTasks.tasks).toContain(another);
  });

  test('display tasks', () => {
    document.body.innerHTML ='<ul class="list-tasks"></ul>';
    const tasksContainer = document.querySelector('.list-tasks');
    currentTasks.display(tasksContainer);
    const firstList = tasksContainer.children[0];
    const secondList = tasksContainer.children[1];
    const p1 = firstList.querySelector('.description');
    const p2 = secondList.querySelector('.description');
    expect(p1.textContent).toBe('a dummy task');
    expect(p2.textContent).toBe('another dummy task');
  });
});