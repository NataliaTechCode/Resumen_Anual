function mostrarElemento(id) {
  var elemento = document.getElementById(id);
  elemento.style.visibility = "visible";
}

export function transición(Nextpag, Actualpag, Outanimacion, Inanimacion) {
  var target = document.getElementById(Nextpag);
  var pag = document.getElementById(Actualpag);

  //Transicion

  pag.setAttribute("transition-style", Outanimacion);
  setTimeout(function () {
    target.scrollIntoView({ behavior: "smooth" });

    setTimeout(function () {
      mostrarElemento(Nextpag);
      var nextPageLink = document.getElementById(Nextpag);
      nextPageLink.setAttribute("transition-style", Inanimacion);
    }, 1000);
  }, 650);
}

/*Cambio de paginas */

/*inicio*/
document.getElementById("flecha-1").addEventListener("click", function (event) {
  event.preventDefault();
  transición(
    "pag-riegos",
    "pag-inicio",
    "out:square:center",
    "in:square:center"
  );

  setTimeout(function () {
    mostrarElemento("water");
  }, 3000);
});

// document.getElementById("flecha-20").addEventListener("click", function (event) {
//   event.preventDefault();
//   transición(
//     "pag-sinDatos",
//     "pag-inicio",
//     "out:square:center",
//     "in:square:center"
//   );
// });

/*Riegos */
document.getElementById("flecha-2").addEventListener("click", function (event) {
  event.preventDefault();
  transición(
    "pag-monitoreos",
    "pag-riegos",
    "out:square:top-right",
    "in:square:bottom-left"
  );
});

/* Monitoreos*/
document.getElementById("flecha-3").addEventListener("click", function (event) {
  event.preventDefault();
  transición(
    "pag-arboles",
    "pag-monitoreos",
    "out:circle:center",
    "in:circle:center"
  );
});

/*Cantidad arboles introduccion */
document.getElementById("flecha-4").addEventListener("click", function (event) {
  event.preventDefault();
  transición(
    "pag-cantarboles",
    "pag-arboles",
    "out:polygon:opposing-corners",
    "in:polygon:opposing-corners"
  );
});

/*Cantidad arboles */
document.getElementById("flecha-5").addEventListener("click", function (event) {
  event.preventDefault();
  transición(
    "pagArboles-riegos",
    "pag-cantarboles",
    "out:wipe:top-right",
    "in:wipe:bottom-left"
  );
});

/*Arbol con mayor riegos/monitoreos */
document.getElementById("flecha-6").addEventListener("click", function (event) {
  event.preventDefault();
  transición(
    "pagArboles-crecimiento",
    "pagArboles-monitoreos",
    "out:wipe:down",
    "in:wipe:up"
  );
});

/*Arbol con mayor crecimiento */
document.getElementById("flecha-7").addEventListener("click", function (event) {
  event.preventDefault();
  transición(
    "pag-usuario",
    "pagArboles-crecimiento",
    "out:wipe:bottom-left",
    "in:wipe:top-right"
  );
});

/*Usarios que adoptaron */
document.getElementById("flecha-8").addEventListener("click", function (event) {
  event.preventDefault();
  transición(
    "pag-score", 
    "pag-usuario", 
    "out:wipe:up", 
    "in:wipe:down"
  );
});

/*Score*/
document.getElementById("flecha-9").addEventListener("click", function (event) {
  event.preventDefault();
  transición(
    "pg-scoremes",
    "pag-score",
    "out:wipe:left",
    "in:wipe:right"
  );
});

/*Score-mes*/
document
.getElementById("flecha-10")
.addEventListener("click", function (event) {
    event.preventDefault();
    transición(
      "pag-top",
      "pg-scoremes",
      "out:square:bottom-left",
      "in:square:top-right"
    );
  });
  
  /*Top*/
  document
  .getElementById("flecha-11")
  .addEventListener("click", function (event) {
    event.preventDefault();
    transición(
      "pag-medalla",
      "pag-top",
      "out:diamond:center",
      "in:diamond:center"
    );
  });

document
  .getElementById("flecha-12")
  .addEventListener("click", function (event) {
    event.preventDefault();
    transición(
      "pag-despedida",
      "pag-medalla",
      "out:diamond:hesitate",
      "in:diamond:hesitate"
    );
  });
  
