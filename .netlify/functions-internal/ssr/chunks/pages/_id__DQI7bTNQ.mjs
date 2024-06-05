import { getFirestore, query, collection, getDocs } from 'firebase/firestore';
import { c as createComponent, r as renderTemplate, d as renderSlot, e as renderHead, f as addAttribute, g as createAstro, m as maybeRenderHead, h as renderComponent } from '../astro_cu31Rzcd.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                         */
import 'clsx';
import { initializeApp } from 'firebase/app';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$f = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"><title>', '</title><script type="module">\n    <\/script>', "</head> <body> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/layouts/Layout.astro", void 0);

const $$Astro$e = createAstro();
const $$Flecha = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Flecha;
  const { id, clase } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="container2" data-astro-cid-vf74m76z> <a data-astro-cid-vf74m76z> <img${addAttribute(`${clase}`, "class")}${addAttribute(`flecha-${id}`, "id")} src="../public/images/flecha2.png" data-astro-cid-vf74m76z> </a> </div>  `;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/flecha.astro", void 0);

const $$Astro$d = createAstro();
const $$Inicio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Inicio;
  const { nombre } = Astro2.props;
  let nombre_usuario = nombre.split(" ");
  let primerNombre = nombre_usuario[0];
  return renderTemplate`<html> ${maybeRenderHead()}<div transition-style="out:wipe:cinematic"> <div id="pag-inicio"> <div class="container"> <img src="images/Montañas.png" id="mountains"> <img src="images/Arboles.png" id="trees"> <h1 class="duration intro">RESUMEN 2024</h1> <h1 class="duration saludo" id="saludo"> ${`Hola ${primerNombre}!!!!`} </h1> <h1 class="duration introduccion" id="introduccion">
ES HORA DE CELEBRAR TUS LOGROS VAMOS A DESCUBRIRLO
</h1> ${renderComponent($$result, "Flecha", $$Flecha, { "clase": "duration introduccion", "id": "1" })} <section> <img class="duration intro" src="images/LogoLabTecno.png" id="labTecno"> <img class="duration intro" src="images/Icono-arbu.png" id="icono"> <p class="duration intro">Arbu</p> <a href="#" class="duration intro" id="click">Click</a> </section>   </div> </div> </div>  </html>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/inicio/Inicio.astro", void 0);

const $$Astro$c = createAstro();
const $$Riegos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Riegos;
  const { cantRiegos } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="pag-riegos"> <div class="container"> <img src="../public/images/Hojas.png" id="hojas-1"> <img src="../public/images/Hojas.png" id="hojas-2"> <h2 class="duration riegos" id="riegos">Lograste regar</h2> <h2 class="duration riegos" id="frase">Cada gota cuenta</h2> <div class="duration riegos"> ${renderComponent($$result, "Flecha", $$Flecha, { "clase": "duration riegos", "id": "2" })} </div> <h3 id="water">${`${cantRiegos} Veces`}</h3> <div id="container"> <div id="drop"></div> </div>   </div> </div>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/riegos/riegos.astro", void 0);

const $$Astro$b = createAstro();
const $$Monitoreos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Monitoreos;
  const { cantMonitoreos } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="pag-monitoreos"> <div class="container"> <h1 class="duration monitoreos" id="frase-monitoreos">
¡Vamos a echarle un vistazo a esos monitoreos!
</h1> <img class="duration monitoreos" id="arbol" src="../public/images/arbol.png"> <h1 class="duration monitoreos-2" id="cant-monitoreo"> ${`LLegaste a realizar hasta ${cantMonitoreos} monitoreos`} </h1> <img class="duration monitoreos-2" id="bosque" src="../public/images/Bosque.jpg"> ${renderComponent($$result, "Flecha", $$Flecha, { "id": "3", "clase": "duration monitoreos-2" })}   </div> </div>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/monitoreos/monitoreos.astro", void 0);

const $$Arbol = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="pag-arboles"> <div class="container"> ${renderComponent($$result, "Flecha", $$Flecha, { "id": "4", "clase": "duration arbolintro" })} <h1 id="intro-arboles">
Ahora compartiremos las plantaciones que has realizado
</h1> <img id="borde-izquierdo" src="../public/images/noche-icono-arbu.png"> <img id="borde-derecho" src="../public/images/noche-icono-arbu.png"> <img id="arbusto" src="../public/images/arbusto.png"> <img id="arbusto-2" src="../public/images/arbusto2.png"> </div>   </div>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/arboles-plantados/arbol.astro", void 0);

const $$Astro$a = createAstro();
const $$CantArboles = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$CantArboles;
  const { cantArboles } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="pag-cantarboles"> <div class="container"> <div class="circulo"></div> <div class="circulo-2"></div> ${renderComponent($$result, "Flecha", $$Flecha, { "id": "5", "clase": "duration arbolrgs" })} <img id="img-arbol" src="../public/images/ArbolFinal.png"> <h2 id="cantidad-arboles"> ${`Contribuiste plantando un total de ${cantArboles} \xE1rboles`} </h2> <h2 id="cantidadarboles-frase">
Es un excelente aporte para nuestro medio ambiente
</h2>   </div> </div>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/arboles-plantados/cant_arboles.astro", void 0);

const $$Astro$9 = createAstro();
const $$ArbolesDestacados = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ArbolesDestacados;
  const { name, image, tipo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="conteiner-3"> <h2 class="nombre-arbol">${`${name}`}</h2> <h2 class="arbol-act"> ${name ? `Arbol con mayor ${tipo}` : "No se prest\xF3 atenci\xF3n a ning\xFAn \xE1rbol"} </h2> </div> <img${addAttribute(`${image}`, "src")} id="cuadro">`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/arboles_destacados/arboles_destacados.astro", void 0);

const $$Astro$8 = createAstro();
const $$ArbolRiegos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ArbolRiegos;
  const { name, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="pagArboles-riegos"> <div class="container"> <h1 class="duration Arbolriegos"> ${name ? " Parece que uno de tus \xE1rboles ha recibido especial atenci\xF3n" : "Cuidar los \xE1rboles es esencial para su crecimiento y vital para el equilibrio ambiental"} </h1> <img id="borde-izqabajo" src="../public/images/noche-icono-arbu.png"> <img id="borde-derecho" src="../public/images/noche-icono-arbu.png"> <div class="duration Arbolriegos-2"> ${renderComponent($$result, "ArbolesDestacados", $$ArbolesDestacados, { "name": name ? name : "", "image": image ? image : "../public/images/arbol_seco.jpg", "tipo": name ? "riegos" : "riegos" })} </div> </div>   </div>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/arbol-riegos/arbol_riegos.astro", void 0);

const $$Astro$7 = createAstro();
const $$ArbolMonitoreos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ArbolMonitoreos;
  const { name, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="pagArboles-monitoreos"> <div class="container"> <img id="borde-izqabajo" src="../public/images/noche-icono-arbu.png"> <img id="borde-derecho" src="../public/images/noche-icono-arbu.png"> <div class="duration Arbolmonitoreo"> ${renderComponent($$result, "ArbolesDestacados", $$ArbolesDestacados, { "name": name ? name : "", "image": image ? image : "../public/images/arbol_seco.jpg", "tipo": name ? "Monitoreos" : "Monitoreos" })} </div> ${renderComponent($$result, "Flecha", $$Flecha, { "id": "6", "clase": "duration Arbolmonitoreo" })} </div>   </div>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/arbol-monitoreos/arbol_monitoreos.astro", void 0);

const $$Astro$6 = createAstro();
const $$ArbolCrecimiento = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ArbolCrecimiento;
  const { name, image, crecimiento } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="pagArboles-crecimiento"> <div class="container"> <h1 class="duration crecimiento"> ${name ? "Uno de tus \xE1rboles ha tenido un crecimiento extraordinario" : "No adoptaste \xE1rboles lo cual es esencial para su cuidado"} </h1> <img id="borde-izqabajo" src="../public/images/noche-icono-arbu.png"> <img id="borde-derecho" src="../public/images/noche-icono-arbu.png"> <div class="duration crecimiento-2"> ${renderComponent($$result, "ArbolesDestacados", $$ArbolesDestacados, { "name": name ? name : "", "image": image ? image : "../public/images/arbol_seco.jpg", "tipo": name ? `crecimiento de ${crecimiento} centimetros` : "" })} </div> <h1 class="duration crecimiento-3"> ${name ? " Estos \xE1rboles fueron cuidados con gran esmero y atenci\xF3n" : "Adoptar \xE1rboles es clave para incrementar su presencia en todo el mundo."} </h1> ${renderComponent($$result, "Flecha", $$Flecha, { "id": "7", "clase": "duration crecimiento-3" })} </div>   </div>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/arbol-crecimiento/arbol_crecimiento.astro", void 0);

const $$Astro$5 = createAstro();
const $$Usuarios = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Usuarios;
  const { nombreUsuario, imageProfile } = Astro2.props;
  return renderTemplate`<html> ${maybeRenderHead()}<body> <h1 class="duration usuario" id="frase-usuarios">
También hubo personas que te acompañaron con la adopción de árboles
</h1> <img id="borde-derchmedio" src="../public/images/borde.png"> <img id="borde-izqmedio" src="../public/images/borde.png"> <section class="duration usuario-2"> <div class="card"> <div class="content"> <div class="imgBx"> <img${addAttribute(`${imageProfile}`, "src")}> </div> <div class="contentBx"> <h3>${`${nombreUsuario}`}</h3> </div> </div> </div> </section>   </body></html>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/usuarios/usuarios.astro", void 0);

const $$Score = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="pag-score"> <div class="container"> ${renderComponent($$result, "Flecha", $$Flecha, { "id": "9", "clase": "duration score" })} <!-- <img  id="borde-derecho" src="../public/images/noche-icono-arbu.png"  > --> <img id="borde-derecarriba" src="../public/images/borde.png"> <img id="borde-izqrotate" src="../public/images/borde.png"> <div class="ternary-system"> <div class="sun primary"></div> <div class="sun secondary"></div> <div class="sun ternary"></div> </div> <div class="sand"> <div class="pendulums"> <div class="pendulum"> <div class="bar"></div> <div class="motion"> <div class="string"></div> <div class="weight"></div> </div> </div> <div class="pendulum shadow"> <div class="bar"></div> <div class="motion"> <div class="string"></div> <div class="weight"></div> </div> </div> </div> </div> <div class="pyramid"></div> <div class="postion-puntos"> <h2 id="puntos">¡Hora de explorar tus puntos del año!</h2> </div> </div>   </div>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/score/score.astro", void 0);

const $$Scoremes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="pg-scoremes"> <div class="container"> ${renderComponent($$result, "Flecha", $$Flecha, { "id": "10", "clase": "duration scoremes-2" })} <img id="bordeizq-arribia" src="../public/images/borde.png"> <img id="borde-izqabajo" src="../public/images/noche-icono-arbu.png"> <img id="planta" src="../public/images/planta.png"> <h2 class="duration score-mes" id="text">!FEBRERO!</h2> <h3 class="duration score-mes">
Se destacó como el mes con la mayor cantidad de puntos acumulados
</h3> <h2 class="duration scoremes-2">
¡Es momento de descubrir en qué posición te encuentras en el top!
</h2> </div>   </div>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/score_mes/scoremes.astro", void 0);

const $$Astro$4 = createAstro();
const $$Top = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Top;
  const { top } = Astro2.props;
  return renderTemplate`<html> ${maybeRenderHead()}<div id="pag-top"> <div class="container"> ${renderComponent($$result, "Flecha", $$Flecha, { "id": "11", "clase": "duration top-3" })} <img id="borde-izquierdo" src="../public/images/noche-icono-arbu.png"> <img id="borde-derecho" src="../public/images/noche-icono-arbu.png"> <div class="planet"> <div class="top-text"> <h2 class="duration top">TOP</h2> <h2 class="duration top">${`${top}`}</h2> <h2 class="duration top-2" style="font-size: 3em;">
¡Excelente trabajo!
</h2> <h2 class="duration top-3" style="font-size: 2em;">
Sigue cuidando árboles y estarás en la cima
</h2> </div> <svg class="rotating-fog" x="0px" y="0px" viewBox="0 0 295 268.5" style="enable-background:new 0 0 295 268.5;" xml:space="preserve"> <path class="st0" d="M295,160.5c0-19.2-10.4-36-26-45c-3.1-15.9-13.5-29.3-27.6-36.4c1-4,1.5-8.2,1.5-12.6c0-28.7-23.3-52-52-52
            c-5.7,0-11.3,0.9-16.4,2.6C165.1,6.6,151.3,0,136,0c-19,0-35.7,10.2-44.8,25.5c-9-7.5-20.6-12-33.2-12c-28.7,0-52,23.3-52,52
            c0,10.1,2.9,19.6,7.9,27.6C5.3,102.4,0,114.8,0,128.5c0,13.9,5.4,26.5,14.3,35.8C9,172.4,6,182.1,6,192.5c0,28.7,23.3,52,52,52
            c2.1,0,4.2-0.1,6.2-0.4c8.4,5.9,18.7,9.4,29.8,9.4c3.9,0,7.6-0.4,11.3-1.2c9.5,10,22.9,16.2,37.7,16.2c13.7,0,26.1-5.3,35.4-13.9
          c8.6,6.2,19.2,9.9,30.6,9.9c28.7,0,52-23.3,52-52c0-1.1,0-2.1-0.1-3.2C280.8,202,295,182.9,295,160.5z"></path> </svg> <div class="path-wrapper"> <svg class="grass-1" x="0px" y="0px" viewBox="0 0 57.8 29" style="enable-background:new 0 0 57.8 29;" xml:space="preserve"> <path d="M57.8,0c0,0-25,10.5-25,29H21C21,10.5,0,5,0,5c16.8,0,21.7,6.4,26.9,14.1C32.2,11.4,41,0,57.8,0z"></path> </svg> <svg class="grass-2" x="0px" y="0px" viewBox="0 0 57.8 29" style="enable-background:new 0 0 57.8 29;" xml:space="preserve"> <path d="M57.8,0c0,0-25,10.5-25,29H21C21,10.5,0,5,0,5c16.8,0,21.7,6.4,26.9,14.1C32.2,11.4,41,0,57.8,0z"></path> </svg> <svg class="grass-3" x="0px" y="0px" viewBox="0 0 57.8 29" style="enable-background:new 0 0 57.8 29;" xml:space="preserve"> <path d="M57.8,0c0,0-25,10.5-25,29H21C21,10.5,0,5,0,5c16.8,0,21.7,6.4,26.9,14.1C32.2,11.4,41,0,57.8,0z"></path> </svg> <svg class="tree-01" x="0px" y="0px" viewBox="0 0 266.7 346.7" style="enable-background:new 0 0 266.7 346.7;" xml:space="preserve"> <path d="M238.7,346.7l-17.3-77.3c9.3,11.3,45.3,20,45.3,20C240,272,204,206,204,206c8,5.3,31.3,6,31.3,6
c-27.3-14-56.7-79.3-56.7-79.3c6.7,4.7,20,2.7,20,2.7c-24-12.7-47.3-72.7-47.3-72.7c11.3,8,20.7,6.7,20.7,6.7
C148.7,51.3,133.3,0,133.3,0c0,0-15.3,51.3-38.7,69.3c0,0,9.3,1.3,20.7-6.7c0,0-23.3,60-47.3,72.7c0,0,13.3,2,20-2.7
c0,0-29.3,65.3-56.7,79.3c0,0,23.3-0.7,31.3-6c0,0-36,66-62.7,83.3c0,0,36-8.7,45.3-20L28,346.7H238.7z"></path> </svg> <svg class="tree-02" x="0px" y="0px" viewBox="0 0 266.7 346.7" style="enable-background:new 0 0 266.7 346.7;" xml:space="preserve"> <path d="M238.7,346.7l-17.3-77.3c9.3,11.3,45.3,20,45.3,20C240,272,204,206,204,206c8,5.3,31.3,6,31.3,6
        c-27.3-14-56.7-79.3-56.7-79.3c6.7,4.7,20,2.7,20,2.7c-24-12.7-47.3-72.7-47.3-72.7c11.3,8,20.7,6.7,20.7,6.7
        C148.7,51.3,133.3,0,133.3,0c0,0-15.3,51.3-38.7,69.3c0,0,9.3,1.3,20.7-6.7c0,0-23.3,60-47.3,72.7c0,0,13.3,2,20-2.7
        c0,0-29.3,65.3-56.7,79.3c0,0,23.3-0.7,31.3-6c0,0-36,66-62.7,83.3c0,0,36-8.7,45.3-20L28,346.7H238.7z"></path> </svg> <svg class="tree-03" x="0px" y="0px" viewBox="0 0 266.7 346.7" style="enable-background:new 0 0 266.7 346.7;" xml:space="preserve"> <path d="M238.7,346.7l-17.3-77.3c9.3,11.3,45.3,20,45.3,20C240,272,204,206,204,206c8,5.3,31.3,6,31.3,6
    c-27.3-14-56.7-79.3-56.7-79.3c6.7,4.7,20,2.7,20,2.7c-24-12.7-47.3-72.7-47.3-72.7c11.3,8,20.7,6.7,20.7,6.7
    C148.7,51.3,133.3,0,133.3,0c0,0-15.3,51.3-38.7,69.3c0,0,9.3,1.3,20.7-6.7c0,0-23.3,60-47.3,72.7c0,0,13.3,2,20-2.7
    c0,0-29.3,65.3-56.7,79.3c0,0,23.3-0.7,31.3-6c0,0-36,66-62.7,83.3c0,0,36-8.7,45.3-20L28,346.7H238.7z"></path> </svg> <svg class="tree-04" x="0px" y="0px" viewBox="0 0 266.7 346.7" style="enable-background:new 0 0 266.7 346.7;" xml:space="preserve"> <path d="M238.7,346.7l-17.3-77.3c9.3,11.3,45.3,20,45.3,20C240,272,204,206,204,206c8,5.3,31.3,6,31.3,6
            c-27.3-14-56.7-79.3-56.7-79.3c6.7,4.7,20,2.7,20,2.7c-24-12.7-47.3-72.7-47.3-72.7c11.3,8,20.7,6.7,20.7,6.7
C148.7,51.3,133.3,0,133.3,0c0,0-15.3,51.3-38.7,69.3c0,0,9.3,1.3,20.7-6.7c0,0-23.3,60-47.3,72.7c0,0,13.3,2,20-2.7
c0,0-29.3,65.3-56.7,79.3c0,0,23.3-0.7,31.3-6c0,0-36,66-62.7,83.3c0,0,36-8.7,45.3-20L28,346.7H238.7z"></path> </svg> <svg class="tree-05" x="0px" y="0px" viewBox="0 0 266.7 346.7" style="enable-background:new 0 0 266.7 346.7;" xml:space="preserve"> <path d="M238.7,346.7l-17.3-77.3c9.3,11.3,45.3,20,45.3,20C240,272,204,206,204,206c8,5.3,31.3,6,31.3,6
c-27.3-14-56.7-79.3-56.7-79.3c6.7,4.7,20,2.7,20,2.7c-24-12.7-47.3-72.7-47.3-72.7c11.3,8,20.7,6.7,20.7,6.7
C148.7,51.3,133.3,0,133.3,0c0,0-15.3,51.3-38.7,69.3c0,0,9.3,1.3,20.7-6.7c0,0-23.3,60-47.3,72.7c0,0,13.3,2,20-2.7
c0,0-29.3,65.3-56.7,79.3c0,0,23.3-0.7,31.3-6c0,0-36,66-62.7,83.3c0,0,36-8.7,45.3-20L28,346.7H238.7z"></path> </svg> <svg class="mountain-1" x="0px" y="0px" viewBox="0 0 184 184" style="enable-background:new 0 0 184 184;" xml:space="preserve"> <path d="M169.9,184H14.1C6.4,184,0,177.6,0,169.9V14.1C0,6.4,6.4,0,14.1,0h155.7c7.8,0,14.1,6.4,14.1,14.1v155.7
        C184,177.6,177.6,184,169.9,184z"></path> </svg> <svg class="mountain-2" x="0px" y="0px" viewBox="0 0 184 184" style="enable-background:new 0 0 184 184;" xml:space="preserve"> <path d="M169.9,184H14.1C6.4,184,0,177.6,0,169.9V14.1C0,6.4,6.4,0,14.1,0h155.7c7.8,0,14.1,6.4,14.1,14.1v155.7
            C184,177.6,177.6,184,169.9,184z"></path> </svg> <svg class="mountain-4" x="0px" y="0px" viewBox="0 0 184 184" style="enable-background:new 0 0 184 184;" xml:space="preserve"> <path d="M169.9,184H14.1C6.4,184,0,177.6,0,169.9V14.1C0,6.4,6.4,0,14.1,0h155.7c7.8,0,14.1,6.4,14.1,14.1v155.7
          C184,177.6,177.6,184,169.9,184z"></path> </svg> <svg class="mountain-5" x="0px" y="0px" viewBox="0 0 184 184" style="enable-background:new 0 0 184 184;" xml:space="preserve"> <path d="M169.9,184H14.1C6.4,184,0,177.6,0,169.9V14.1C0,6.4,6.4,0,14.1,0h155.7c7.8,0,14.1,6.4,14.1,14.1v155.7
        C184,177.6,177.6,184,169.9,184z"></path> </svg> <svg class="rock-1" x="0px" y="0px" viewBox="0 0 221 126" style="enable-background:new 0 0 221 126;" xml:space="preserve"> <path d="M221.2,71.5c0-23.8-19.2-43-43-43c-10.1,0-19.4,3.5-26.8,9.3c-12.3-22.1-40-37.5-72.2-37.5c-43.6,0-79,28.2-79,63l-0.3,62.3
        h220.7L221.2,71.5z"></path> </svg> <svg class="rock-2" x="0px" y="0px" viewBox="0 0 221 126" style="enable-background:new 0 0 221 126;" xml:space="preserve"> <path d="M221.2,71.5c0-23.8-19.2-43-43-43c-10.1,0-19.4,3.5-26.8,9.3c-12.3-22.1-40-37.5-72.2-37.5c-43.6,0-79,28.2-79,63l-0.3,62.3
          h220.7L221.2,71.5z"></path> </svg> <div class="bike"> <div id="bm"> <div class="light"></div> <div class="umbrella-animation"></div> <div class="bike__marker"></div> </div> </div> <svg width="242.7" height="244.2" x="0px" y="0px" viewBox="0 0 242.7 244.2" style="enable-background:new 0 0 242.7 244.2;" xml:space="preserve"> <path class="outline" d="M3.3,120.6c0-20.4-4.5-39.8,3.6-57.2c11.9-25.6,30.5-29.8,54.9-43.7C81.6,8.3,94.5,1.9,119,1.9
        c20.6,0,43,7.6,60.5,15.7c20.6,9.6,38.3,14.3,51.7,32.3c16.7,22.6,6.6,40.5,6.6,70.7c0,18.7,3.2,35.6-3.7,51.8
        c-9.6,22.7-12.2,23.2-31.8,37.6c-22.5,16.5-48.3,32.3-78.3,32.3c-22,0-44.8-11.2-63.1-20.5C34.6,208.6,20.2,208,7.2,181.6
        C-1.7,163.5,3.3,142.2,3.3,120.6z"></path> </svg> <div class="cloud-boundary"> <div class="rain"> <div class="rain__drops-top"></div> <div class="rain__drops-bottom"></div> </div> <div class="cloud-boundary__marker"></div> <div class="cloud"> <svg class="cloud-svg" x="0px" y="0px" viewBox="0 0 609.5 310" style="enable-background:new 0 0 609.5 310;" xml:space="preserve"> <path d="M549.5,201c0,0-13-90-105-77c0,0-3-115-118-115c-94,0-116,84-116,84S87.7,68.4,81.1,203.2
                c0,0-62.9-20.8-71.6,45.8c-7,53.5,68,52,68,52l482-5c0,0,41-1.7,41-45.5C600.5,218,577.8,201,549.5,201z"></path> </svg> </div> </div> </div> </div>  </div> </div> </html>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/top/top.astro", void 0);

const $$Astro$3 = createAstro();
const $$Medalla = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Medalla;
  const { puntos, medalla } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="pag-medalla"> <div class="container"> ${renderComponent($$result, "Flecha", $$Flecha, { "id": "12", "clase": "duration medalla-2" })} <img id="borde-izquierdo" src="../public/images/noche-icono-arbu.png"> <img id="borde-derchabajo" src="../public/images/noche-icono-arbu.png"> <img id="medalla" class="duration medalla-2"${addAttribute(`../public/images/${medalla}.png`, "src")}> <h1 class="duration medalla">
¡Por último! veremos qué medalla has obtenido
</h1> <div class="medalla-text"> <h4 class="duration medalla-2">${`${medalla}`}</h4> <h5 class="duration medalla-2">Con un total de ${`${puntos}`} puntos</h5> </div> <h3></h3> </div>  </div>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/medalla/medalla.astro", void 0);

const $$Astro$2 = createAstro();
const $$Despedida = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Despedida;
  const { nombre, imageProfile } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="pag-despedida"> <div class="container"> <img id="borde-izquierdo" src="../public/images/noche-icono-arbu.png"> <img id="borde-derecho" src="../public/images/noche-icono-arbu.png"> <img id="borde-izqabajo" src="../public/images/noche-icono-arbu.png"> <img id="medalla-1" class="duration despedida-3" src="../public/images/Aprendíz.png"> <img id="medalla-2" class="duration despedida-3" src="../public/images/Ancestro.png"> <img id="medalla-3" class="duration despedida-3" src="../public/images/Leyenda.png"> <img id="medalla-4" class="duration despedida-3" src="../public/images/Protector.png"> <h1 class="duration despedida">
¿Fue emocionante descubrir lo que aportaste al medio ambiente?
</h1> <h1 class="duration despedida-2">
No te preocupes si tu aporte fue mínimo, cada contribución cuenta y suma
      un cambio más al medio ambiente
</h1> <img class="duration despedida-3"${addAttribute(`${imageProfile}`, "src")} id="imageProfile" alt=""> <h2 class="duration despedida-3" id="frase-despedida"> ${`\xA1Nos vemos el pr\xF3ximo a\xF1o ${nombre}!`} </h2> <div class="duration despedida-3" id="social-share"> <!-- <SocialShare
        buttons={BUTTONS}
        url="https://arbu.app"
        description="Description of the page/post"
        via="YourTwitterAccount"
        title="Page Title"
      /> --> <a id="whatsapp" href="https://api.whatsapp.com/send?text=Visita Nuestro nuevo modulo resumen anual:https://arbu.app" target="_blank"> <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg> </a> </div> </div>  </div>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/despedida/despedida.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="logo-container" data-astro-cid-5vvgwhfz> <img class="logo" src="../public/images/logo.png" data-astro-cid-5vvgwhfz> </div> `;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/components/logo/logo.astro", void 0);

const $$Astro$1 = createAstro();
const $$LogoLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LogoLayout;
  return renderTemplate`<html> <head><title>Mi Sitio Astro</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Logo", $$Logo, {})} </body></html>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/layouts/LogoLayout.astro", void 0);

const firebaseConfig = {
  apiKey: "AIzaSyCfhkBXyP1Nzh_wcOpY6UCIaE60Nx4wVZ4",
  authDomain: "arbu-c574d.firebaseapp.com",
  databaseURL: "https://arbu-c574d-default-rtdb.firebaseio.com",
  projectId: "arbu-c574d",
  storageBucket: "arbu-c574d.appspot.com",
  messagingSenderId: "657912194867",
  appId: "1:657912194867:web:3d10586dabdcff61998046",
  measurementId: "G-Z58NKJZP1B"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const loadUsuarios = async () => {
  const q = query(collection(db, 'usuarios_public'));

  const querySnapshot = await getDocs(q);
  const usuarios = querySnapshot.docs.map((doc) => doc.data());
  return usuarios;
  // return [];
};

const loadArboles = async () => {
  const q = query(collection(db, 'arbolesPlantados'));

  const querySnapshot = await getDocs(q);
  const arbolesPlantados = querySnapshot.docs.map((doc) => doc.data());
  return arbolesPlantados;
  // return [];
};

// import { arboles } from "../../../public/data/arbolesPlantados";
// import { usuarios } from "../../../public/data/usuario";
// import { obtenerFecha } from "./CantidadDatos";

await loadUsuarios();
const arboles = await loadArboles();

function arbolesAdoptados(id) {
  let arbolesAdoptadosinf = [];
  for (let index = 0; index < arboles.length; index++) {
    if (arboles[index].usuariosQueAdoptaron.includes(id)) {
      arbolesAdoptadosinf.push(arboles[index]);
    }
  }
  return arbolesAdoptadosinf;
}


//se filtra los arboles plantados por id
function arbolesPlantados(arbolesAdoptados,id) {
  let arbolesPlantadosinf = [];
  for (let index = 0; index < arbolesAdoptados.length; index++) {
    if (arbolesAdoptados[index].plantadoPor === id ) {  
      arbolesPlantadosinf.push(arboles[index]);
    }
  }
  return arbolesPlantadosinf;
}

function obtenerFecha(timestamp) {
  const milliseconds = timestamp.nanoseconds / 1000000;
  const date = new Date(timestamp.seconds * 1000 + milliseconds);
  // const ano = date.getFullYear();
  return date;
}

function arbolesPlantadoscant(arbolesAdoptados, year) {
  let fechamin;
  let primeraIteracion = true;
  let cantArboles = 0;
  for (let index = 0; index < arbolesAdoptados.length; index++) {
    let fechaObj;
    const monitoreo = arbolesAdoptados[index].monitoreos;
    for (let key in monitoreo) {
      fechaObj =obtenerFecha(monitoreo[key].timestamp);
      if (primeraIteracion || fechaObj < fechamin) {
        fechamin = fechaObj;
        primeraIteracion = false;
      }
    }
    if (fechamin.getFullYear() === year ) {
      cantArboles++;
    }
  }
  return cantArboles;
}

function obtenerRiegos(arbolesAdoptados, anoActual, id) {
  let cantRiegos = 0;
  arbolesAdoptados.forEach((arbol) => {
    const riegos = arbol.riegos;
    for (let key in riegos) {
      const timestamp = riegos[key].timestamp;
      const riegoRealizado = riegos[key].riegoRealizadoPor;
      const fecha = obtenerFecha(timestamp);
      // console.log(fecha)
      if (fecha.getFullYear() == anoActual && riegoRealizado == id) {
        cantRiegos++;
      }
    }
  });

  return cantRiegos;
}

function obtenerMonitoreos(arbolesAdoptados, anoActual, id) {
  let cantMonitoreos = 0;
  arbolesAdoptados.forEach((arbol) => {
    const monitoreos = arbol.monitoreos;
    for (let key in monitoreos) {
      const monitoreoRealizado = monitoreos[key].monitoreoRealizadoPor;
      const timestamp = monitoreos[key].timestamp;
      const fecha = obtenerFecha(timestamp);
      // console.log(fecha.getFullYear())
      // console.log(monitoreoRealizado)
      if (fecha.getFullYear() === anoActual && monitoreoRealizado === id) {
        cantMonitoreos++;
      }
    }
  });

  return cantMonitoreos;
}

function maxRiegos(arbolesAdoptados, anoActual) {
  let arbolriegos = {};
  let cantmaxima = 0;
  arbolesAdoptados.forEach((arbol) => {
    let cant = 0;
    const riegos = arbol.riegos;
    for (let key in riegos) {
      const timestamp = riegos[key].timestamp;

      const fecha = obtenerFecha(timestamp);
      if (fecha.getFullYear() === anoActual) {
        cant++;
      }
    }
    if (cant > cantmaxima) {
      cantmaxima = cant;
      arbolriegos = arbol;
    }
  });
  // return cantmaxima !== 0 ? arbol : [];
  return arbolriegos;
}

function maxMonitoreos(arbolesAdoptados, anoActual) {
  let arbolmonitoreos = {};
  let cantmaxima = 0;
  arbolesAdoptados.forEach((arbol) => {
    let cant = 0;
    const monitoreos = arbol.monitoreos;
    for (let key in monitoreos) {
      const timestamp = monitoreos[key].timestamp;
      const fecha = obtenerFecha(timestamp);
      if (fecha.getFullYear() === anoActual) {
        cant++;
      }
    }
    if (cant > cantmaxima) {
      cantmaxima = cant;
      arbolmonitoreos = arbol;
    }
  });
  // return cantmaxima !== 0 ? arbol : [];
  return arbolmonitoreos;
}

function maxcrecimiento(arbolesAdoptados, anoActual) {
  let arbolCrecimiento = [];
  let alturamaxima = 0;
  let arbolMaximo = "";
  let arbolfotografia = "";

  arbolesAdoptados.forEach((arbol) => {
    let alturamin = 0;
    const monitoreosfiltrados = filtrarMonitoreos(arbol.monitoreos, anoActual);
    const monitoreosArray = Object.values(monitoreosfiltrados);
    if (monitoreosArray.length > 1) {
      const primeraAltura = monitoreosArray[0].altura;
      const ultimaAltura = monitoreosArray[monitoreosArray.length - 1].altura;
      alturamin = ultimaAltura - primeraAltura;
      arbolfotografia = monitoreosArray[0].fotografia;
    } else if (monitoreosArray.length == 1) {
      alturamin = monitoreosArray[0].altura;
      arbolfotografia = monitoreosArray[0].fotografia;
    }

    if (alturamin > alturamaxima) {
      alturamaxima = alturamin;
      arbolMaximo = arbol.nombreComun;
    }
  });

  arbolCrecimiento.push({ alturamaxima, arbolMaximo, arbolfotografia });
  return arbolCrecimiento;
}

function filtrarMonitoreos(monitoreos, anoActual) {
  const monitoreosactual = {};
  for (const key in monitoreos) {
    const monitoreo = monitoreos[key];
    const timestamp = monitoreos[key].timestamp;

    const fecha = obtenerFecha(timestamp);
    if (fecha.getFullYear() === anoActual) {
      monitoreosactual[key] = monitoreo;
    }
  }

  return monitoreosactual;
}

function obtenerUsuarios(obtenerarbol) {
  const usuariosadoptaron = [];
  // console.log(obtenerarbol.length);
  if (obtenerarbol.length > 0) {
    obtenerarbol.forEach((arbol) => {
      arbol.usuariosQueAdoptaron.forEach((usuario) => {
        usuariosadoptaron.push(usuario);
      });
    });
    const usuariosUnicos = Array.from(new Set(usuariosadoptaron));
    return usuariosUnicos;
  } else {
    return usuariosadoptaron;
  }
}

function obtenerDetallesDeUsuarios(idsDeUsuarios, usuarios, id) {
  const usuarioss = [
    {
      nombre: "Ninguno",
      imageProfile: "default",
    },
  ];

  const resultado = idsDeUsuarios
    .map((id) => usuarios.find((usuario) => usuario.id === id))
    .filter((usuario) => usuario && usuario.id !== id);

  // console.log(resultado)
  return resultado.length > 0 ? resultado : usuarioss;
}

function obtenerdatosArbol(obtenerarbol) {
  const fechaantigua = "2000-01-1";
  let fechaObj = new Date(fechaantigua);
  let fotografia = "";
  let datosArbol = [];
  let nombrearbol = "";
  for (let key in obtenerarbol.monitoreos) {
    const fecha = obtenerFecha(obtenerarbol.monitoreos[key].timestamp);

    if (fecha > fechaObj) {
      fechaObj = fecha;
      fotografia = obtenerarbol.monitoreos[key].fotografia;
      nombrearbol = obtenerarbol.nombreComun;
    }
  }
  datosArbol.push({ fotografia, nombrearbol });
  return datosArbol;
}

const top100 =[
    {
        "top100": [
            {
                "id": "1rvhdCDq8WSE7wwcOIT2GgqhUV52",
                "puntos": 5,
                "timestamp": {
                    "_seconds": 1692109087,
                    "_nanoseconds": 371000000
                }
            },
            {
                "id": "5MAYhtw8msgntUJcB0nq6xEv1Ih1",
                "puntos": 5,
                "timestamp": {
                    "_seconds": 1665787020,
                    "_nanoseconds": 293000000
                }
            },
            {
                "id": "AjcaTL1CYGT4VQtyLqNlCFQr12M2",
                "puntos": 5,
                "timestamp": {
                    "_seconds": 1665061200,
                    "_nanoseconds": 672000000
                }
            },
            {
                "id": "D4SHdBbeAdVtOuFoVGYx2AnIeUt2",
                "puntos": 5,
                "timestamp": {
                    "_seconds": 1680264948,
                    "_nanoseconds": 344000000
                }
            },
            {
                "id": "DUybNuXqn9QGorFgLcbFJh04Iyl1",
                "puntos": 5,
                "timestamp": {
                    "_seconds": 1701122977,
                    "_nanoseconds": 457000000
                }
            },
            {
                "id": "DqfcioaSiiUayHiRdbrUHUZEAue2",
                "puntos": 5,
                "timestamp": {
                    "_seconds": 1685891101,
                    "_nanoseconds": 76000000
                }
            },
            {
                "id": "FH4ogJTz0MeSf4kLRzRD0RlFAYS2",
                "puntos": 5,
                "timestamp": {
                    "_seconds": 1681579838,
                    "_nanoseconds": 208000000
                }
            },
            {
                "id": "g0CNZDZf7MTLTwtra2DkMNNN7mJ3",
                "puntos": 5,
                "timestamp": {
                    "_seconds": 1681655503,
                    "_nanoseconds": 118000000
                }
            },
            {
                "id": "stdKBZvO33NcRwmcQvcijvyFgqw2",
                "puntos": 5,
                "timestamp": {
                    "_seconds": 1709908193,
                    "_nanoseconds": 816000000
                }
            },
            {
                "id": "xpTHddaPH8ctuqb7h9mGRRlfBnH2",
                "puntos": 5,
                "timestamp": {
                    "_seconds": 1677633905,
                    "_nanoseconds": 321000000
                }
            },
            {
                "id": "CETKQgRaIbPMACC1fnp4bJqQxsJ3",
                "puntos": 10,
                "timestamp": {
                    "_seconds": 1691075300,
                    "_nanoseconds": 554000000
                }
            },
            {
                "id": "AOij8uZfQlWSEhnnGRMMFUSsJFp2",
                "puntos": 25,
                "timestamp": {
                    "_seconds": 1699650649,
                    "_nanoseconds": 11000000
                }
            },
            {
                "id": "oKU7MyKsikez6hWvVEGSuZ0YQHL2",
                "puntos": 25,
                "timestamp": {
                    "_seconds": 1679105973,
                    "_nanoseconds": 374000000
                }
            },
            {
                "id": "0oTWCgUe7zPZ8VyH0V2i4CdXv2r2",
                "puntos": 30,
                "timestamp": {
                    "_seconds": 1683066279,
                    "_nanoseconds": 371000000
                }
            },
            {
                "id": "8j4K95iIgVMq91aBdqPa53G03162",
                "puntos": 30,
                "timestamp": {
                    "_seconds": 1702991092,
                    "_nanoseconds": 19000000
                }
            },
            {
                "id": "HMsBmNjwX2WR0qizJviZsUU86xE3",
                "puntos": 30,
                "timestamp": {
                    "_seconds": 1691017541,
                    "_nanoseconds": 58000000
                }
            },
            {
                "id": "VYyhTCJVxlbY3FllX9YbVu2sr4l2",
                "puntos": 30,
                "timestamp": {
                    "_seconds": 1686084285,
                    "_nanoseconds": 992000000
                }
            },
            {
                "id": "VgFtWaJTpfVR1Bh7VtO5Cga23MC2",
                "puntos": 30,
                "timestamp": {
                    "_seconds": 1703667108,
                    "_nanoseconds": 980000000
                }
            },
            {
                "id": "ZjJAH72v0xV3BuzydZVu22soVI53",
                "puntos": 30,
                "timestamp": {
                    "_seconds": 1684599127,
                    "_nanoseconds": 791000000
                }
            },
            {
                "id": "lqwJ29F1RoORyAYQFVQNLRlKvlZ2",
                "puntos": 30,
                "timestamp": {
                    "_seconds": 1705853095,
                    "_nanoseconds": 561000000
                }
            },
            {
                "id": "oo7wWtuw60ZP0jRlSQmkFbfEgOi1",
                "puntos": 30,
                "timestamp": {
                    "_seconds": 1673883870,
                    "_nanoseconds": 284000000
                }
            },
            {
                "id": "rQVsoh73NtdrShyzOZAr5X1nOkw1",
                "puntos": 30,
                "timestamp": {
                    "_seconds": 1691800718,
                    "_nanoseconds": 334000000
                }
            },
            {
                "id": "ovPTbfjq5kgkiNuC0eidSh3GKf23",
                "puntos": 35,
                "timestamp": {
                    "_seconds": 1708172353,
                    "_nanoseconds": 283000000
                }
            },
            {
                "id": "0vdVaTbhUmaLGNU3FEFNWemeLJ02",
                "puntos": 45,
                "timestamp": {
                    "_seconds": 1665929816,
                    "_nanoseconds": 281000000
                }
            },
            {
                "id": "7hK9EdLjR0UdiARcRHUZ211Alti2",
                "puntos": 50,
                "timestamp": {
                    "_seconds": 1665919274,
                    "_nanoseconds": 978000000
                }
            },
            {
                "id": "8hNEtqZ3CkRsGA2fkGGsb7KQG043",
                "puntos": 50,
                "timestamp": {
                    "_seconds": 1699651872,
                    "_nanoseconds": 813000000
                }
            },
            {
                "id": "GLNL94pINdXQLUKNW1ZGv3v9aDV2",
                "puntos": 50,
                "timestamp": {
                    "_seconds": 1671686271,
                    "_nanoseconds": 861000000
                }
            },
            {
                "id": "PMUjg36q4sZ6XL9ZS3wuOaaUxQU2",
                "puntos": 50,
                "timestamp": {
                    "_seconds": 1661342400,
                    "_nanoseconds": 578000000
                }
            },
            {
                "id": "RCUcem9kzJaWBrhgtgBDO3lqVd22",
                "puntos": 50,
                "timestamp": {
                    "_seconds": 1659355200,
                    "_nanoseconds": 154000000
                }
            },
            {
                "id": "SBPA1tGHciT6wO8MXtrjxMz3Dhn2",
                "puntos": 50,
                "timestamp": {
                    "_seconds": 1660481023,
                    "_nanoseconds": 81000000
                }
            },
            {
                "id": "XWtjzRpHYphQ64vLrjSyFq9OLYJ3",
                "puntos": 50,
                "timestamp": {
                    "_seconds": 1663246416,
                    "_nanoseconds": 627000000
                }
            },
            {
                "id": "vnyk1CeKRBf8B2TKp4nJHmRr2Ln1",
                "puntos": 50,
                "timestamp": {
                    "_seconds": 1659528000,
                    "_nanoseconds": 130000000
                }
            },
            {
                "id": "O21wwlGIOXfsgKf2odEzV4UFrav1",
                "puntos": 60,
                "timestamp": {
                    "_seconds": 1699218811,
                    "_nanoseconds": 121000000
                }
            },
            {
                "id": "k2FBSlvqJcQtz2rbuEYTFojiozv1",
                "puntos": 80,
                "timestamp": {
                    "_seconds": 1704130870,
                    "_nanoseconds": 333000000
                }
            },
            {
                "id": "HBCj8uQ5CphtYhicX3OiPDHHW0D3",
                "puntos": 85,
                "timestamp": {
                    "_seconds": 1667354415,
                    "_nanoseconds": 753000000
                }
            },
            {
                "id": "lkfamRsUrgbfqqaLucYJmY4tcSu1",
                "puntos": 90,
                "timestamp": {
                    "_seconds": 1700511743,
                    "_nanoseconds": 884000000
                }
            },
            {
                "id": "uxck2XMF4WXMnF2UdD8QgPl9ObC2",
                "puntos": 120,
                "timestamp": {
                    "_seconds": 1676575048,
                    "_nanoseconds": 171000000
                }
            },
            {
                "id": "JAe470YaRHM3InWzNbczeznRPZ73",
                "puntos": 130,
                "timestamp": {
                    "_seconds": 1693173509,
                    "_nanoseconds": 185000000
                }
            },
            {
                "id": "di4PURWDSbOk8pi0DgKCE7oGCIb2",
                "puntos": 150,
                "timestamp": {
                    "_seconds": 1696694633,
                    "_nanoseconds": 882000000
                }
            },
            {
                "id": "tINcAFkRvxY5vVzujBg3XnYFCMu2",
                "puntos": 150,
                "timestamp": {
                    "_seconds": 1659790800,
                    "_nanoseconds": 65000000
                }
            },
            {
                "id": "uMLRT4xG0lObDfLBqrOi1BALnpu1",
                "puntos": 150,
                "timestamp": {
                    "_seconds": 1659873600,
                    "_nanoseconds": 946000000
                }
            },
            {
                "id": "R21vn7hbTTQWIml3PMXCAV2RTeP2",
                "puntos": 170,
                "timestamp": {
                    "_seconds": 1681927883,
                    "_nanoseconds": 975000000
                }
            },
            {
                "id": "LbKSpPtoKCMVh35rKb9yeq1iN5r1",
                "puntos": 270,
                "timestamp": {
                    "_seconds": 1695618376,
                    "_nanoseconds": 0
                }
            },
            {
                "id": "E0LmGVKQobXJwrfcV8tTsknjR112",
                "puntos": 280,
                "timestamp": {
                    "_seconds": 1682374827,
                    "_nanoseconds": 669000000
                }
            },
            {
                "id": "f51kQM55GRfQFm7Z8JimVsj5uej2",
                "puntos": 300,
                "timestamp": {
                    "_seconds": 1663258531,
                    "_nanoseconds": 612000000
                }
            },
            {
                "id": "ekt4jBaCjeVHYWa9iyXw3STbzgV2",
                "puntos": 310,
                "timestamp": {
                    "_seconds": 1674505550,
                    "_nanoseconds": 20000000
                }
            },
            {
                "id": "Q6cZEank8XWleoySFxAu7rbdc2d2",
                "puntos": 450,
                "timestamp": {
                    "_seconds": 1673101840,
                    "_nanoseconds": 528000000
                }
            },
            {
                "id": "tC8FP9uO35WzfOowzPfS5qkqDIo1",
                "puntos": 570,
                "timestamp": {
                    "_seconds": 1672931316,
                    "_nanoseconds": 355000000
                }
            },
            {
                "id": "5zTuZDjUY1cHlKFyKbyJiebMNWB3",
                "puntos": 840,
                "timestamp": {
                    "_seconds": 1707251597,
                    "_nanoseconds": 725000000
                }
            },
            {
                "id": "YT9hDEzxa2fPGa7ZphDPfnvQePx2",
                "puntos": 1260,
                "timestamp": {
                    "_seconds": 1673120340,
                    "_nanoseconds": 532000000
                }
            },
            {
                "id": "j2gsLaSgx3P7dGBz0kGnwucfxSk2",
                "puntos": 1940,
                "timestamp": {
                    "_seconds": 1707248625,
                    "_nanoseconds": 865000000
                }
            },
            {
                "id": "NpCeSpAtKZfA2lj7JFAygEyOqJ23",
                "puntos": 2250,
                "timestamp": {
                    "_seconds": 1684077972,
                    "_nanoseconds": 82000000
                }
            },
            {
                "id": "BsAtpsd1rZf1HEAnJYHa7PkyuAR2",
                "puntos": 2255,
                "timestamp": {
                    "_seconds": 1688409837,
                    "_nanoseconds": 47000000
                }
            },
            {
                "id": "PxWOPZT7TcRSamzqq3rnBrCoWFc2",
                "puntos": 2670,
                "timestamp": {
                    "_seconds": 1707252557,
                    "_nanoseconds": 903000000
                }
            },
            {
                "id": "NCAdQVR19hR4PCVqlFIREi5AJMu1",
                "puntos": 2800,
                "timestamp": {
                    "_seconds": 1707935532,
                    "_nanoseconds": 382000000
                }
            },
            {
                "id": "Cx6d1UF83gY6K0FNFy1pWgQ9ip12",
                "puntos": 2970,
                "timestamp": {
                    "_seconds": 1675365427,
                    "_nanoseconds": 613000000
                }
            },
            {
                "id": "VgxWtqa6FLeiSxZwSkq9oVEsHK23",
                "puntos": 4710,
                "timestamp": {
                    "_seconds": 1679602253,
                    "_nanoseconds": 347000000
                }
            },
            {
                "id": "xN7IZ85Sr1ROKQNk8MUvKy3hSzr1",
                "puntos": 5500,
                "timestamp": {
                    "_seconds": 1673120878,
                    "_nanoseconds": 365000000
                }
            },
            {
                "id": "ukTNOdbK3UgwTkzY2GJNoo624BU2",
                "puntos": 8765,
                "timestamp": {
                    "_seconds": 1683838171,
                    "_nanoseconds": 691000000
                }
            }
        ]
    }
];

// // import { top100 } from "../../../public/data/ranking2024Abril18";
// import { mes_1 } from "../../../public/data/Mensual_1_2023";
// import { loadScoreGlobal } from "../../services/loadScoreGlobal";


// const top100 = await loadScoreGlobal();
// const scoreMes = await loadScoreMes();


function calculartop(id) {
  const listaTop = top100[0].top100;
  // console.log(listaTop)
  const reversedList = listaTop.slice().reverse();
  listaTop.find((user) => user.id === id);
  for (let index = 0; index < reversedList.length; index++) {
    if (reversedList[index].id === id) {
      return index + 1;
    }
  }
  return 0;
}

function obtenerPuntosTotal(id) {
  const listaTop = top100[0].top100;
  listaTop.find((user) => user.id === id);
  for (let index = 0; index < listaTop.length; index++) {
    if (listaTop[index].id === id) {
      const puntos =listaTop[index].puntos;
      return puntos;
    }
  }
  return 0;
}

function determinarMedalla(puntos) {
  if (puntos < 2401) {
    return 'Aprendíz';
  } else if (puntos < 5001) {
    return 'Protector';
  } else if (puntos < 7401) {
    return 'Leyenda';
  } else {
    return 'Ancestro';
  }
}

// export function calculartop_mes(id) {
//   const listaOrdenada = ordenar(mes_1);
//   for (let index = 0; index < listaOrdenada.length; index++) {
//     if (listaOrdenada[index].id === id) {
//       return index;
//       break;
//     }
//   }
//   return 0;
// }

// export function ordenar(array) {
//   array.sort(function (itema, itemb) {
//     if (itema.puntos > itemb.puntos) {
//       return 1;
//     }
//     if (itema.puntos < itemb.puntos) {
//       return -1;
//     }
//     // a must be equal to b
//     return 0;
//   });
// }

// // const fs = require('fs');
// // const path = require('path');
// import { defineConfig } from "astro/config";
// import fs from "fs";
// import path from "path";

// import { existsSync } from "fs";
// import { resolve } from "path";
// // const fs = require('fs');
// // const path = require('path');

// // const fs = require('fs');
// // const path = require('path');  Mensual_1_2023

// export function cargarDatosMensualesPorAño(año) {
//   const directorio = "../../../public/data";
//   let datosMensuales = {};
//   const resultado = [];

//   // Itera sobre cada mes del año especificado
//   for (let mes = 1; mes <= 12; mes++) {
//     // const rutaArchivo = `${directorio}/Mensual_${mes}_${año}.js`;
//     // //import { mes_1 } from "../../../public/data/Mensual_1_2023";
//     // console.log(rutaArchivo);
//     const rutaArchivo = resolve(`${directorio}/Mensual_${mes}_${año}.js`);
//     const existe = existsSync(rutaArchivo);
//     resultado.push({ mes, rutaArchivo, existe });
//   }

//   return {
//     body: JSON.stringify(resultado),
//   };
// }

// // Uso de la función
// // console.log(cargarDatosMensualesPorAño(2023)); // Para obtener datos de todos los meses del año 2023
// // Para obtener datos de todos los meses del año 2022

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const usuarios = await loadUsuarios();
  let year = 2022;
  const { id } = Astro2.params;
  const usuario = usuarios.find((usuarios2) => usuarios2.id === id);
  const arbolesAdoptado = arbolesAdoptados(id);
  const arbolesPlantado = arbolesPlantados(arbolesAdoptado, id);
  const cantRiegos = obtenerRiegos(arbolesAdoptado, year, id);
  const cantMonitoreos = obtenerMonitoreos(arbolesAdoptado, year, id);
  const totalArboles = arbolesPlantadoscant(arbolesPlantado, year);
  const arbolriego = maxRiegos(arbolesAdoptado, year);
  const datosarbolriego = obtenerdatosArbol(arbolriego);
  const arbolmonitoreo = maxMonitoreos(arbolesAdoptado, year);
  const datosarbolmonitoreo = obtenerdatosArbol(arbolmonitoreo);
  maxcrecimiento(arbolesAdoptado, year);
  const datosarbolcrecimiento = obtenerdatosArbol(arbolmonitoreo);
  const usuariosQueadoptaron = obtenerUsuarios(arbolesAdoptado);
  const detallesDeUsuarios = obtenerDetallesDeUsuarios(
    usuariosQueadoptaron,
    usuarios,
    id
  );
  const topactual = calculartop(id);
  const puntos = obtenerPuntosTotal(id);
  const medalla = determinarMedalla(puntos);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resumen Anual." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LogoLayout", $$LogoLayout, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result3, "Inicio", $$Inicio, { "nombre": usuario ? usuario.nombre : "\xBFC\xF3mo est\xE1s hoy?" })} ${renderComponent($$result3, "Riegos", $$Riegos, { "cantRiegos": cantRiegos })} ${renderComponent($$result3, "Monitoreos", $$Monitoreos, { "cantMonitoreos": cantMonitoreos })} ${renderComponent($$result3, "Arboles", $$Arbol, {})} ${renderComponent($$result3, "CantArboles", $$CantArboles, { "cantArboles": totalArboles })} ${renderComponent($$result3, "ArbolRiegos", $$ArbolRiegos, { "name": datosarbolriego[0].nombrearbol, "image": datosarbolriego[0].fotografia })} ${renderComponent($$result3, "ArbolMonitoreos", $$ArbolMonitoreos, { "name": datosarbolmonitoreo[0].nombrearbol, "image": datosarbolmonitoreo[0].fotografia })} ${renderComponent($$result3, "ArbolCrecimiento", $$ArbolCrecimiento, { "name": datosarbolcrecimiento[0].nombrearbol, "image": datosarbolcrecimiento[0].fotografia, "crecimiento": 20 })} <div id="pag-usuario"> <div class="container"> ${renderComponent($$result3, "Flecha", $$Flecha, { "id": "8", "clase": "duration usuario-2" })} ${detallesDeUsuarios.map((user) => renderTemplate`${renderComponent($$result3, "Usuarios", $$Usuarios, { "nombreUsuario": user.nombre || "Nombre no disponible", "imageProfile": user.imageProfile === "default" ? "../public/images/perfil.jpg" : user.imageProfile })}`)}   </div> </div> ${renderComponent($$result3, "Score", $$Score, {})} ${renderComponent($$result3, "Scoremes", $$Scoremes, {})} ${renderComponent($$result3, "Top", $$Top, { "top": topactual })} ${renderComponent($$result3, "Medalla", $$Medalla, { "puntos": puntos, "medalla": medalla })} ${renderComponent($$result3, "Despedida", $$Despedida, { "nombre": usuario ? usuario.nombre : "", "imageProfile": usuario ? usuario.imageProfile : "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png" })} </main> ` })} ` })}`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/pages/resumen/[id].astro", void 0);

const $$file = "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/pages/resumen/[id].astro";
const $$url = "/resumen/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_ as _, loadUsuarios as l };
