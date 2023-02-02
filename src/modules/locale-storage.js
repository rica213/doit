export const save = (instance) => {
  localStorage.setItem('tasks', JSON.stringify(instance.tasks));
};

export const retrieve = (instance) => {
  let retrievedTasks = localStorage.getItem('tasks');
  if (retrievedTasks === null) {
    return;
  }
  retrievedTasks = JSON.parse(retrievedTasks);
  retrievedTasks.forEach((task) => {
    instance.add(task);
  });
};
