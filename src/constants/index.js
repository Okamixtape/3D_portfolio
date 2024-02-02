import {
	burger,
	calendar,
	dashboardApplication,
	deliveryTruck,
	digitalApplication,
	game,
	landingPage,
	lotion1,
} from "../assets/images";
import {
	kasa,
	contact,
	css,
	gameOn,
	express,
	figma,
	git,
	github,
	html,
	javascript,
	jira,
	linkedin,
	mongodb,
	mui,
	nodejs,
	pricewise,
	react,
	redux,
	sass,
	snapgram,
	summiz,
	tailwindcss,
	threads,
	typescript,
} from "../assets/icons";

export const skills = [
	{
		imageUrl: html,
		name: "HTML",
		type: "Frontend",
	},
	{
		imageUrl: css,
		name: "CSS",
		type: "Frontend",
	},
	{
		imageUrl: sass,
		name: "Sass",
		type: "Frontend",
	},
	{
		imageUrl: tailwindcss,
		name: "Tailwind CSS",
		type: "Frontend",
	},
	{
		imageUrl: javascript,
		name: "JavaScript",
		type: "Frontend",
	},
	{
		imageUrl: typescript,
		name: "TypeScript",
		type: "Frontend",
	},
	{
		imageUrl: react,
		name: "React",
		type: "Frontend",
	},
	{
		imageUrl: redux,
		name: "Redux",
		type: "State Management",
	},
	{
		imageUrl: figma,
		name: "Figma",
		type: "Design",
	},
	{
		imageUrl: mui,
		name: "Material-UI",
		type: "Frontend",
	},
	{
		imageUrl: nodejs,
		name: "Node.js",
		type: "Backend",
	},
	{
		imageUrl: express,
		name: "Express",
		type: "Backend",
	},
	{
		imageUrl: mongodb,
		name: "MongoDB",
		type: "Database",
	},
	{
		imageUrl: git,
		name: "Git",
		type: "Version Control",
	},
	{
		imageUrl: github,
		name: "GitHub",
		type: "Version Control",
	},
	{
		imageUrl: jira,
		name: "Jira",
		type: "Project Management",
	},
];

export const experiences = [
	{
		company_name: "Skincare brand website",
		icon: lotion1,
		iconBg: "#f4e5f0",
		points: [
			"Led bilingual website translations and UI/UX enhancements for German and French versions, enhancing user navigation and experience.",
			"Implemented responsive design using advanced CSS, optimizing mobile user experience.",
			"Developed javascript based tooltip dynamics and integrated cookie management scripts, improving website accessibility and compliance.",
		],
	},
	{
		company_name: "Skincare brand landing page",
		icon: landingPage,
		iconBg: "#e0f9fe",
		points: [
			"Led the implementation of bilingual landing page adaptations, focusing on responsive design for every language version.",
			"Managed the integration and deployment of the project across multiple environments, coordinating with team members for efficient execution.",
			"Conducted comprehensive landing page audits, including Google Lighthouse, to optimize performance and user experience across various browsers.",
			"Ensured legal and SEO compliance, integrating cookie management solutions and handling W3C code validation.",
			"Streamlined content generation and management processes, focusing on multilingual support and accessibility standards.",
		],
	},
	{
		company_name: "Skincare brand digital sales application",
		icon: digitalApplication,
		iconBg: "#fdf8dd",
		points: [
			"Optimized script configurations and environment variables for effective build process alignment.",
			"Managed version control and environment setup, ensuring up-to-date configurations for continuous integration.",
			"Executed development sprints for a digital sales catalogue, coordinating closely with designers on Figma feedback integration.",
			"Managed product content using JIRA for project documentation and task tracking.",
			"Focused on responsive design with an emphasis on interactive elements and buttons.",
		],
	},
	{
		company_name: "Vehicle rental website redesign",
		icon: deliveryTruck,
		iconBg: "#d1ead2",
		points: [
			"Implemented and refined UI elements such as sliders and icon.",
			"Managed icon naming conventions and integration, ensuring consistency across the application.",
			"Participated in the design and development process, using Figma for collaborative feedback and JIRA for project management.",
		],
	},
	{
		company_name: "Car manufacturer KPI dashboard application",
		icon: dashboardApplication,
		iconBg: "#ffe4b2",
		points: [
			"Conducted comprehensive Cypress testing, focusing on listing all user stories in a structured format for efficient tracking and execution.",
			"Implemented detailed test scenarios for UI components, ensuring proper display and functionality of elements such as filters, funnels, and widgets.",
			"Participated in the code refactor process, aiming for cleaner code by organizing and identifying elements with data-testIds.",
			"Developed and validated user stories for key application features, including account creation, login, and password recovery, to ensure a seamless user experience.",
		],
	},
	{
		company_name: "Sport gym reservation website",
		icon: calendar,
		iconBg: "#ffcccc",
		points: [
			"Developed content management features using WordPress to enhance the website's flexibility.",
			"Implemented new website blocks, including interactive elements like reviews and offers.",
			"Ensured responsive design for a seamless user experience on both desktop and mobile devices.",
			"Created dynamic and responsive offer cards and incorporated a slider with pagination and navigation.",
		],
	},
	{
		company_name: "Burger restaurant chain website",
		icon: burger,
		iconBg: "#edd4d4",
		points: [
			"Implemented conditional handling based on different restaurant services.",
			"Configured API keys for Google Maps and collaborated effectively with development and DevOps teams for seamless integration.",
			"Conducted thorough email testing to validate links, ensuring correct redirection.",
			"Implemented responsive design principles for different pages, optimizing background images, and suitable font styles for text content.",
			"Integrated YouTube videos with custom styling and enhanced player buttons, providing an engaging multimedia experience for users.",
			"Managed menu and page configurations efficiently within the Back-Office system and followed best practices for version control, including pull requests and deployments.",
		],
	},
	{
		company_name: "JS13K / JavaScript coding competition",
		icon: game,
		iconBg: "#f9e7be",
		points: [
			"Customized UI elements like CTA and tutorial cards for improved visual appeal, focusing on user engagement.",
			"Optimized game graphics, balancing between PNG and SVG formats for minimal file size.",
			"Constructed game components adhering to class naming conventions and utilized static JSON arrays for efficient data management.",
			"Implemented core game mechanics including a scoring system, countdown timer, and game variable initialization.",
			"Designed and developed game UI, including start/end screens and interactive gameplay elements to enhance player challenge.",
		],
	},
];

export const socialLinks = [
	{
		name: "Contact",
		iconUrl: contact,
		link: "/contact",
	},
	{
		name: "GitHub",
		iconUrl: github,
		link: "https://github.com/Okamixtape",
	},
	{
		name: "LinkedIn",
		iconUrl: linkedin,
		link: "https://www.linkedin.com/in/loup-aubour-front-end-dev",
	},
];

export const projects = [
	{
		iconUrl: kasa,
		theme: "btn-back-orange",
		name: "Website Redesign with ReactJS",
		description:
			"Redesigned the KASA website, a platform for peer-to-peer housing rentals, using ReactJS. Created a more modern and user-friendly interface, including various React components and routes using React Router.",
		link: "https://okamixtape.github.io/Kasa/",
	},
	{
		iconUrl: gameOn,
		theme: "btn-back-red",
		name: "JS Landing Page",
		description:
			"Completed the JavaScript code for a landing page form. Added confirmation on successful submission, validation/error messages, and implemented form entries.",
		link: "https://okamixtape.github.io/GameOn-website-FR/starterOnly/index.html",
	},
];
