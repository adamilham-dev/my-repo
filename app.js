const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");
const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");
const errorMessage = document.querySelector(".error-message");
const successMessage = document.querySelector(".success-message");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value !== "") return;
    inp.classList.remove("active");
  });
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validateSignIn() {
  let isValid = true;
  errorMessage.textContent = "";
  successMessage.textContent = "";

  const username = signInForm.querySelector('input[type="text"]').value.trim();
  const password = signInForm
    .querySelector('input[type="password"]')
    .value.trim();

  if (!username) {
    isValid = false;
    errorMessage.textContent += "Username is required.\n";
  }

  if (!password) {
    isValid = false;
    errorMessage.textContent += "Password is required.\n";
  }

  return isValid;
}

function validateSignUp() {
  let isValid = true;
  errorMessage.textContent = "";
  successMessage.textContent = "";

  const username = signUpForm.querySelector('input[type="text"]').value.trim();
  const email = signUpForm.querySelector('input[type="email"]').value.trim();
  const password = signUpForm
    .querySelector('input[type="password"]')
    .value.trim();
  const confirmPassword = signUpForm
    .querySelector('input[name="confirm-password"]')
    .value.trim();

  if (!username) {
    isValid = false;
    errorMessage.textContent += "Username is required.\n";
  }

  if (!email) {
    isValid = false;
    errorMessage.textContent += "Email is required.\n";
  } else if (!validateEmail(email)) {
    isValid = false;
    errorMessage.textContent += "Please enter a valid email address.\n";
  }

  if (!password) {
    isValid = false;
    errorMessage.textContent += "Password is required.\n";
  }

  if (!confirmPassword) {
    isValid = false;
    errorMessage.textContent += "Confirm Password is required.\n";
  } else if (password !== confirmPassword) {
    isValid = false;
    errorMessage.textContent += "Passwords do not match.\n";
  }

  return isValid;
}

signInForm.addEventListener("submit", (event) => {
  event.preventDefault(); 
  if (validateSignIn()) {
    successMessage.textContent = "Sign-in successful! Maaf pak, belum kepikiran mau buat animasi apa lagi setelah autentikasi nya berhasil hehe :)";
    console.log("Sign-in form is valid and ready to submit!");
    signInForm.reset();
  }
});

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault(); 
  if (validateSignUp()) {
    successMessage.textContent = "Sign-up successful!"; 
    console.log("Sign-up form is valid and ready to submit!");
    signUpForm.reset();
  }
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});
