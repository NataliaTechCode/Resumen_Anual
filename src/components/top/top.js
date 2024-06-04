import anime from "../../../public/anime-master/lib/anime.es.js";
import { fadeIn, fadeOut } from "../animate";

const bmContainer = document.querySelector("#bm");

//Persona animada en bici

var animation = bodymovin.loadAnimation({
  container: bmContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/49240/bike.json",
});

var path = anime.path(".outline");

var motionPath = anime({
  targets: ".bike",
  translateX: path("x"),
  translateY: path("y"),
  rotate: path("angle"),
  easing: "linear",
  duration: 15000,
  loop: true,
});


/*Animacion letras*/

document.getElementById("flecha-10").addEventListener("click", function () {
  setTimeout(function () {
    fadeOut("duration top");
  }, 4500);
});

document.getElementById("flecha-10").addEventListener("click", function () {
  fadeIn("duration top-2",6000);
});


document.getElementById("flecha-10").addEventListener("click", function () {
  fadeIn("duration top-3",13000,"top-3");
});
