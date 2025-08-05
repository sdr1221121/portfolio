import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CPQWemzE.mjs';
import 'kleur/colors';
import { $ as $$ProjectGrid } from '../chunks/ProjectGrid_D1zVkjEo.mjs';
import { $ as $$Layout } from '../chunks/Layout_CxHuFgPv.mjs';
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectGrid", $$ProjectGrid, {})} ` })}`;
}, "C:/Users/sandr/WebstormProjects/portfolio/src/pages/projects.astro", void 0);

const $$file = "C:/Users/sandr/WebstormProjects/portfolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
