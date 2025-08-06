import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, s as spreadAttributes, b as createAstro, r as renderComponent, d as addAttribute } from '../../chunks/astro/server_CPQWemzE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BWQx_haA.mjs';
import { c as getImage } from '../../chunks/_astro_assets_CVwF6UFk.mjs';
import 'clsx';
import { p as projects, U as Users, G as Github, S as SquareArrowOutUpRight } from '../../chunks/projects_DgplzAmd.mjs';
export { renderers } from '../../renderers.mjs';

const Astro__1jIzrW = new Proxy({"src":"/_astro/everyday-dev.CsX7FDU-.png","width":1561,"height":711,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sandr/WebstormProjects/portfolio/src/assets/everyday-dev.png";
							}
							
							return target[name];
						}
					});

const Astro__25gXGf = new Proxy({"src":"/_astro/uml.DpZMoCH0.png","width":1370,"height":1700,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sandr/WebstormProjects/portfolio/src/assets/uml.png";
							}
							
							return target[name];
						}
					});

const images$5 = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/everyday-dev\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/everyday-dev.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__1jIzrW, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/uml\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/uml.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__25gXGf, ...props});
													occurrenceCounter++;
											}
									}
					
					return imageSources;
			};

		async function updateImageReferences$5(html) {
			const imageSources = await images$5(html);

			return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
				const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));

				// Use the 'index' property for each image occurrence
				const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;

				if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
					imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
				}

				const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;

				return spreadAttributes({
					src: imageSources[srcKey].src,
					...attributesWithoutIndex,
				});
			});
		}

		const html$9 = async () => await updateImageReferences$5("<h1 id=\"overview\">Overview</h1>\n<p>This project was developed for the <strong>Database and Web Applications Laboratory</strong> course, where our group was given the task of creating an entire website from scratch—from designing the requirements and defining the actors, to actually building the website.</p>\n<p>The website is a clone of the famous daily.dev website.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/everyday-dev.png&#x22;,&#x22;alt&#x22;:&#x22;everyday-dev&#x22;,&#x22;index&#x22;:0}\"></p>\n<h1 id=\"technologies\">Technologies</h1>\n<ul>\n<li>Laravel</li>\n<li>HTML</li>\n<li>JavaScript</li>\n<li>TailwindCSS</li>\n<li>PostgreSQL</li>\n</ul>\n<h1 id=\"what-did-i-do\">What did I do?</h1>\n<p>I was involved, as I should be, in every step of the development process. Together, we designed what each actor would be responsible for. At one point, we even had a question about one of the actors, specifically related to Google’s OAuth. We weren’t sure if it should be treated as an actor just like the others or handled differently.</p>\n<p>Moving on to the database specification: <strong>I remember spending several hours creating the UML diagram and working with another teammate to determine the normalization of each functional dependency.</strong> After that, we spent some time defining triggers and deciding whether they were well-placed, or if the logic should be moved to a higher layer.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/uml.png&#x22;,&#x22;alt&#x22;:&#x22;UML&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>During development, <strong>I was mostly responsible for the search functionality on the website and the admin dashboard.</strong> Since our group was relatively small and we didn’t have much experience, <strong>I also spent a lot of time helping my colleagues solve their issues while working on mine</strong>.</p>\n<p>After we delivered the project, I felt satisfied with the work we had done. Even though there were some stressful moments, the result was worth it.</p>\n<h1 id=\"what-have-i-learned\">What have I learned?</h1>\n<p>I learned how to work with a new framework, which was cool, but <strong>the main takeaway from this experience was improving my management skills</strong>. Since the project was medium-sized and had to be completed in less than a semester, we needed to be precise in terms of dividing responsibilities and managing time.</p>\n<p><strong>We faced some team issues during development and had to sit down and talk about how to work better together and actually get the product finished.</strong></p>\n<p>One thing I can definitely say I’ve learned is that <strong>making a less-than-perfect decision is better than making no decision at all</strong>.</p>\n<h1 id=\"would-i-do-something-differently\">Would I do something differently?</h1>\n<p>This was a project where I truly learned a lot, in terms of technical stuff and soft skills, so there’s not much I’d change.</p>\n<p>Maybe I would improve the organization and division of responsibilities a bit more so we could have delivered even more functionality.</p>");
	

				const frontmatter$9 = {};
				const file$9 = "C:/Users/sandr/WebstormProjects/portfolio/src/data/projects/everyday-dev.md";
				const url$9 = undefined;

				const Content$9 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$9;
					content.file = file$9;
					content.url = url$9;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$9())}`;
				});

const Astro__Z22cw4S = new Proxy({"src":"/_astro/ltw.Cf8BYfVS.png","width":1853,"height":968,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sandr/WebstormProjects/portfolio/src/assets/ltw.png";
							}
							
							return target[name];
						}
					});

const images$4 = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/ltw\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/ltw.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__Z22cw4S, ...props});
													occurrenceCounter++;
											}
									}
					
					return imageSources;
			};

		async function updateImageReferences$4(html) {
			const imageSources = await images$4(html);

			return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
				const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));

				// Use the 'index' property for each image occurrence
				const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;

				if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
					imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
				}

				const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;

				return spreadAttributes({
					src: imageSources[srcKey].src,
					...attributesWithoutIndex,
				});
			});
		}

		const html$8 = async () => await updateImageReferences$4("<h1 id=\"overview\">Overview</h1>\n<p>This project was developed during the “Web Technologies Laboratory Course” course, where our task was to build an OLX clone using only pure PHP, HTML, CSS and JavaScript.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/ltw.png&#x22;,&#x22;alt&#x22;:&#x22;ltw-pre-loved&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>This project was tougher than I imagined. <strong>Tailwind</strong> and frameworks like <strong>Laravel</strong> really make things a LOT easier.</p>\n<h1 id=\"technologies-and-categories\">Technologies and Categories</h1>\n<ul>\n<li>HTML</li>\n<li>CSS</li>\n<li>JavaScript</li>\n<li>PHP</li>\n<li>SQLite</li>\n</ul>\n<h1 id=\"what-did-i-do\">What did I do?</h1>\n<p>During this project I contributed to a little bit of everything, but I was mostly involved in the <strong>profile page</strong> and the <strong>admin dashboard</strong> (similarly to the daily.dev website). I worked with the <strong>Chart.js</strong> library to show analytics in a more intuitive and simple way.</p>\n<p>For the backend, <strong>another team member and I developed the database schema and implemented it</strong>, which took some time, but helped us learn a lot about how they work and what some of their specificities are.</p>\n<h1 id=\"what-have-i-learned\">What have I learned?</h1>\n<p>This was the project that actually <strong>taught me how web development works</strong> and how to work with it. I would recommend anyone that really wants to understand how to develop for the web, for either frontend or backend, to work on a project (even if small) using the native technologies. It’s hard but it is worth it.</p>\n<h1 id=\"would-i-do-something-differently\">Would I do something differently?</h1>\n<p>I would probably give more of my time to develop a <strong>small JavaScript framework</strong> to facilitate the development of some of the components, as I saw done in some projects from previous years.</p>");
	

				const frontmatter$8 = {};
				const file$8 = "C:/Users/sandr/WebstormProjects/portfolio/src/data/projects/ltw-pre-loved.md";
				const url$8 = undefined;

				const Content$8 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$8;
					content.file = file$8;
					content.url = url$8;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$8())}`;
				});

const html$7 = () => "<h1 id=\"overview\">Overview</h1>\n<p>This project is a restructuring of the infrastructure at the Informatics Club. This system is responsible for hosting all of the projects developed by the group (around 3-4 projects).</p>\n<h1 id=\"technologies-and-categories\">Technologies and Categories</h1>\n<ul>\n<li>DevOps</li>\n<li>Kubernetes</li>\n<li>Ansible</li>\n<li>Linux</li>\n<li>Docker</li>\n</ul>\n<h1 id=\"what-did-i-do\">What did I do?</h1>\n<p><strong>Contributing to this project was a challenge for me, since I had never even touched anything like it</strong>, so first I had to learn how it worked and a little about the technologies involved. For that, <strong>I started with the Kubernetes Bootcamp on their website, some Docker tutorials and a lot of documentation from the Ansible team</strong>.</p>\n<p>Even after all of that, my contributions were somewhat sub-optimal and I wish I had made more contributions (which I plan to do this next academic year). <strong>My real contributions were setting up a DHCP server and fixing an issue with a failsafe protocol.</strong></p>\n<h1 id=\"what-have-i-learned\">What have I learned?</h1>\n<p>Even if my contributions were not really significant, <strong>I feel like I’ve learned tons about DevOps, GitHub Actions and everything related to infrastructure and how all of that works</strong>.</p>\n<p>For that, I give my sincere thanks to <a href=\"https://github.com/LuisDuarte1/\">Luis Duarte</a> and <a href=\"https://github.com/Sirze01\">José Costa</a>, who were the minds behind the whole project and <strong>the people who fueled even more my passion for working on something great</strong>.</p>\n<h1 id=\"would-i-do-something-differently\">Would I do something differently?</h1>\n<p>I would probably give more of my time to contribute and be more involved in this project.</p>";

				const frontmatter$7 = {};
				const file$7 = "C:/Users/sandr/WebstormProjects/portfolio/src/data/projects/niployments.md";
				const url$7 = undefined;

				const Content$7 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$7;
					content.file = file$7;
					content.url = url$7;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$7())}`;
				});

const html$6 = () => "<h1 id=\"overview\">Overview</h1>\n<h1 id=\"technologies-and-categories\">Technologies and Categories</h1>\n<h1 id=\"what-did-i-do\">What did I do?</h1>\n<h1 id=\"what-have-i-learned\">What have I learned?</h1>\n<h1 id=\"would-i-do-something-different\">Would I do something different?</h1>";

				const frontmatter$6 = {};
				const file$6 = "C:/Users/sandr/WebstormProjects/portfolio/src/data/projects/portifolio.md";
				const url$6 = undefined;

				const Content$6 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$6;
					content.file = file$6;
					content.url = url$6;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$6())}`;
				});

const Astro__2t1FAq = new Proxy({"src":"/_astro/simple-tomb-of-the-mask.rcmSTFGw.png","width":387,"height":305,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sandr/WebstormProjects/portfolio/src/assets/simple-tomb-of-the-mask.png";
							}
							
							return target[name];
						}
					});

const Astro__Z13mtm5 = new Proxy({"src":"/_astro/stotm-tests.ChlS2-XE.png","width":1140,"height":489,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sandr/WebstormProjects/portfolio/src/assets/stotm-tests.png";
							}
							
							return target[name];
						}
					});

const images$3 = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/simple-tomb-of-the-mask\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/simple-tomb-of-the-mask.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__2t1FAq, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/stotm-tests\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/stotm-tests.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__Z13mtm5, ...props});
													occurrenceCounter++;
											}
									}
					
					return imageSources;
			};

		async function updateImageReferences$3(html) {
			const imageSources = await images$3(html);

			return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
				const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));

				// Use the 'index' property for each image occurrence
				const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;

				if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
					imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
				}

				const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;

				return spreadAttributes({
					src: imageSources[srcKey].src,
					...attributesWithoutIndex,
				});
			});
		}

		const html$5 = async () => await updateImageReferences$3("<h1 id=\"overview\">Overview</h1>\n<p>This project was developed during the “Tests and Development Laboratory” course where the task was to develop a game using the Lanterna framework in Java. This framework is mostly focused on graphics.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/simple-tomb-of-the-mask.png&#x22;,&#x22;alt&#x22;:&#x22;simple-tomb-of-the-mask&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Aside from the development of the game, <strong>we had to learn and implement design patterns (at least 7 to have a good grade) and have tests for all of the functionalities of the game</strong>.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/stotm-tests.png&#x22;,&#x22;alt&#x22;:&#x22;stotm-tests&#x22;,&#x22;index&#x22;:0}\"></p>\n<h1 id=\"technologies-and-categories\">Technologies and Categories</h1>\n<ul>\n<li>Design Patterns</li>\n<li>Java</li>\n<li>Lanterna</li>\n<li>Unit Tests</li>\n<li>Pitest</li>\n</ul>\n<h1 id=\"what-did-i-do\">What did I do?</h1>\n<p>In this project we used a font to display the different entities and <strong>I was the one responsible for creating that font and most of the tests</strong>. Aside from this, at the end <strong>we had to refactor most of the code to adapt a larger number of design patterns and I had a big role in that process</strong>.</p>\n<h1 id=\"what-have-i-learned\">What have I learned?</h1>\n<p><strong>I learned how to create tests and how tests apply to different aspects of an application</strong> and I wished to use that knowledge in more projects at University, but with a tight schedule for the projects, this was not really possible.</p>\n<p><strong>This project had an important role in teaching me design patterns and how they work.</strong> At first glance, design patterns seem kind of useless or just unnecessary junk, but after the end of that project <strong>I realized their importance and how they can improve organization within a project</strong>.</p>\n<h1 id=\"would-i-do-something-differently\">Would I do something differently?</h1>\n<p>I would probably work more on the development of the game itself. For this course I shifted all my focus to creating tests and ensuring that we had good tests that really tested the features of the game and its logic.</p>\n<p><strong>For that I am proud of the work we did</strong>, but I feel like it could have helped me to be more experienced in Java at the time (that changed in the future, as I got to experience more of Java and fell in love with the language).</p>");
	

				const frontmatter$5 = {};
				const file$5 = "C:/Users/sandr/WebstormProjects/portfolio/src/data/projects/simple-tomb-of-the-mask.md";
				const url$5 = undefined;

				const Content$5 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$5;
					content.file = file$5;
					content.url = url$5;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$5())}`;
				});

const Astro__278T3w = new Proxy({"src":"/_astro/uni.Da8Nth2V.png","width":1561,"height":761,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sandr/WebstormProjects/portfolio/src/assets/uni.png";
							}
							
							return target[name];
						}
					});

const images$2 = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/uni\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/uni.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__278T3w, ...props});
													occurrenceCounter++;
											}
									}
					
					return imageSources;
			};

		async function updateImageReferences$2(html) {
			const imageSources = await images$2(html);

			return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
				const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));

				// Use the 'index' property for each image occurrence
				const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;

				if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
					imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
				}

				const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;

				return spreadAttributes({
					src: imageSources[srcKey].src,
					...attributesWithoutIndex,
				});
			});
		}

		const html$4 = async () => await updateImageReferences$2("<h1 id=\"overview\">Overview</h1>\n<p>This project was started in 2018 as an app to help improve the daily lives of the students at FEUP. Nowadays, <strong>it supports the lives of around 5,000 students</strong>.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/uni.png&#x22;,&#x22;alt&#x22;:&#x22;uni&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><strong>This is the biggest project that I have ever contributed (yet).</strong></p>\n<h1 id=\"technologies-and-categories\">Technologies and Categories</h1>\n<ul>\n<li>Flutter</li>\n</ul>\n<h1 id=\"what-did-i-do\">What did I do?</h1>\n<p><strong>When I joined the Informatics Club this was the first project that I started to contribute to</strong> and, during the first year, I didn’t have a lot of contributions. But during my second year, <strong>I started to contribute more to the app</strong> and I’m very thankful for that.</p>\n<h1 id=\"what-have-i-learned\">What have I learned?</h1>\n<p><strong>During my years working on projects, I learned a lot about Flutter and Mobile Development.</strong></p>\n<h1 id=\"would-i-do-something-differently\">Would I do something differently?</h1>\n<p>I would spend more time contributing to the project, as I believe it would make me even more comfortable with mobile development and overall programming.</p>");
	

				const frontmatter$4 = {};
				const file$4 = "C:/Users/sandr/WebstormProjects/portfolio/src/data/projects/uni.md";
				const url$4 = undefined;

				const Content$4 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$4;
					content.file = file$4;
					content.url = url$4;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$4())}`;
				});

const Astro__28UmLs = new Proxy({"src":"/_astro/usettle.69oz5DX2.png","width":1873,"height":970,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sandr/WebstormProjects/portfolio/src/assets/usettle.png";
							}
							
							return target[name];
						}
					});

const images$1 = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/usettle\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/usettle.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__28UmLs, ...props});
													occurrenceCounter++;
											}
									}
					
					return imageSources;
			};

		async function updateImageReferences$1(html) {
			const imageSources = await images$1(html);

			return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
				const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));

				// Use the 'index' property for each image occurrence
				const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;

				if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
					imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
				}

				const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;

				return spreadAttributes({
					src: imageSources[srcKey].src,
					...attributesWithoutIndex,
				});
			});
		}

		const html$3 = async () => await updateImageReferences$1("<h1 id=\"overview\">Overview</h1>\n<p>This project was developed during the Shift Appens 2025 hackathon. <strong>This hackathon is the biggest student-made hackathon in the country</strong> and it is organized by the Informatics Club of the University of Coimbra.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/usettle.png&#x22;,&#x22;alt&#x22;:&#x22;usettle&#x22;,&#x22;index&#x22;:0}\"></p>\n<p><strong>Our idea was to create an app where you can scan your bills and easily split them with friends and, at the end, a money request is sent to all parties involved.</strong></p>\n<h1 id=\"technologies\">Technologies</h1>\n<ul>\n<li>Flutter</li>\n</ul>\n<h1 id=\"what-did-i-do\">What did I do?</h1>\n<p><strong>I was mostly responsible for the MBWAY (a payment service) integration with the app</strong> and some of the functionalities, namely the modals present in the app and the flow of having accounts and debts with friends.</p>\n<p>This feature of having accounts and debts with friends is already present in a similar app called “Splitwise” and we got the following question whenever we spoke about our idea: “Isn’t this Splitwise?” <strong>No, it is not Splitwise</strong>. <strong>Our focus is on the flow of scanning a bill and splitting it immediately with your friends.</strong></p>\n<h1 id=\"what-have-i-learned\">What have I learned?</h1>\n<p><strong>I learned about handling my expectations better.</strong> Before actually participating in the competition, my team and I thought that our idea was too good to not win at least something. We went, did a good job, but in the end we didn’t win.</p>\n<p>At the time, I couldn’t wrap my head around the fact that we hadn’t won but <strong>it made me think and at the same time helped me deal better with failure.</strong></p>\n<h1 id=\"would-i-do-something-differently\">Would I do something differently?</h1>\n<p>To be completely honest, I don’t know what went wrong for us to not win anything and I don’t say that as someone who is trying to brag or flex, I just don’t know. But maybe, sometime in the future I get some sort of feedback or understand it.</p>");
	

				const frontmatter$3 = {};
				const file$3 = "C:/Users/sandr/WebstormProjects/portfolio/src/data/projects/usettle.md";
				const url$3 = undefined;

				const Content$3 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3;
					content.file = file$3;
					content.url = url$3;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3())}`;
				});

const Astro__ZMzBh2 = new Proxy({"src":"/_astro/aefeup.gTx8VPAd.png","width":1853,"height":933,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sandr/WebstormProjects/portfolio/src/assets/aefeup.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/aefeup\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/aefeup.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"').replace(/&#x27;/g, "'"));
													const { src, ...props } = imageProps;
													imageSources[matchKey] = await getImage({src: Astro__ZMzBh2, ...props});
													occurrenceCounter++;
											}
									}
					
					return imageSources;
			};

		async function updateImageReferences(html) {
			const imageSources = await images(html);

			return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
				const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));

				// Use the 'index' property for each image occurrence
				const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;

				if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
					imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
				}

				const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;

				return spreadAttributes({
					src: imageSources[srcKey].src,
					...attributesWithoutIndex,
				});
			});
		}

		const html$2 = async () => await updateImageReferences("<h1 id=\"overview\">Overview</h1>\n<p>This project was created as a request from the Student Association of my University.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/aefeup.png&#x22;,&#x22;alt&#x22;:&#x22;website-ae&#x22;,&#x22;index&#x22;:0}\"></p>\n<h1 id=\"technologies-and-categories\">Technologies and Categories</h1>\n<ul>\n<li>React</li>\n<li>Next.js</li>\n<li>TailwindCSS</li>\n<li>Payload CMS</li>\n<li>Docker</li>\n</ul>\n<h1 id=\"what-did-i-do\">What did I do?</h1>\n<p>Alongside my co-coordinator of projects at the Informatics Club, we took the <strong>leadership</strong> role for this project and were <strong>responsible for organizing tasks</strong> and what was to be done in the project.</p>\n<p>Aside from this, we were on the development team so I contributed to all parts of the project. I was the one responsible for most of the <strong>Payload CMS integration</strong> and participated in the development of <strong>all of the pages</strong> on the website.</p>\n<h1 id=\"what-have-i-learned\">What have I learned?</h1>\n<p>My main takeaways from this project were <strong>leadership and organization skills.</strong> As one of the people at the head of the project, I had to be able to contribute and, at the same time, organize the team.</p>\n<p>Another important thing that I learned was that <strong>motivation</strong> is really important within a team and sometimes it may be more of a challenge than I thought.</p>\n<h1 id=\"would-i-do-something-differently\">Would I do something differently?</h1>\n<p>If I could, I would probably spend more of my time organizing the project in terms of which tasks were more important and should be implemented, which was the main issue during development.</p>");
	

				const frontmatter$2 = {};
				const file$2 = "C:/Users/sandr/WebstormProjects/portfolio/src/data/projects/website-ae.md";
				const url$2 = undefined;

				const Content$2 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2())}`;
				});

const html$1 = () => "<h1 id=\"overview\">Overview</h1>\n<p>This is an ongoing project to develop the official website for the Informatics Club.</p>\n<h1 id=\"technologies-and-categories\">Technologies and Categories</h1>\n<ul>\n<li>Kotlin</li>\n<li>Spring Boot</li>\n<li>Svelte</li>\n</ul>\n<h1 id=\"what-did-i-do\">What did I do?</h1>\n<p>Since I started contributing to this project, <strong>most of my work was finishing and closing open PRs on the repository</strong>. The website’s backend is already very robust, which gave me the opportunity to experience a well-rounded Spring Boot project, with proper documentation and proper testing.</p>\n<p>On the frontend, I was responsible for <strong>one of the pages and helped people who are working on the team</strong>.</p>\n<h1 id=\"what-have-i-learned\">What have I learned?</h1>\n<p>This project has introduced me to Spring Boot and showed me how a robust and clean project looks like. The people before me did a great job and <strong>I personally appreciate a lot working on this project</strong>.</p>\n<h1 id=\"would-i-do-something-differently\">Would I do something differently?</h1>\n<p>As I’m currently contributing to this project, I can’t really talk about what I would do differently, but I plan to keep contributing.</p>";

				const frontmatter$1 = {};
				const file$1 = "C:/Users/sandr/WebstormProjects/portfolio/src/data/projects/website-niaefeup.md";
				const url$1 = undefined;

				const Content$1 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1())}`;
				});

const html = () => "<h1 id=\"overview\">Overview</h1>\n<p>This project represents the beginning of my journey of <strong>learning Golang</strong>. I wanted to implement something relatively reasonable but also <strong>interesting</strong> and after searching for a little bit it seemed like a good starting point.</p>\n<h1 id=\"technologies-and-categories\">Technologies and Categories</h1>\n<ul>\n<li>Golang</li>\n<li>Make</li>\n<li>Docker</li>\n<li>Viper (for configuration)</li>\n</ul>\n<h1 id=\"what-did-i-do\">What did I do?</h1>\n<p>Aside from most projects presented here, this was all me. From defining the interface to configurating files to the actual implementation.</p>\n<p>First, I started by defining the <strong>simulated network</strong> with different virtual machines using <strong>Docker</strong>. Then, I integrated <strong>Viper</strong>, a package to facilitate the integration of configuration files (yaml) and finally actually implemented the server.</p>\n<h1 id=\"what-have-i-learned\">What have I learned?</h1>\n<p>I learned a lot about the <strong>Go language syntax</strong> and some of its perks. Before starting this project I thought I had some idea of what the experience of writing Go was (from smaller projects) but it seemed somehow different.</p>\n<p>Another thing that I “discovered” was that I want to keep exploring this and work on something interesting and more challenging.</p>\n<h1 id=\"would-i-do-something-differently\">Would I do something differently?</h1>\n<p>If I could do it from scratch again, I’d probably use more complex structures and elements to create a more robust (and more verbose) codebase. But I also understand that this would slow down the project being finished.</p>";

				const frontmatter = {};
				const file = "C:/Users/sandr/WebstormProjects/portfolio/src/data/projects/tiny-rp.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const $$Astro = createAstro();
const prerender = false;
async function getStaticPaths() {
  return [
    // { params: { /* required */ }, props: { /* optional */ } },
    { params: { id: "everyday-dev" } },
    // [post] is the parameter
    { params: { id: "ltw-pre-loved" } },
    // [post] is the parameter
    { params: { id: "niployments" } },
    // [post] is the parameter
    { params: { id: "portifolio" } },
    // [post] is the parameter
    { params: { id: "simple-tomb-of-the-mask" } },
    // [post] is the parameter
    { params: { id: "uni" } },
    // [post] is the parameter
    { params: { id: "usettle" } },
    // [post] is the parameter
    { params: { id: "website-ae" } },
    // [post] is the parameter
    { params: { id: "website-niaefeup" } },
    // [post] is the parameter
    { params: { id: "tinyrp" } }
    // ...
  ];
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const projectsMap = {
    "everyday-dev": Content$9,
    "ltw-pre-loved": Content$8,
    "niployments": Content$7,
    "portifolio": Content$6,
    "simple-tomb-of-the-mask": Content$5,
    "uni": Content$4,
    "usettle": Content$3,
    "website-ae": Content$2,
    "website-niaefeup": Content$1,
    "tinyrp": Content
  };
  const { id = "" } = Astro2.params;
  const ProjectContent = id in projectsMap ? projectsMap[id] : null;
  const project = projects.find((project2) => project2.slug == id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col md:flex-row justify-between items-center mt-5"> <div class="flex gap-2"> <a class="text-white text-3xl font-bold no-underline"${addAttribute(`/projects/${project?.slug}`, "href")}>${project?.title}</a> <div class="text-gray-300 flex gap-1 items-center"> ${renderComponent($$result2, "Users", Users, {})} ${project?.num_contributors} </div> </div> <div class="flex flex-row gap-2 md:justify-between md:items-center"> <a${addAttribute(project?.github_link, "href")} class="text-[#c96442]"> ${renderComponent($$result2, "Github", Github, {})} </a> ${project?.link && renderTemplate`<a${addAttribute(project?.link, "href")} class="text-[#c96442]"> ${renderComponent($$result2, "SquareArrowOutUpRight", SquareArrowOutUpRight, {})} </a>`} </div> </div> ${ProjectContent ? renderTemplate`<article> ${renderComponent($$result2, "ProjectContent", ProjectContent, {})} </article>` : renderTemplate`<p>Project not found.</p>`}` })}`;
}, "C:/Users/sandr/WebstormProjects/portfolio/src/pages/projects/[id].astro", void 0);

const $$file = "C:/Users/sandr/WebstormProjects/portfolio/src/pages/projects/[id].astro";
const $$url = "/projects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
