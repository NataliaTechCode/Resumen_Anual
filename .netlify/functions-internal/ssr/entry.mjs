import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Cm9C_ROZ.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_WWajcAde.mjs');
const _page1 = () => import('./chunks/iniciar_sesion_B6ODGLNM.mjs');
const _page2 = () => import('./chunks/_id__onf6UcWf.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/iniciar_sesion.astro", _page1],
    ["src/pages/resumen/[id].astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b3a40f39-c9c7-4021-87d5-f0accfafdee6"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
