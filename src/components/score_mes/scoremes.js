import { fadeIn,fadeOut } from "../animate";

document.getElementById("flecha-9").addEventListener("click", function () {
  setTimeout(function () {
    fadeOut("duration score-mes");
  }, 4500);
});

document.getElementById("flecha-9").addEventListener("click", function () {
  fadeIn("duration scoremes-2",6000,"scoremes-2");
});

