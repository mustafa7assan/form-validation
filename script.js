"use strict";

const email = document.querySelector("#email");
const selectCountry = document.querySelector("#country");
const zipCode = document.querySelector("#zip-code");
const password = document.querySelector("#password");
const passwordConfim = document.querySelector("#password-confi");
const form = document.querySelector("form");
const error = document.createElement("sub");

email.addEventListener("input", function () {
  error.textContent = "";
  if (email.validity.typeMismatch) {
    error.textContent += "Please enter valid email address";
  } else if (email.validity.patternMismatch) {
    error.textContent += "The email must end with @gmail.com";
  } else {
    error.textContent = "";
  }
  this.parentElement.appendChild(error);
});

selectCountry.addEventListener("input", function () {
  error.textContent = "";
  if (selectCountry.value === " " || selectCountry.validity.valueMissing) {
    error.textContent = "Please select a country";
  } else {
    error.textContent = "";
  }
  this.parentElement.appendChild(error);
});

zipCode.addEventListener("input", function () {
  error.textContent = "";
  if (zipCode.validity.patternMismatch) {
    error.textContent =
      "The zip code must consists from 5 digits or 5 digits, - and 4 digits ";
  } else {
    error.textContent = "";
  }
  this.parentElement.appendChild(error);
});

password.addEventListener("input", function () {
  error.textContent = "";
  if (password.validity.tooShort) {
    error.textContent = "Your password is too short";
  } else if (password.validity.patternMismatch) {
    error.textContent = "Your password must only contain a-z, A-Z, 0-9";
  } else if (password.validity.tooLong) {
    error.textContent = "Your password is too long";
  } else {
    error.textContent = "";
  }
  this.parentElement.appendChild(error);
});

passwordConfim.addEventListener("input", function () {
  error.textContent = "";
  if (password.value !== this.value) {
    error.textContent = "The passwords not matchs";
  } else {
    error.textContent = "";
  }
  this.parentElement.appendChild(error);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (form.checkValidity()) {
    console.log("Data can be send to server");
  } else {
    console.log("Show messsage tell user the is not in right formmat");
  }
});
