import "../styles/form1.scss";
import { reference } from "./data.js";

console.log(reference);

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
  // e.preventDefault();
  // console.log(e.target.querySelector("#multitasking-yes").checked === true);
  const areas = e.target.querySelectorAll("fieldset");
  const areasChosen = [];
  areas.forEach((area) => {
    if (area.querySelector(`input[data-value="yes"]`).checked) {
      areasChosen.push(area.dataset.area);
    }
  });

  updateUserProfileAreas(areasChosen);
}

function updateUserProfileAreas(areasChosen) {
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
