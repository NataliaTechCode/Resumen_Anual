import { fadeIn,fadeOut } from "../animate";

document.getElementById("click").addEventListener("click", function () {
    fadeOut("duration intro");
  });
  
  document.getElementById("click").addEventListener("click", function () {
    fadeIn("duration saludo", 1500);
  });
  
  document.getElementById("click").addEventListener("click", function () {
    fadeIn("duration introduccion", 4000,"introduccion");
  });
  
