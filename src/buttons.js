import {ICONS} from "./constants";

const toggleHighlighted = (icon, show) => document.querySelector(`.${ICONS[icon]}-icon`).classList.toggle("highlighted", show);

export default function initButtons(handleUserAction) {
  let selectedIcons = 0;
  function buttonClick({ target}) {
    if (target.classList.contains("left-btn")) {
      toggleHighlighted(selectedIcons, false);
      selectedIcons = (2 + selectedIcons) % ICONS.length;
      toggleHighlighted(selectedIcons, true);
    } else if (target.classList.contains("right-btn")) {
      toggleHighlighted(selectedIcons, false);
      selectedIcons = (1 + selectedIcons) % ICONS.length;
      toggleHighlighted(selectedIcons, true);
    } else {
      handleUserAction(ICONS[selectedIcons]);
    }
  }
  document.querySelector(".buttons").addEventListener("click", buttonClick);
}
