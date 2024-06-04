import { fadeIn, fadeOut } from "../animate";

document.getElementById("flecha-5").addEventListener("click", function () {
  setTimeout(function () {
    fadeOut("duration Arbolriegos");
  }, 5000);
});

document.getElementById("flecha-5").addEventListener("click", function () {
  fadeIn("duration Arbolriegos-2", 6000);
});
