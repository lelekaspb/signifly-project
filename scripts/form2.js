import "../styles/form2-3.scss";
import { reference } from "./data";

const userProfile = JSON.parse(localStorage.getItem("profile"));
console.log(userProfile);

document
  .querySelector(".chooser-wrap")
  .addEventListener("click", selectGameType);

function selectGameType(event) {
  const selectedType = event.target.closest(".choose-box");
  selectedType.classList.add("selected");
  userProfile.game_types.push(selectedType.dataset.type);
}

document
  .querySelector(".next-button")
  .addEventListener("click", storeChosenTypes);

function storeChosenTypes() {
  if (userProfile.game_types.length) {
    calculateGames();
    localStorage.setItem("profile", JSON.stringify(userProfile));
    window.location.href = "form3.html";
  } else {
    alert("Please, choose type of games you are interested in");
  }
}

function calculateGames() {
  userProfile.game_types.forEach((type) => {
    const result = reference.games.filter((game) => game.type.includes(type));
    console.log(result);
    result.forEach((element) => {
      userProfile.gamesShown.push(element);
    });
  });
}
