const addBtn = document.querySelector("#addBtn");
const inputField = document.querySelector("#inputField");
const taskList = document.querySelector("#taskList");

class Task {
  constructor(content) {
    this.deleteBtn = document.createElement("Button");
    this.deleteBtn.className = "deleteBtn";
    this.deleteBtn.textContent = "X";
    this.deleteBtn.addEventListener("click", () => {
      this.element.remove();
    });
    this.element = document.createElement("Li");
    this.element.textContent = content;
    this.element.appendChild(this.deleteBtn);
  }
}

function addTask() {
  let inputValue = inputField.value;
  inputField.value = "";
  tasks.push(new Task(inputValue));

  taskList.appendChild(tasks[taskIndex].element);
  taskIndex++;
}

let tasks = new Array();
let taskIndex = 0;

addBtn.addEventListener("click", addTask);

inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
