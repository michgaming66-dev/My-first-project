const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const task = taskInput.value.trim();

  if (task === "") {
    return;
  }

  const newTask = document.createElement("li");

  newTask.textContent = task;

  taskList.appendChild(newTask);

  taskInput.value = "";
});
