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
  
  const taskListElement = document.querySelector("#taskList")

const taskItemElement = document.createElement("li")
taskItemElement.classList.add("taskItem");
taskItemElement.textContent = taskInputValue;
console.log(taskItemElement);

const taskCompleted = document.createElement("button")
taskCompleted.textContent = "Done";
taskCompleted.id = "taskCompleted";
taskCompleted.addEventListener("click", function() {
  taskItemElement.style.textDecoration = "line-through";
});
console.log(taskCompleted)
taskItemElement.appendChild(taskCompleted);
taskListElement.appendChild(taskItemElement);

const taskDelete = document.createElement("button")
taskDelete.textContent = "Delete";
taskDelete.id = "taskDelete";
taskDelete.addEventListener("click", function() {
  taskItemElement.remove()
});
console.log(taskDelete)
taskItemElement.appendChild(taskDelete);
taskListElement.appendChild(taskItemElement);
taskInputElement.value = "";
}

});