import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CPQWemzE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CxHuFgPv.mjs';
export { renderers } from '../renderers.mjs';

const $$Cv = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sandro Lu\xEDs | CV" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold m-0 mt-5 no-underline">Sandro Luís</h1> <p class="mb-6 text-[#c96442]">Computer Engineering Student</p> <embed src="/CV_Sandro.pdf" class="w-full md:h-screen h-[500px] border-none" title="My CV"> ` })}`;
}, "C:/Users/sandr/WebstormProjects/portfolio/src/pages/cv.astro", void 0);

const $$file = "C:/Users/sandr/WebstormProjects/portfolio/src/pages/cv.astro";
const $$url = "/cv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cv,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
