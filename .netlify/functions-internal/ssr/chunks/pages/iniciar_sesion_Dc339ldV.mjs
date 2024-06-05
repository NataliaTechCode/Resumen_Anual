import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../astro_CTYmicAi.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { l as loadUsuarios } from './_id__DTpIUwIp.mjs';

const $$IniciarSesion = createComponent(async ($$result, $$props, $$slots) => {
  const usuarios = await loadUsuarios();
  return renderTemplate`${maybeRenderHead()}<ul> ${usuarios.map((usuario) => renderTemplate`<a${addAttribute(`/resumen/${usuario.id}`, "href")}> <li>${usuario.id}</li> </a>`)} </ul>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/pages/iniciar_sesion.astro", void 0);

const $$file = "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/pages/iniciar_sesion.astro";
const $$url = "/iniciar_sesion";

export { $$IniciarSesion as default, $$file as file, $$url as url };
