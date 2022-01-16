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
  inputValue =
    inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
  tasks.push(new Task(inputValue));

  taskList.appendChild(tasks[taskIndex].element);
  taskIndex++;
}

function inputIsValid() {
  let inputValue = inputField.value;
  try {
    if (inputValue != "") {
      return true;
    } else throw "Invalid input";
  } catch (err) {
    let msg = document.querySelector("#errorMsg");
    msg.textContent = err;
    msg.style.color = "#fff";
    setTimeout(() => {
      msg.textContent = "";
    }, 2000);
  }
}

let tasks = new Array();
let taskIndex = 0;

addBtn.addEventListener("click", () => {
  if (inputIsValid()) addTask();
});

inputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (inputIsValid()) addTask();
  }
});
