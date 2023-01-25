let containerEl = document.getElementById("container");

let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");
let headEl = document.getElementById("head");
let totalTicketsEl = document.getElementById("totalTickets");
const logoutEl = document.getElementById("logout");
const buttonEl = document.getElementById("button");
const loginbuttonEl = document.getElementById("loginbutton");

const container = document.getElementById("container");
const genderMaleEl = document.getElementById("genderMale");
const genderFemaleEl = document.getElementById("genderFemale");

loginbuttonEl.addEventListener("click", check, false);
buttonEl.addEventListener("click", ticketBooking, false);

logoutEl.addEventListener("click", logoutbooking, false);
let female = false;
let male = false;

function check(event) {
  event.preventDefault();
  if (nameEl.value === "") {
    nameErrMsgEl.textContent = "Required*";
  }
  if (emailEl.value === "") {
    emailErrMsgEl.textContent = "Required*";
  }
  if (passwordEl.value === "") {
    passwordErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
    containerEl.classList.add("d-none");
    sub.classList.remove("d-none");
    headEl.textContent = "Welcome" + nameEl.value;
    totalTicketsEl.textContent = "Book only 3 tickets";
    totalTicketsEl.style.color = "brown";
  }
}

function ticketBooking() {
  let count = 0;
  const inputnameEl = document.getElementById("inputname");
  const inputageEl = document.getElementById("inputage");
  const messageEl = document.getElementById("message");
  const chair1El = document.getElementById("chair1");
  const chair2EL = document.getElementById("chair2");
  const chair3El = document.getElementById("chair3");
  const chair4El = document.getElementById("chair4");

  const type = parseInt(inputageEl.value);
  const types = typeof type;
  console.log(type);
  if (
    inputnameEl.value === "" ||
    inputageEl.value === "" ||
    (female === false && male === false) ||
    type === Number ||
    (female === true && male === true)
  ) {
    messageEl.textContent = "Enter valid details*";
    messageEl.style.color = "red";
  } else {
    messageEl.textContent = "";
    Age = parseInt(inputageEl.value);
    if (Age >= 60 && female === true) {
      count = count + 1;
      if (count <= 3) {
        chair1El.style.color = "green";
        messageEl.textContent = " Seat-1 is allocated for you";
        messageEl.style.color = "green";
      } else {
        headEl.textContent = "Limit has reached";
        messageEl.style.color = "red";
        console.log(count);
      }
    } else if (Age >= 60 && male === true) {
      chair2EL.style.color = "green";
      messageEl.textContent = " Seat-6 is allocated for you";
      messageEl.style.color = "green";
      count = count + 1;
    } else if (Age < 60 && female === true) {
      chair3El.style.color = "green";
      messageEl.textContent = " Seat-2 is allocated for you";
      messageEl.style.color = "green";
      count = count + 1;
    } else if (Age < 60 && male === true) {
      chair4El.style.color = "green";
      messageEl.textContent = " Seat-4 is allocated for you";
      messageEl.style.color = "green";
      count = count + 1;
    }
  }
}

function femalebook() {
  female = !female;
  male = false;
}

function malebook() {
  male = !male;
  female = false;
}

function logoutbooking() {
  sub.classList.add("d-none");
}
genderMaleEl.addEventListener("click", femalebook, false);
genderFemaleEl.addEventListener("click", malebook, false);
