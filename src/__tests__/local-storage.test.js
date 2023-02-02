/**
 * @jest-environment jsdom
 */
import { retrieve, save } from '../modules/locale-storage.js';
import currentTasks from '../modules/tasks.js';

describe('locale storage', () => {
  let mockSetItem;
  let mockGetItem;
  beforeEach(() => {
    mockSetItem = jest.fn();
    mockGetItem = jest.fn();
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: mockSetItem,
        getItem: mockGetItem,
      },
      writable: true,
    });
  });
  it('saves tasks to local storage', () => {
    const ourDummyList = {
      tasks: [
        { description: 'Task 1', completed: 'false', index: '1' },
        { description: 'Task 2', completed: 'false', index: '2' },
      ],
    };
    save(ourDummyList);
    expect(mockSetItem).toHaveBeenCalledWith('tasks', JSON.stringify(ourDummyList.tasks));
  });

  it('retrieved saved tasks from the local storage', () => {
    mockGetItem.mockReturnValue(JSON.stringify(currentTasks.tasks));
    retrieve(currentTasks);
    expect(mockGetItem).toHaveBeenCalledWith('tasks');
  });
});