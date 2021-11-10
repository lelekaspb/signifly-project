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
  localStorage.removeItem("profile");
  clearForm();
  changePage();
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
    await fetch(endpoint, options);
  } catch (err) {
    console.log("Caught error " + err);
  }
};

async function clearForm() {
  form.elements.email.value = "";
  form.elements.password.value = "";
}

async function changePage() {
  window.location.href = "form5.html";
}
