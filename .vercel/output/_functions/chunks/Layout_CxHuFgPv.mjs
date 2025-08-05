import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, b as createAstro, e as renderHead, r as renderComponent, f as renderSlot } from './astro/server_CPQWemzE.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="p-6"> <div class="flex gap-6 text-sm text-white"> <a href="/contact" class="text-white">Contact</a> <a href="/about-me" class="text-white">About me</a> </div> <div${addAttribute([
    "pt-6 flex flex-col gap-4 border-t border-dashed border-main"
  ], "class:list")}> <p class="text-sm">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()}&nbsp;<a class="text-white hover:underline hover:underline-offset-2" href="/"></a>. All rights reserved.
</p> </div> </footer>`;
}, "C:/Users/sandr/WebstormProjects/portfolio/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="pt-6 px-6 pb-2"> <nav class="flex gap-6 text-sm text-white border-b pb-1 border-dashed"> <a href="/" class="text-white hover:text-[#c96442] no-underline">Home</a> <a href="/about-me" class="text-white hover:text-[#c96442] no-underline">About me</a> <a href="/contact" class="text-white hover:text-[#c96442] no-underline">Contact</a> <a download href="/cv.pdf" class="text-white hover:text-[#c96442] no-underline">CV</a> </nav> </header>`;
}, "C:/Users/sandr/WebstormProjects/portfolio/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Sandro Lu\xEDs | Portfolio" } = Astro2.props;
  return renderTemplate`<html lang="en" class="bg-[#262624] text-white text-lg"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="stylesheet" href="/global.css"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">${renderHead()}</head> <body class="font-serif"> <div class="max-w-4xl mx-auto"> ${renderComponent($$result, "Header", $$Header, {})} <main class="px-6"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "C:/Users/sandr/WebstormProjects/portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
