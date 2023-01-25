import currentTasks from "./tasks";

export const save = () => {
  localStorage.setItem('tasks', JSON.stringify(currentTasks._tasks));
};

export const retrieve = () => {
  const retrievedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (retrievedTasks === null) {
    return;
  }
  retrievedTasks.forEach((task) => {
    currentTasks.add(task);
  });
}
