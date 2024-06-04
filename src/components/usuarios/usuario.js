import { fadeIn,fadeOut } from "../animate";

document.getElementById("flecha-7").addEventListener("click", function () {
    setTimeout(function () {
      fadeOut("duration usuario");
    }, 4500);
  });
  
  document.getElementById("flecha-7").addEventListener("click", function () {
      fadeIn("duration usuario-2",6000,"usuario-2");
  });
  