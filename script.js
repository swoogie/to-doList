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
    })
    this.element = document.createElement("Li");
    this.element.textContent = content;
    this.element.appendChild(this.deleteBtn);
    
  }
}

let tasks = new Array();
let taskIndex = 0;

addBtn.addEventListener("click", () => {
  let inputValue = inputField.value;

  tasks.push(new Task(inputValue));

  taskList.appendChild(tasks[taskIndex].element);
  taskIndex++;
});
