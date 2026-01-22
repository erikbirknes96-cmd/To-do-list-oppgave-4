const subBtn = document.querySelector('#subButton');

subBtn.addEventListener('click', function (event) {
  event.preventDefault();
  console.log(event);


const taskInputElement = document.querySelector("#taskInput")
const taskInputValue = taskInputElement.value;

if (taskInputElement.value == "") {
  console.log("No task has been added")
  alert("");
} else {
  console.log("Task added!")
}

const taskListElement = document.querySelector("#taskList")

const taskItemElement = document.createElement("#taskItem")
taskItemElement.classList.add("taskItem");
taskItemElement.textContent = taskInputValue;
console.log(taskItemElement);

const taskCompleted = document.createElement("button")
taskCompleted.textContent = "Done";
taskCompleted.addEventListener("click", function() {
  taskItemElement.style.textDecoration = "line-through";
});
console.log(taskCompleted)
taskItemElement.appendChild(taskCompleted);
taskListElement.appendChild(taskItemElement);
taskInputElement.value = "";
});