/* eslint-disable no-underscore-dangle */
export default class Task {
  constructor(description, completed, index) {
    this._description = description;
    this._completed = completed;
    this._index = index;
  }
}
