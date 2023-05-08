export default class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  /* return the status of the task */
  getStatus = () => {
    return this.completed;
  }

  /* return the index of the task */
  getId = () => {
    return this.index
  }

  /* return the description of the task */
  getDescription = () => {
    return this.description;
  }

  /* set the status of the task */
  setStatus = (status) => {
    this.completed = status;
  }

  /* set the description of the task */
  setDescription = (description) => { 
    this.description = description;
  }
}
