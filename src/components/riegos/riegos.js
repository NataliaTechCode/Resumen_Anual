import { fadeIn } from "../animate";

document.getElementById("flecha-1").addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("water").classList.add("watering");
    document.getElementById("container").classList.add("drop-container");
    document.getElementById("drop").classList.add("drop");
    fadeIn("duration riegos", 2500, "riegos");
  }, 2000);
});
