export function mostrarElemento(classname, time) {
    var elementos = document.getElementsByClassName(classname);
    for (var i = 0; i < elementos.length; i++) {
      setTimeout(
        function (elemento) {
          elemento.style.display = "block";
        },
        time,
        elementos[i]
      );
    }
  }
  
  export function fadeOut(classname) {
    var elementos = document.getElementsByClassName(classname);
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].classList.add("fadeOut");
  
        setTimeout(
          function (elemento) {
            elemento.style.display = "none";
            elemento.classList.remove("fadeOut");
          },
          1000,
          elementos[i]
        );
    }
  }
  
  export function fadeIn(classname, time,ultimo) {
    mostrarElemento(classname, time);
    var elementos = document.getElementsByClassName(classname);
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].classList.add("fadeIn");
        
       if(!elementos[i].classList.contains(ultimo)){
        setTimeout(
          function (elemento) {
            elemento.classList.remove("fadeIn");
            fadeOut(classname, time);
          },
          time * 2,
          elementos[i]
        );
       }
    }
    elementos.classList.remove("fadeIn");
  }
  
  
  
  