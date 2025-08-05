import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CPQWemzE.mjs';
import 'kleur/colors';
import { $ as $$ProjectGrid } from '../chunks/ProjectGrid_D1zVkjEo.mjs';
import { $ as $$Layout } from '../chunks/Layout_CxHuFgPv.mjs';
import { c as createLucideIcon } from '../chunks/createLucideIcon_B304YeZB.mjs';
export { renderers } from '../renderers.mjs';

const Code = createLucideIcon("code", [["path", { "d": "m16 18 6-6-6-6" }], ["path", { "d": "m8 6-6 6 6 6" }]]);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sandro Lu\xEDs | Portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="mb-5"> <h1 class="text-3xl font-bold m-0 mt-5 no-underline">Sandro Luís</h1> <p class="mb-6 text-[#c96442]">Computer Engineering Student</p> <p>
Hello! I'm a Computer Engineering student interested in emerging technologies and sustainable development. I have practical experience in fullstack development and system integration with sensors in agricultural contexts. I've also participated in collaborative projects with real-world applications involving digital platforms, IoT, and intelligent systems. I value simple, efficient, and scalable solutions, and I demonstrate adaptability, enjoys solving complex problems, and learning new technologies.
</p> </div> <h2 class="flex items-center gap-2 text-2xl font-bold leading-snug mb-4"> ${renderComponent($$result2, "Code", Code, {})} <div>Projects</div> </h2> <p class="mb-3">
Here are some of the projects that I worked on:
</p> ${renderComponent($$result2, "ProjectGrid", $$ProjectGrid, {})} </section> ` })}`;
}, "C:/Users/sandr/WebstormProjects/portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/sandr/WebstormProjects/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
