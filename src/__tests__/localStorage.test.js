/**
 * @jest-environment jsdom
 */
import { save } from '../modules/localeStorage.js';

describe('locale storage', () => {
  let mockSetItem;
  beforeEach(() => {
    mockSetItem = jest.fn();
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: mockSetItem,
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
});