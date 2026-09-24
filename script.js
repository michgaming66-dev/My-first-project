function showMessage() {
  const name = document.getElementById("name-input").value;

  if (name === "") {
    document.getElementById("main-title").textContent =
      "Please enter your name";
  } else {
    document.getElementById("main-title").textContent =
      "Hello, " + name + " 👋";
  }
}
