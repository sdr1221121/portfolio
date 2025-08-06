import { c as createLucideIcon } from './createLucideIcon_Deyocb4g.mjs';

const Github = createLucideIcon("github", [["path", { "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }], ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]]);

const SquareArrowOutUpRight = createLucideIcon("square-arrow-out-up-right", [["path", { "d": "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" }], ["path", { "d": "m21 3-9 9" }], ["path", { "d": "M15 3h6v6" }]]);

const Users = createLucideIcon("users", [["path", { "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }], ["path", { "d": "M16 3.128a4 4 0 0 1 0 7.744" }], ["path", { "d": "M22 21v-2a4 4 0 0 0-3-3.87" }], ["circle", { "cx": "9", "cy": "7", "r": "4" }]]);

const projects = [
	{
		title: "FarmIT",
		slug: "farmit",
		num_contributors: 10,
		description: "Developed a digital agricultural assistant for Sociedade Agrícola Casal da Cotovia using Java Spring Boot, Next.js, and SQL. The platform enables farm management with activity logging, crop recommendations, weather data integration, and a support chatbot.",
		github_link: "https://github.com/sdr1221121/farmit",
		active_link: true,
		categories: [
			"java",
			"spring-boot",
			"nextjs",
			"typescript",
			"sql",
			"docker"
		]
	},
	{
		title: "Bumba Jobs",
		slug: "bumbajobs",
		num_contributors: 4,
		description: "Job board platform tailored for blue-collar and informal workers. Designed to simplify job discovery and hiring through a mobile-first, inclusive experience.",
		link: "https://bumbajobs.com",
		active_link: true,
		categories: [
			"wordpress"
		]
	}
];

export { Github as G, SquareArrowOutUpRight as S, Users as U, projects as p };
