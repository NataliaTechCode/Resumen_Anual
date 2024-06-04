import { fadeIn,fadeOut } from "../animate";

document.getElementById("flecha-2").addEventListener("click", function () {
  setTimeout(function () {
    fadeOut("duration monitoreos");
  }, 4500);
});

document.getElementById("flecha-2").addEventListener("click", function () {
    fadeIn("duration monitoreos-2",6000,"monitoreos-2");
});
