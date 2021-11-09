import "../styles/form1.scss";
import { reference, updateUserProfileAreas } from "./data.js";

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
