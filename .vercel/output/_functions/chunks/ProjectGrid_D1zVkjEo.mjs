import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_CPQWemzE.mjs';
import 'kleur/colors';
import { U as Users, G as Github, S as SquareArrowOutUpRight, p as projects } from './projects_BpV1UV5g.mjs';

const $$Astro = createAstro();
const $$SingleProject = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SingleProject;
  const { title, numContributors, description, github_link, slug, activeLink, categories, link } = Astro2.props;
  const redirectLink = `/projects/${slug}`;
  return renderTemplate`${maybeRenderHead()}<div class="border rounded p-3 my-3 md:p-5 lg:m-1 border-white hover:bg-[#30302e]"> <a${addAttribute(activeLink ? redirectLink : "#", "href")} class="no-underline"> <div class="flex justify-between"> <div class="flex justify-between gap-2"> <div class="text-white md:max-w-full text-xl">${title}</div> <div class="flex gap-1 items-center text-white"> ${renderComponent($$result, "Users", Users, { "size": 20 })} ${numContributors} </div> </div> <div class="flex flex-row gap-2 justify-between items-center hidden md:flex"> <div class="text-[#c96442]"> ${renderComponent($$result, "Github", Github, { "size": "20" })} </div> ${link && renderTemplate`<div class="text-[#c96442]"> ${renderComponent($$result, "SquareArrowOutUpRight", SquareArrowOutUpRight, { "size": "20" })} </div>`} </div> </div> <div class="text-md text-gray-300 no-underline"> <div class="flex gap-1 text-sm text-[#c96442] font-bold overflow-hidden text-ellipsis"> ${categories.map((category, idx) => renderTemplate`<div class="text-nowrap"> ${idx == 0 ? category : `| ${category}`} </div>`)} </div> <div> ${description} </div> </div> </a> </div>`;
}, "C:/Users/sandr/WebstormProjects/portfolio/src/components/SingleProject.astro", void 0);

const $$ProjectGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="lg:grid lg:grid-cols-2"> ${projects.map((project) => renderTemplate`${renderComponent($$result, "SingleProject", $$SingleProject, { "title": project.title, "numContributors": project.num_contributors, "description": project.description, "githubLink": project.github_link, "slug": project.slug, "activeLink": project.active_link, "categories": project.categories, "link": project.link })}`)} </div>`;
}, "C:/Users/sandr/WebstormProjects/portfolio/src/components/ProjectGrid.astro", void 0);

export { $$ProjectGrid as $ };
