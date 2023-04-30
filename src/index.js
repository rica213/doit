import "./style.css";
import Tasks from "./modules/tasks.js";
import createTask from "./modules/create-task.js";
import {
  addBtn,
  newTask,
  tasksContainer,
  clearTasksBtn,
  newList,
  curtain,
  header,
  menu,
  modal,
  close,
  newListBtn,
  newListInput,
  addNewTask,
  listTitle
} from "./modules/task-elements.js";
import { save, retrieve } from "./modules/locale-storage.js";
import { nanoid } from "nanoid";

const ourList = new Map();

const currentTasks = new Tasks("currentTasks", 1);


ourList.set('1', 'currentTasks');
// add new task

newTask.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (newTask.value === "") {
      e.preventDefault();
    } else {
      const task = createTask(e);
      currentTasks.add(task);
      currentTasks.init(tasksContainer);
      save(currentTasks);
      currentTasks.display(tasksContainer);
    }
  }
});

// add new task

addBtn.addEventListener("click", (e) => {
  if (newTask.value === "") {
    e.preventDefault();
  } else {
    const task = createTask(e);
    currentTasks.add(task);
    currentTasks.init(tasksContainer);
    save(currentTasks);
    currentTasks.display(tasksContainer);
  }
});

// edit description

tasksContainer.addEventListener("keypress", (e) => {
  if (e.target.className === "description" && e.key === "Enter") {
    if (e.target.textContent) {
      e.preventDefault();
      currentTasks.update(e.target.textContent, e.target.parentElement.id);
      save(currentTasks);
    } else {
      e.preventDefault();
    }
  }
});

tasksContainer.addEventListener("change", (e) => {
  let desc = currentTasks.tasks[e.target.parentElement.id].description; // not striked
  if (e.target.type === "checkbox") {
    if (e.target.checked) {
      currentTasks.complete(e.target.parentElement.id, true);
      e.target.nextElementSibling.innerHTML = `<strike>${desc}</strike>`;
      currentTasks.tasks[
        e.target.parentElement.id
      ].description = `<strike>${desc}</strike>`;
      save(currentTasks);
    } else {
      currentTasks.complete(e.target.parentElement.id, false);
      desc = e.target.nextElementSibling.innerHTML.replaceAll(
        /(<strike>|<\/strike>)/g,
        ""
      );
      e.target.nextElementSibling.innerHTML = desc;
      currentTasks.tasks[e.target.parentElement.id].description = desc;
      save(currentTasks);
    }
  } else {
    e.preventDefault();
  }
});

window.addEventListener("load", () => {
  retrieve(currentTasks);
  currentTasks.display(tasksContainer);
});

clearTasksBtn.addEventListener("click", () => {
  currentTasks.deleteAllCompleted();
  currentTasks.init(tasksContainer);
  currentTasks.updateIndex();
  save(currentTasks);
  currentTasks.display(tasksContainer);
});

// delete a task

tasksContainer.addEventListener("click", (e) => {
  if (e.target.className === "fa fa-ellipsis-v") {
    e.target.className = "fa-solid fa-trash";
  } else if (e.target.className === "fa-solid fa-trash") {
    currentTasks.delete(e.target.parentElement.id);
    currentTasks.init(tasksContainer);
    currentTasks.updateIndex();
    save(currentTasks);
    currentTasks.display(tasksContainer);
  } else if (e.target.className === "description") {
    e.preventDefault();
  }
});

// open menu
menu.addEventListener("click", () => {
  header.classList.toggle("open");
  curtain.classList.toggle("menu-opened");
});

// modal for a new list

// When the user clicks the button, open the modal and close menu
newList.onclick = function () {
  modal.style.display = "block";
  header.classList.toggle("open");
  curtain.classList.toggle("menu-opened");
};

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// create new list
newListBtn.onclick = (event) => {
  event.preventDefault();
  if(newListInput.value!==''){
    const aNewList = new Tasks(newListInput.value, nanoid());
    ourList.set(aNewList.getIndex(),aNewList.getDescription());
    modal.style.display = "none";
    addNewTask.classList.remove('hidden');
    listTitle.textContent = aNewList.getDescription();
  }
};
