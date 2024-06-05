import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_cu31Rzcd.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/iniciar_sesion","isIndex":false,"type":"page","pattern":"^\\/iniciar_sesion\\/?$","segments":[[{"content":"iniciar_sesion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/iniciar_sesion.astro","pathname":"/iniciar_sesion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.LekzAvBe.js"}],"styles":[{"type":"external","src":"/_astro/_id_.CCjM_MEp.css"}],"routeData":{"route":"/resumen/[id]","isIndex":false,"type":"page","pattern":"^\\/resumen\\/([^/]+?)\\/?$","segments":[[{"content":"resumen","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/resumen/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/src/pages/resumen/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DW0fadVn.mjs","/src/pages/iniciar_sesion.astro":"chunks/pages/iniciar_sesion_dLfa1T6y.mjs","\u0000@astrojs-manifest":"manifest_CeTBMeW9.mjs","D:/LabTecno/Arbu/Resumenanual/arbu-astro/arbu-astro/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_WWajcAde.mjs","\u0000@astro-page:src/pages/iniciar_sesion@_@astro":"chunks/iniciar_sesion_B6ODGLNM.mjs","\u0000@astro-page:src/pages/resumen/[id]@_@astro":"chunks/_id__onf6UcWf.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.LekzAvBe.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_id_.CCjM_MEp.css","/favicon.ico","/index.html","/logo192.png","/logo512.png","/data/arbolesPlantados.js","/data/Mensual_10_2023.js","/data/Mensual_11_2023.js","/data/Mensual_12_2023.js","/data/Mensual_1_2023.js","/data/Mensual_2_2023.js","/data/Mensual_3_2023.js","/data/Mensual_4_2023.js","/data/Mensual_5_2023.js","/data/Mensual_6_2023.js","/data/Mensual_7_2023.js","/data/Mensual_8_2023.js","/data/ranking2024Abril18.js","/data/scoresGlobal.js","/data/scoresMes.js","/data/usuario.js","/images/Ancestro.png","/images/Aprendíz.png","/images/arbol.png","/images/arbol4.png","/images/Arboles.png","/images/ArbolFinal.png","/images/arbol_seco.jpg","/images/arbusto.png","/images/arbusto2.png","/images/borde.png","/images/Bosque.jpg","/images/ejemplo-arbol.jpg","/images/flecha2.png","/images/Fondo.jpg","/images/Hojas.png","/images/Icono-arbu.png","/images/Leyenda.png","/images/logo.png","/images/LogoLabTecno.png","/images/Montañas.png","/images/noche-icono-arbu.png","/images/perfil.jpg","/images/planta.png","/images/Protector.png","/images/puntero.png","/images/redondos.png","/_astro/client.5I5BMcNS.js","/_astro/hoisted.LekzAvBe.js","/anime-master/lib/anime.es.js","/anime-master/lib/anime.js","/anime-master/lib/anime.min.js"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
