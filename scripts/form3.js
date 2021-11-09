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
  imgElement.className = "game-logo";

  divElement.append(imgElement);

  document.querySelector(".chooser-wrap").append(divElement);
}

document.querySelector(".chooser-wrap").addEventListener("click", selectGame);

function selectGame(event) {
  const selectedType = event.target.closest(".choose-box");
  selectedType.classList.add("selected");
  userProfile.gamesSelected.push(selectedType.dataset.game);
}

document
  .querySelector(".next-button")
  .addEventListener("click", storeChosenTypes);

function storeChosenTypes() {
  if (userProfile.game_types.length) {
    localStorage.setItem("profile", JSON.stringify(userProfile));
    window.location.href = "form4.html";
  } else {
    alert("Please, choose  games you are interested in");
  }
}
