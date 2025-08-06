import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CPQWemzE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_5t_dy9Pp.mjs';
import 'clsx';
import { c as createLucideIcon } from '../chunks/createLucideIcon_Deyocb4g.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<p>Hey, my name is Sandro Luís, and I’m a Computer Engineering student who loves to learn and explore new things. Ever since I was a kid, curiosity has been my constant companion, pushing me to dive into new ideas and ask endless “why?” questions. For me, an unanswered question isn’t a roadblock, but a challenge waiting for a solution.</p>\n<p>Born in Portugal, I deeply cherish my country and the connections to the people and places that have shaped who I am. From an early age, I found myself drawn to puzzles and anything that stimulated my mind. My journey into computer engineering began with that same innate curiosity, often leading me to explore beyond classroom materials just for the sheer joy of discovery. I’m truly grateful for that early initiative, as it’s a fundamental part of how I got to where I am today.</p>\n<p>My studies at the Instituto Superior de Engenharia do Porto (ISEP) have been pivotal, not just for the knowledge gained, but for the incredible people I’ve met. I’ve had the chance to collaborate with amazing individuals who share my passion for tackling new challenges. This experience has solidified my belief in the power of collaboration – with the right team, anything feels possible, a principle vividly demonstrated during projects like the Blended Intensive Programme (BIP).</p>\n<h3 id=\"what-im-focused-on-now\">What I’m Focused on Now</h3>\n<p>Currently, I’m dedicating time to refining my organizational strategies to maximize the value of my time. If you have any book recommendations or effective techniques for improving organization and time management, I’d love to hear them! I’m particularly interested in leveraging emerging technologies for sustainable development and am always on the lookout for simple, efficient, and scalable solutions.</p>\n<h3 id=\"my-driving-forces\">My Driving Forces</h3>\n<p>Three core elements truly motivate me:</p>\n<ol>\n<li>\n<p><strong>Learning:</strong> Every single day offers a chance to learn something new, and that constant discovery is what keeps life exciting for me. Keeping our minds fresh and open to new knowledge is a cycle I genuinely enjoy being a part of, especially when it comes to technology.</p>\n</li>\n<li>\n<p><strong>Helping People:</strong> I’m driven to work on initiatives that genuinely make a difference in people’s lives, no matter how small. Making someone’s day a little better feels incredibly meaningful. This desire aligns perfectly with my practical experience in fullstack development and system integration, particularly with projects involving sensors in agricultural contexts, like the Digital Assistant for Sustainable Agriculture.</p>\n</li>\n<li>\n<p><strong>My Mother:</strong> She has always been my steadfast support and guide. None of my achievements would have been possible without her unwavering love and encouragement. One of my biggest dreams is to provide her with the comfortable and happy life she so truly deserves.</p>\n</li>\n</ol>\n<h3 id=\"beyond-the-code\">Beyond the Code</h3>\n<p>Outside of my engineering pursuits, I’m a big enthusiast of science fiction, with a special affinity for <strong>Star Wars</strong>. I find immense joy in stories that blend imagination with profound ideas about humanity, life, and the future. I also appreciate <strong>watching movies</strong>, especially dramas or more introspective and experimental films that provoke thought and genuine emotion. When I need to recharge, there’s nothing quite like <strong>going for walks</strong> and immersing myself in nature, which offers a peaceful connection to the world and a chance to slow down.</p>";

				const frontmatter = {};
				const file = "C:/Users/sandr/WebstormProjects/portfolio222/src/data/aboutMeMarkdown.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const CircleUserRound = createLucideIcon("circle-user-round", [["path", { "d": "M18 20a6 6 0 0 0-12 0" }], ["circle", { "cx": "12", "cy": "10", "r": "4" }], ["circle", { "cx": "12", "cy": "12", "r": "10" }]]);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sandro Lu\xEDs | About me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold m-0 mt-5 no-underline">Sandro Luís</h1> <p class="mb-6 text-[#c96442]">Computer Engineering Student</p> <h2 class="flex gap-2 items-center text-2xl font-bold leading-snug mb-4"> ${renderComponent($$result2, "CircleUserRound", CircleUserRound, { "size": 30 })} <div>
About me
</div> </h2> <div class="prose prose-lg"> ${renderComponent($$result2, "AboutMeMarkdown", Content, {})} </div> ` })}`;
}, "C:/Users/sandr/WebstormProjects/portfolio222/src/pages/about-me.astro", void 0);

const $$file = "C:/Users/sandr/WebstormProjects/portfolio222/src/pages/about-me.astro";
const $$url = "/about-me";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AboutMe,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
