const signUpName = document.getElementById("signUpName");
const signUpEmail = document.getElementById("signUpEmail");
const signUpPassword = document.getElementById("signUpPassword");
const signUpConfirm = document.getElementById("signUpConfirm");
const signUpBtn = document.getElementById("signUpBtn");
const emailExist = document.getElementById("emailExist");
const matchPassword = document.getElementById("matchPassword");
const passwordValid = document.getElementById("passwordValid");
const emailValid = document.getElementById("emailValid");
const signInPage = document.getElementById("signInPage");

let usersBox = [];

usersBox = JSON.parse(localStorage.getItem("usersData")) || [];

function signUp() {
  let user = {
    name: signUpName.value,
    email: signUpEmail.value,
    password: signUpPassword.value,
  };
  let index = usersBox.findIndex((exist) => exist.email === user.email);
  let confirm = signUpConfirm.value;
  if (validationEmail() && validationPassword()) {
    if (index == -1 || usersBox.length == 0) {
      if (confirm === user.password) {
        usersBox.push(user);
        localStorage.setItem("usersData", JSON.stringify(usersBox));
        let userName = user.name;
        localStorage.setItem("sessionUser", userName);
        clear();
        window.location.href = "./home.html";
      } else {
        matchPassword.classList.remove("d-none");
      }
    } else {
      emailExist.classList.remove("d-none");
    }
  } else {
    if (signUpEmail.classList.contains("is-invalid")) {
      emailValid.classList.remove("d-none");
    } else if (signUpPassword.classList.contains("is-invalid")) {
      passwordValid.classList.remove("d-none");
    }
  }
}

signUpBtn.addEventListener("click", signUp);

function clear() {
  signUpName.value = "";
  signUpEmail.value = "";
  signUpPassword.value = "";
  signUpConfirm.value = "";
  emailExist.classList.add("d-none");
  matchPassword.classList.add("d-none");
  signUpEmail.classList.remove("is-valid");
  signUpPassword.classList.remove("is-valid");
}

function validationEmail() {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let email = signUpEmail.value;
  if (EMAIL_REGEX.test(email)) {
    signUpEmail.classList.add("is-valid");
    signUpEmail.classList.remove("is-invalid");
    emailValid.classList.add("d-none");
    return true;
  } else {
    signUpEmail.classList.remove("is-valid");
    signUpEmail.classList.add("is-invalid");
    return false;
  }
}

function validationPassword() {
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let password = signUpPassword.value;
  if (PASSWORD_REGEX.test(password)) {
    signUpPassword.classList.add("is-valid");
    signUpPassword.classList.remove("is-invalid");
    passwordValid.classList.add("d-none");
    return true;
  } else {
    signUpPassword.classList.remove("is-valid");
    signUpPassword.classList.add("is-invalid");
    return false;
  }
}

signInPage.addEventListener("click", function () {
  window.location.href = "./index.html";
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    signUp();
  } else if (e.key == "Escape") {
    clear();
  }
});
