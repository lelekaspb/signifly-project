import "../styles/form1.scss";
import { reference } from "./data.js";

const userProfile = {
  game_types: [],
  gamesShown: [],
  gamesSelected: [],
  areas: [],
  email: "",
  password: "",
};

document.querySelector("form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const areasChosen = ["common"];
  checkAnswers();

  function checkAnswers() {
    // sleep area
    if (e.target.querySelector(`#sleep-no`).checked) {
      areasChosen.push("sleep");
    }

    // body area
    if (e.target.querySelector(`#body-yes`).checked) {
      areasChosen.push("body");
    }

    // mind area
    if (e.target.querySelector(`#mind-yes`).checked) {
      areasChosen.push("mind");
    }

    // hearing area
    if (e.target.querySelector(`#hearing-yes`).checked) {
      areasChosen.push("hearing");
    }

    // strategy area
    if (e.target.querySelector(`#strategy-yes`).checked) {
      areasChosen.push("strategy");
    }

    // communication area
    if (e.target.querySelector(`#communication-yes`).checked) {
      areasChosen.push("communication");
    }

    // setup area
    if (e.target.querySelector(`#setup-yes`).checked) {
      areasChosen.push("setup");
    }

    // nutrition area
    if (e.target.querySelector(`#nutrition-no`).checked) {
      areasChosen.push("nutrition");
    }

    // multitasking area
    if (e.target.querySelector(`#multitasking-yes`).checked) {
      areasChosen.push("multitasking");
    }
  }

  updateUserProfileAreas(areasChosen);
}

function updateUserProfileAreas(areasChosen) {
  areasChosen.forEach((areaChosen) => {
    reference.areas[areaChosen].forEach((item) => {
      userProfile.areas.push(item);
    });
  });
  console.log(userProfile.areas);
  saveInLocalStorage();
}

function saveInLocalStorage() {
  localStorage.setItem("profile", JSON.stringify(userProfile));
}
