function showMessage() {
  const name = document.getElementById("name-input").value.trim();

  if (name === "") {
    document.getElementById("main-title").textContent =
      "Please enter your name";
  } else {
    document.getElementById("main-title").textContent =
      "Hello, " + name + " 👋";

    localStorage.setItem("visitorName", name);
  }
}

const savedName = localStorage.getItem("visitorName");

if (savedName) {
  document.getElementById("name-input").value = savedName;

  document.getElementById("main-title").textContent =
    "Welcome back, " + savedName + " 👋";
}
function forgetName() {
  localStorage.removeItem("visitorName");

  document.getElementById("name-input").value = "";
  document.getElementById("main-title").textContent = "Welcome 👋";
}
