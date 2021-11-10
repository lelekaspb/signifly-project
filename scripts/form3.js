import "../styles/form2-3.scss";

const userProfile = JSON.parse(localStorage.getItem("profile"));

console.log(userProfile);

userProfile.gamesShown.forEach(displayGame);

function displayGame(game) {
  const divElement = document.createElement("div");
  divElement.className = "choose-box";
  divElement.dataset.game = game.name;

  const imgElement = document.createElement("img");
  imgElement.src = game.imageSrc;
  imgElement.alt = game.name;
  imgElement.className = "game-logo";

  divElement.append(imgElement);

  document.querySelector(".chooser-wrap").append(divElement);
}

document.querySelectorAll(".choose-box").forEach((item) => {
  item.addEventListener("click", selectGame);
});

function selectGame(event) {
  const selectedType = event.target.closest(".choose-box");
  selectedType.classList.add("selected");
  userProfile.gamesSelected.push(selectedType.dataset.game);
  console.log(selectedType);
  console.log(userProfile);
  selectedType.removeEventListener("click", selectGame);
  selectedType.addEventListener("click", deselectGame);
}

function deselectGame(event) {
  const selectedType = event.target.closest(".choose-box");
  selectedType.classList.remove("selected");
  const index = userProfile.gamesSelected.findIndex(
    (element) => element === selectedType.dataset.game
  );
  userProfile.gamesSelected.splice(index, 1);
  console.log(userProfile);
  selectedType.removeEventListener("click", deselectGame);
  selectedType.addEventListener("click", selectGame);
}

document
  .querySelector(".next-button")
  .addEventListener("click", storeChosenGames);

function storeChosenGames() {
  if (userProfile.gamesSelected.length) {
    localStorage.setItem("profile", JSON.stringify(userProfile));
    window.location.href = "form4.html";
  } else {
    alert("Please, choose  games you are interested in");
  }
}