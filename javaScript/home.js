const logOutBtn = document.getElementById("logOutBtn");
const main = document.getElementById("main");

let userName = localStorage.getItem("sessionUser");

let header = document.createElement("h3");
header.innerHTML = `Welcome ${userName.toUpperCase()}!`;

main.prepend(header);

logOutBtn.addEventListener("click", function () {
  window.location.href = "./index.html";
});
