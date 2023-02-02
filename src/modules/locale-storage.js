export const save = (instance) => {
  localStorage.setItem('tasks', JSON.stringify(instance.tasks));
};

export const retrieve = (instance) => {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks === null) {
    return;
  }
  try {
    const retrievedTasks = JSON.parse(savedTasks);
    retrievedTasks.forEach((task) => {
      instance.add(task);
    });
  }
  catch (error) {
    console.log(error);
  }
};
