import "../styles/form4-5.scss";

const endpoint = "https://kea0209-5a57.restdb.io/rest/ezone";
const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "x-apikey": "6082d28c28bf9b609975a5db",
  "cache-control": "no-cache",
};

const userProfile = JSON.parse(localStorage.getItem("profile"));

const payload = {
  email: "",
  password: "",
  game_types: userProfile.game_types.toString(),
  games: userProfile.gamesSelected.toString(),
  areas: userProfile.areas.toString(),
};

const form = document.querySelector("form");
form.addEventListener("submit", submitForm);

async function submitForm(e) {
  e.preventDefault();
  payload.email = form.elements.email.value;
  payload.password = form.elements.password.value;
  await postData();
  clearForm();
  changePage();
  localStorage.removeItem("profile");
}

const postData = async function () {
  console.log("postData");
  try {
    const postData = JSON.stringify(payload);
    const options = {
      method: "POST",
      headers,
      body: postData,
    };
    const data = await fetch(endpoint, options);
    console.log(data);
  } catch (err) {
    console.log("Caught error " + err);
  }
};

async function clearForm() {
  console.log("clear form");
  form.elements.email.value = "";
  form.elements.password.value = "";
}

async function changePage() {
  window.location.href = "form5.html";
}

// password validation
const re = new RegExp(/^.*(?=.{6,15})(?=.*\d)(?=.*[a-zA-Z]).*$/);
const passwordField = document.querySelector("input.password");
passwordField.addEventListener("keyup", checkPassword);
function checkPassword(e) {
  const pass = e.target.value;
  console.log(pass);
  console.log(re.test(pass));
  if (!re.test(pass)) {
    passwordField.setCustomValidity("Invalid field.");
    console.log("here");
  } else {
    passwordField.setCustomValidity("");
  }
}
