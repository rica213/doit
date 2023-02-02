export const save = (instance) => {
  localStorage.setItem('tasks', JSON.stringify(instance.tasks));
};

export const retrieve = (instance) => {
  const retrievedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (retrievedTasks === null) {
    return;
  }
  retrievedTasks.forEach((task) => {
    instance.add(task);
  });
};
