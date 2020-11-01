import game, {handleUSerAction} from "./gameState";
import {TICK_RATE} from "./constants";
import initButtons from "./buttons";

function tick() {
  console.log("Tick",Date.now());
}

async function init() {
  
  console.log("Starting Game");
  initButtons(handleUSerAction);

  let nextTimeToTick = Date.now();
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}
init();
