import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_oE8lTvAb.mjs';
import { manifest } from './manifest_DONy1Nl-.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about-me.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/cv.astro.mjs');
const _page4 = () => import('./pages/projects/_id_.astro.mjs');
const _page5 = () => import('./pages/projects.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about-me.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/cv.astro", _page3],
    ["src/pages/projects/[id].astro", _page4],
    ["src/pages/projects.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "74d8cc95-5147-4ce8-90ed-b8494b32dd1a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
