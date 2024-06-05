import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from '../astro_cu31Rzcd.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { l as loadUsuarios } from './_id__DQI7bTNQ.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const usuarios = await loadUsuarios();
  return renderTemplate`${maybeRenderHead()}<ul> ${usuarios.map((usuario) => renderTemplate`<a${addAttribute(`/resumen/${usuario.id}`, "href")}> <li>${usuario.id}</li> </a>`)} </ul>`;
}, "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/pages/index.astro", void 0);

const $$file = "D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
