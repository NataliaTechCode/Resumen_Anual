import { fadeIn } from "../animate";

document.getElementById("flecha-5").addEventListener("click", function () {
  setTimeout(function () {
    window.location.href = "#pagArboles-monitoreos";
    mostrarElemento("pagArboles-monitoreos")
  }, 13500);
  fadeIn("duration Arbolmonitoreo", 14000, "Arbolmonitoreo");
});

function mostrarElemento(id) {
  var elemento = document.getElementById(id);
  elemento.style.visibility = "visible";
}
