import { fadeIn,fadeOut } from "../animate";


document.getElementById("flecha-6").addEventListener("click", function () {
    setTimeout(function () {
      fadeOut("duration crecimiento");
    }, 6000);
  }); 
  
  document.getElementById("flecha-6").addEventListener("click", function () {
      fadeIn("duration crecimiento-2",7000);
  });

  document.getElementById("flecha-6").addEventListener("click", function () {
    fadeIn("duration crecimiento-3",15000,"crecimiento-3");
});
