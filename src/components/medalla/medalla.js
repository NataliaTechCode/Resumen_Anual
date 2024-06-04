import { fadeIn, fadeOut } from "../animate";

document.getElementById("flecha-11").addEventListener("click", function () {
  setTimeout(function () {
    fadeOut("duration medalla");
  }, 4500);
});

document.getElementById("flecha-11").addEventListener("click", function () {
  fadeIn("duration medalla-2", 6000, "medalla-2");
});
