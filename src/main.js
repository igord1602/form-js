/* eslint-disable one-var */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
const MR = document.querySelector("#mr"),
  MRS = document.querySelector("#mrs"),
  FName = document.querySelector(".firstname"),
  LName = document.querySelector(".lastname"),
  email = document.querySelector(".email"),
  Phone = document.querySelector(".phone"),
  Password = document.querySelector(".password"),
  Country = document.querySelector(".country"),
  Birthday = document.querySelector(".date"),
  submit = document.querySelector("#submit");

const button = document.getElementById("submit");
button.addEventListener("click", function (event) {
  event.preventDefault();

  const personData = {
    Mr: MR.checked,
    Mrs: MRS.checked,
    firstname: FName.value,
    lastname: LName.value,
    email: email.value,
    phone: Phone.value,
    password: Password.value,
    country: Country.value,
    date: Birthday.value,
  };

  console.log(personData);
});
