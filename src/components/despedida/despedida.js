import { fadeIn, fadeOut } from "../animate";

document.getElementById("flecha-12").addEventListener("click", function () {
  setTimeout(function () {
    fadeOut("duration despedida");
  }, 4500);
});

document.getElementById("flecha-12").addEventListener("click", function () {
  fadeIn("duration despedida-2", 6000);
});


document.getElementById("flecha-12").addEventListener("click", function () {
    fadeIn("duration despedida-3", 15000,"despedida-3");
  });
  