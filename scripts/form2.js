import "../styles/form2-3.scss";
import { reference } from "./data";

console.log(reference);

const userProfile = JSON.parse(localStorage.getItem("profile"));

document.querySelectorAll(".choose-box").forEach((item) => {
  if (userProfile.game_types.includes(item.dataset.type)) {
    item.classList.add("selected");
    item.addEventListener("click", deselectGameType);
  } else {
    item.addEventListener("click", selectGameType);
  }
});

function selectGameType(event) {
  const selectedType = event.target.closest(".choose-box");
  selectedType.classList.add("selected");
  userProfile.game_types.push(selectedType.dataset.type);
  selectedType.removeEventListener("click", selectGameType);
  selectedType.addEventListener("click", deselectGameType);
}

function deselectGameType(event) {
  const selectedType = event.target.closest(".choose-box");
  selectedType.classList.remove("selected");
  const index = userProfile.game_types.findIndex(
    (element) => element === selectedType.dataset.type
  );
  userProfile.game_types.splice(index, 1);
  selectedType.removeEventListener("click", deselectGameType);
  selectedType.addEventListener("click", selectGameType);
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
    alert("Please, choose type(s) of games you are interested in");
  }
}

function calculateGames() {
  userProfile.gamesShown = [];
  userProfile.game_types.forEach((type) => {
    const result = reference.games.filter((game) => game.type.includes(type));
    result.forEach((element) => {
      userProfile.gamesShown.push(element);
    });
  });
  userProfile.gamesShown = [...new Set(userProfile.gamesShown)];
}
