import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CPQWemzE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CxHuFgPv.mjs';
import { c as createLucideIcon } from '../chunks/createLucideIcon_B304YeZB.mjs';
export { renderers } from '../renderers.mjs';

const Mail = createLucideIcon("mail", [["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }], ["rect", { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }]]);

const Phone = createLucideIcon("phone", [["path", { "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }]]);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sandro Lu\xEDs | Contact me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold m-0 mt-5 no-underline">Sandro Luís</h1> <p class="mb-6 text-[#c96442]">Computer Engineering Student</p> <h2 class="flex items-center gap-2 text-2xl font-bold leading-snug mb-4"> ${renderComponent($$result2, "Phone", Phone, {})} <div>Contact me</div> </h2> <div class="space-y-4"> <p>
Thank you for checking out <strong>my website</strong>! If you wanna hit me up for anything, be it a <strong>project</strong>, a <strong>job</strong> or just to send me a book recomendation. I'd be excited for us to talk.
</p> <p>
You can send an email. <strong>I'll probably answer faster if it's an email.</strong><br> </p> <p></p><div class="flex gap-1 items-center"> ${renderComponent($$result2, "Mail", Mail, {})}
Email:
<a href="mailto:sandroluis720@gmail.com">
sandroluis720@gmail.com
</a><br> </div> <div class="flex gap-1 items-center"> ${renderComponent($$result2, "Phone", Phone, {})}
Phone:
<a href="tel:+351938536401">
+351 938 536 401
</a><br> </div>  </div> ` })}`;
}, "C:/Users/sandr/WebstormProjects/portfolio/src/pages/contact.astro", void 0);

const $$file = "C:/Users/sandr/WebstormProjects/portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
