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
  const areasChosen = ["common"];
  checkAnswers();

  function checkAnswers() {
    // sleep area
    if (
      e.target.querySelector(
        `fieldset[data-area="sleep"] input[data-value="no"]`
      )
    ) {
      areasChosen.push("sleep");
    }

    // body area
    if (
      e.target.querySelector(
        `fieldset[data-area="body"] input[data-value="yes"]`
      )
    ) {
      areasChosen.push("body");
    }

    // mind area
    if (
      e.target.querySelector(
        `fieldset[data-area="mind"] input[data-value="yes"]`
      )
    ) {
      areasChosen.push("mind");
    }

    // hearing area
    if (
      e.target.querySelector(
        `fieldset[data-area="hearing"] input[data-value="yes"]`
      )
    ) {
      areasChosen.push("hearing");
    }

    // strategy area
    if (
      e.target.querySelector(
        `fieldset[data-area="strategy"] input[data-value="yes"]`
      )
    ) {
      areasChosen.push("strategy");
    }

    // communication area
    if (
      e.target.querySelector(
        `fieldset[data-area="communication"] input[data-value="yes"]`
      )
    ) {
      areasChosen.push("communication");
    }

    // setup area
    if (
      e.target.querySelector(
        `fieldset[data-area="setup"] input[data-value="yes"]`
      )
    ) {
      areasChosen.push("setup");
    }

    // nutrition area
    if (
      e.target.querySelector(
        `fieldset[data-area="nutrition"] input[data-value="no"]`
      )
    ) {
      areasChosen.push("nutrition");
    }

    // multitasking area
    if (
      e.target.querySelector(
        `fieldset[data-area="multitasking"] input[data-value="yes"]`
      )
    ) {
      areasChosen.push("multitasking");
    }
  }

  updateUserProfileAreas(areasChosen);
}

function updateUserProfileAreas(areasChosen) {
  console.log(areasChosen);
  areasChosen.forEach((areaChosen) => {
    reference.areas[areaChosen].forEach((item) => {
      userProfile.areas.push(item);
    });
  });
  console.log(userProfile);
  saveInLocalStorage();
}

function saveInLocalStorage() {
  localStorage.setItem("profile", JSON.stringify(userProfile));
}
