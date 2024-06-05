import { fadeIn,fadeOut } from "../animate";
import { transición } from "../transition";


document.getElementById("flecha-20").addEventListener("click", function (event) {
  event.preventDefault();
  transición(
    "pag-sinDatos",
    "pag-inicio",
    "out:square:center",
    "in:square:center"
  );
});


document.getElementById("flecha-20").addEventListener("click", function () {
  setTimeout(function () {
    fadeOut("duration datos");
  }, 5000);
}); 

document.getElementById("flecha-20").addEventListener("click", function () {
  fadeIn("duration datos-2", 5400);
});

document.getElementById("flecha-20").addEventListener("click", function () {
  fadeIn("duration datos-3", 11800);
});


document.getElementById("flecha-20").addEventListener("click", function () {
  fadeIn("duration datos-4", 25000,"datos-4");
});

// document.getElementById("flecha-20").addEventListener("click", function () {
//   fadeIn("duration datos-5", 5000000,"datos-5");
// });