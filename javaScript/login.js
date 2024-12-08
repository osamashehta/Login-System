const signUpPage = document.getElementById("signUpPage");
const signInBtn = document.getElementById("signInBtn");
const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");
const passwordCorrect = document.getElementById("passwordCorrect");
const emailRegistered = document.getElementById("emailRegistered");

let usersBox = [];

usersBox = JSON.parse(localStorage.getItem("usersData")) || [];

function signIn() {
  let currentUser = {
    email: signInEmail.value,
    password: signInPassword.value,
  };

  let emailCheck = usersBox.findIndex(
    (user) => user.email === currentUser.email
  );

  let passwordCheck =
    usersBox[emailCheck]?.password === currentUser.password ? emailCheck : -1;

  if (emailCheck !== -1) {
    emailRegistered.classList.add("d-none");
    if (passwordCheck !== -1) {
      let userName = usersBox[passwordCheck].name;
      localStorage.setItem("sessionUser", userName);
      window.location.href = "./home.html";
      clear();
    } else {
      passwordCorrect.classList.remove("d-none");
    }
  } else {
    emailRegistered.classList.remove("d-none");
  }
}

signInBtn.addEventListener("click", signIn);

function clear() {
  signInEmail.value = "";
  signInPassword.value = "";
  passwordCorrect.classList.add("d-none");
  emailRegistered.classList.add("d-none");
}

signUpPage.addEventListener("click", function () {
  window.location.href = "./signup.html";
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    signIn();
  } else if (e.key == "Escape") {
    clear();
  }
});
