const loginForm = document.querySelector("#login-form");
const password = document.querySelector("#password");
const loginError = document.querySelector("#login-error");
const folder = document.querySelector(".folder-icon");
const fileWindow = document.querySelector(".file-window");
const imageFile = document.querySelector(".file-item");
const imageWindow = document.querySelector(".image-window");
const logoutButton = document.querySelector(".logout-button");
const loginScreen = document.querySelector(".login-screen");
const desktopScreen = document.querySelector(".desktop-screen");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (password.value.trim() !== "yurusanai") {
    loginError.classList.add("is-visible");
    password.focus();
    return;
  }
  loginError.classList.remove("is-visible");
  document.body.classList.add("is-logged-in");
  loginScreen.setAttribute("aria-hidden", "true");
  desktopScreen.setAttribute("aria-hidden", "false");
});

password.addEventListener("input", () => loginError.classList.remove("is-visible"));

folder.addEventListener("dblclick", () => {
  document.body.classList.add("folder-open");
  fileWindow.setAttribute("aria-hidden", "false");
});

folder.addEventListener("click", () => {
  folder.focus();
});

imageFile.addEventListener("dblclick", () => {
  document.body.classList.add("image-open");
  imageWindow.setAttribute("aria-hidden", "false");
});

fileWindow.querySelector(".window-controls button:last-child").addEventListener("click", () => {
  document.body.classList.remove("folder-open");
  fileWindow.setAttribute("aria-hidden", "true");
});

imageWindow.querySelector(".window-controls button").addEventListener("click", () => {
  document.body.classList.remove("image-open");
  imageWindow.setAttribute("aria-hidden", "true");
});

logoutButton.addEventListener("click", () => {
  document.body.classList.remove("is-logged-in", "folder-open", "image-open");
  loginScreen.setAttribute("aria-hidden", "false");
  desktopScreen.setAttribute("aria-hidden", "true");
  fileWindow.setAttribute("aria-hidden", "true");
  imageWindow.setAttribute("aria-hidden", "true");
  loginForm.reset();
  loginError.classList.remove("is-visible");
  password.focus();
});
