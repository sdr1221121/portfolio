import { c as createLucideIcon } from './createLucideIcon_B304YeZB.mjs';

const Github = createLucideIcon("github", [["path", { "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }], ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]]);

const SquareArrowOutUpRight = createLucideIcon("square-arrow-out-up-right", [["path", { "d": "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" }], ["path", { "d": "m21 3-9 9" }], ["path", { "d": "M15 3h6v6" }]]);

const Users = createLucideIcon("users", [["path", { "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["path", { "d": "M16 3.128a4 4 0 0 1 0 7.744" }], ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }], ["circle", { "cx": "9", "cy": "7", "r": "4" }]]);

const projects = [
	{
		title: "uSettle",
		slug: "usettle",
		num_contributors: 4,
		description: "Conceptualized and developed an expense-sharing mobile application using Flutter during the Shift Appens hackathon.",
		github_link: "https://github.com/rubuy-74/usettle",
		active_link: true,
		categories: [
			"flutter",
			"firebase"
		]
	},
	{
		title: "tinyrp",
		slug: "tinyrp",
		num_contributors: 1,
		description: "Implemented a reverse proxy server in Golang.",
		github_link: "https://github.com/rubuy-74/tinyrp",
		active_link: true,
		categories: [
			"golang",
			"docker",
			"make",
			"viper"
		]
	},
	{
		title: "everyday.dev",
		slug: "everyday-dev",
		num_contributors: 4,
		description: "Built a full-stack web application inspired by the Daily.dev platform using Laravel, enabling developers to create and share tech news.",
		github_link: "https://github.com/rubuy-74/LBAW-everyday.dev",
		link: "https://everyday-dev.rubuy.me",
		active_link: true,
		categories: [
			"laravel",
			"html",
			"javascript",
			"tailwindcss",
			"postgresql"
		]
	},
	{
		title: "Website AE",
		slug: "website-ae",
		num_contributors: 7,
		description: "Created a modern website for the FEUP student association using Next.js and Payload CMS.",
		github_link: "https://github.com/rubuy-74/website-ae",
		link: "https://website-ae-five.vercel.app/",
		active_link: true,
		categories: [
			"nextjs",
			"tailwindcss",
			"payloadCMS",
			"docker"
		]
	},
	{
		title: "LTW Pre-Loved",
		slug: "ltw-pre-loved",
		num_contributors: 3,
		description: "Developed a OLX clone from scratch using pure HTML,CSS, Javascript and PHP.",
		github_link: "https://github.com/rubuy-74/ltw-pre-loved",
		link: "https://ltw-preloved.rubuy.me",
		active_link: true,
		categories: [
			"html",
			"css",
			"javascript",
			"php",
			"sqlite"
		]
	},
	{
		title: "NIployments",
		slug: "niployments",
		num_contributors: 12,
		description: "Contributed to restructuring the infrastructure of the University’s Informatics Club through a collaborative development effort.",
		github_link: "https://github.com/niaefeup/niployments",
		active_link: true,
		categories: [
			"devops",
			"kubernetes",
			"ansible",
			"linux",
			"docker"
		]
	},
	{
		title: "Website NIAEFEUP",
		slug: "website-niaefeup",
		num_contributors: 7,
		description: "Currently contributing to both the backend and frontend for the official website of the University’s Informatics Club.",
		github_link: "https://github.com/niaefeup/website-niaefeup-backend",
		active_link: true,
		categories: [
			"kotlin",
			"sprint-boot",
			"svelte"
		]
	},
	{
		title: "Simple Tomb of the Mask",
		slug: "simple-tomb-of-the-mask",
		num_contributors: 3,
		description: "Created a simple clone of the Tomb of the Mask game using the Laterna framework in Java.",
		github_link: "https://github.com/rubuy-74/feup-ldts",
		active_link: true,
		categories: [
			"java",
			"lanterna",
			"pitest"
		]
	},
	{
		title: "UNI",
		slug: "uni",
		num_contributors: 63,
		description: "Participated in a large-scale project over the course of a year, now actively used by over 5,000 students.",
		github_link: "https://github.com/niaefeup/uni",
		active_link: true,
		categories: [
			"flutter"
		]
	}
];

export { Github as G, SquareArrowOutUpRight as S, Users as U, projects as p };
