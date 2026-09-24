let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const task = taskInput.value.trim();

  if (task === "") {
    return;
  }
  tasks.push(task);

localStorage.setItem("tasks", JSON.stringify(tasks));

  const newTask = document.createElement("li");

  newTask.textContent = task;
  newTask.addEventListener("click", function() {
  newTask.remove();
});

  taskList.appendChild(newTask);

  taskInput.value = "";
});
tasks.forEach(function(task) {
  const newTask = document.createElement("li");

  newTask.textContent = task;

  newTask.addEventListener("click", function() {
    newTask.remove();
  });

  taskList.appendChild(newTask);
});
