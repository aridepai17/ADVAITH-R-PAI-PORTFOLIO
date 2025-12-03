const navLinks = [
	{
		id: 1,
		name: "Projects",
		type: "finder",
	},
	{
		id: 3,
		name: "Contact",
		type: "contact",
	},
	{
		id: 4,
		name: "Resume",
		type: "resume",
	},
];

const navIcons = [
	{
		id: 1,
		img: "/icons/wifi.svg",
	},
	{
		id: 2,
		img: "/icons/search.svg",
	},
	{
		id: 3,
		img: "/icons/user.svg",
	},
	{
		id: 4,
		img: "/icons/mode.svg",
	},
];

const dockApps = [
	{
		id: "finder",
		name: "Portfolio", // was "Finder"
		icon: "finder.png",
		canOpen: true,
	},
	{
		id: "safari",
		name: "Articles", // was "Safari"
		icon: "safari.png",
		canOpen: true,
	},
	{
		id: "photos",
		name: "Gallery", // was "Photos"
		icon: "photos.png",
		canOpen: true,
	},
	{
		id: "contact",
		name: "Contact", // or "Get in touch"
		icon: "contact.png",
		canOpen: true,
	},
	{
		id: "terminal",
		name: "Skills", // was "Terminal"
		icon: "terminal.png",
		canOpen: true,
	},
	{
		id: "trash",
		name: "Archive", // was "Trash"
		icon: "trash.png",
		canOpen: false,
	},
];

const blogPosts = [
	/* {
		id: 1,
		date: "Sep 2, 2025",
		title: "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
		image: "/images/blog1.png",
		link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
	},
	{
		id: 2,
		date: "Aug 28, 2025",
		title: "The Ultimate Guide to Mastering Three.js for 3D Development",
		image: "/images/blog2.png",
		link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
	},
	{
		id: 3,
		date: "Aug 15, 2025",
		title: "The Ultimate Guide to Mastering GSAP Animations",
		image: "/images/blog3.png",
		link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
	},
    */
];

const techStack = [
	{
		category: "Frontend",
		items: ["React.js", "Next.js", "TypeScript"],
	},
	/* {
		category: "Mobile",
		items: ["React Native", "Expo"],
	}, 
    */
	{
		category: "Styling",
		items: ["Tailwind CSS", "CSS"],
	},
	{
		category: "Backend",
		items: ["Node.js"],
	},
	{
		category: "Database",
		items: ["MongoDB", "PostgreSQL", "MySQL"],
	},
	{
		category: "Dev Tools",
		items: ["Git", "GitHub", "Vercel", "Cursor IDE"],
	},
];

const socials = [
	{
		id: 1,
		text: "Github",
		icon: "/icons/github.svg",
		bg: "#f4656b",
		link: "https://github.com/aridepai17",
	},
	/* {
		id: 2,
		text: "Platform",
		icon: "/icons/atom.svg",
		bg: "#4bcb63",
		link: "https://jsmastery.com/",
	},
	*/
	{
		id: 3,
		text: "Twitter/X",
		icon: "/icons/twitter.svg",
		bg: "#ff866b",
		link: "https://x.com/rpaiv17",
	},
	/* {
		id: 4,
		text: "LinkedIn",
		icon: "/icons/linkedin.svg",
		bg: "#05b6f6",
		link: "https://www.linkedin.com/company/javascriptmastery/posts/?feedView=all",
	}, */
];

const photosLinks = [
	{
		id: 1,
		icon: "/icons/gicon1.svg",
		title: "Library",
	},
	{
		id: 2,
		icon: "/icons/gicon2.svg",
		title: "Memories",
	},
	{
		id: 3,
		icon: "/icons/file.svg",
		title: "Places",
	},
	{
		id: 4,
		icon: "/icons/gicon4.svg",
		title: "People",
	},
	{
		id: 5,
		icon: "/icons/gicon5.svg",
		title: "Favorites",
	},
];

const gallery = [
	{
		id: 1,
		img: "/images/library1.jpg",
		album: 1,
	},
	{
		id: 101,
		img: "/images/library2.jpg",
		album: 1,
	},
	{
		id: 1001,
		img: "/images/library3.jpg",
		album: 1,
	},
	{
		id: 2,
		img: "/images/memories1.jpg",
		album: 2,
	},
	{
		id: 3,
		img: "/images/places1.jpg",
		album: 3,
	},
	{
		id: 301,
		img: "/images/places2.jpg",
		album: 3,
	},
	{
		id: 4,
		img: "/images/people1.jpg",
		album: 4,
	},
	{
		id: 401,
		img: "/images/people2.jpg",
		album: 4,
	},
	{
		id: 5,
		img: "/images/favorites1.jpg",
		album: 5,
	},
	{
		id: 50,
		img: "/images/favorites2.jpg",
		album: 5,
	},
	{
		id: 500,
		img: "/images/favorites3.jpg",
		album: 5,
	},
	{
		id: 5000,
		img: "/images/favorites4.jpg",
		album: 5,
	},
	{
		id: 5001,
		img: "/images/favorites5.jpg",
		album: 5,
	},
];

export {
	navLinks,
	navIcons,
	dockApps,
	blogPosts,
	techStack,
	socials,
	photosLinks,
	gallery,
};

const WORK_LOCATION = {
	id: 1,
	type: "work",
	name: "Work",
	icon: "/icons/work.svg",
	kind: "folder",
	children: [
		// ▶ Project 1
		{
			id: 5,
			name: "DijkstraFlow",
			icon: "/images/folder.png",
			kind: "folder",
			position: "top-10 left-5", // icon position inside Finder
			windowPosition: "top-[1vh] left-3", // optional: Finder window position
			children: [
				{
					id: 1,
					name: "DijkstraFlow.txt",
					icon: "/images/txt.png",
					kind: "file",
					fileType: "txt",
					position: "top-5 left-10",
					description: [
						"DijkstraFlow is a comprehensive, interactive web application designed to help students and developers understand algorithms and data structures through real-time visualizations. Whether you're preparing for technical interviews, studying computer science, or simply curious about how algorithms work, DijkstraFlow provides an intuitive and engaging learning experience.",
					],
				},
				{
					id: 2,
					name: "DijkstraFlow",
					icon: "/images/safari.png",
					kind: "file",
					fileType: "url",
					href: "https://dijkstraflowalgo.vercel.app/",
					position: "top-10 right-20",
				},
				{
					id: 4,
					name: "DijkstraFlow.png",
					icon: "/images/image.png",
					kind: "file",
					fileType: "img",
					position: "top-52 right-80",
					imageUrl: "/images/homepage.png",
				},
			],
		},

		// ▶ Project 2
		{
			id: 6,
			name: "Selectra",
			icon: "/images/folder.png",
			kind: "folder",
			position: "top-10 left-5",
			windowPosition: "top-[20vh] left-5",
			children: [
				{
					id: 1,
					name: "Selectra.txt",
					icon: "/images/txt.png",
					kind: "file",
					fileType: "txt",
					position: "top-5 right-10",
					description: [
						"AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
						"Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
						"Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
						"It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
					],
				},
				{
					id: 2,
					name: "Selectra",
					icon: "/images/safari.png",
					kind: "file",
					fileType: "url",
					href: "https://selectra-nine.vercel.app/",
					position: "top-20 left-20",
				},
				{
					id: 4,
					name: "Selectra.png",
					icon: "/images/image.png",
					kind: "file",
					fileType: "img",
					position: "top-52 left-80",
					imageUrl: "/images/resumereview.png",
				},
			],
		},

		// ▶ Project 3
		{
			id: 7,
			name: "Caffiend",
			icon: "/images/folder.png",
			kind: "folder",
			position: "top-10 left-5",
			windowPosition: "top-[33vh] left-6",
			children: [
				{
					id: 1,
					name: "Caffiend.txt",
					icon: "/images/txt.png",
					kind: "file",
					fileType: "txt",
					position: "top-5 left-10",
					description: [
						"Caffiend is a web application designed for coffee enthusiasts to track their caffeine consumption and spending habits. The app allows users to monitor their coffee intake, calculate current caffeine levels in their system, and analyze their coffee consumption patterns over time.",
					],
				},
				{
					id: 2,
					name: "Caffiend",
					icon: "/images/safari.png",
					kind: "file",
					fileType: "url",
					href: "https://caffiendcoffeetracker.netlify.app/",
					position: "top-10 right-20",
				},
				{
					id: 4,
					name: "Caffiend.png",
					icon: "/images/image.png",
					kind: "file",
					fileType: "img",
					position: "top-52 right-80",
					imageUrl: "/images/caffiendapp2.png",
				},
			],
		},
	],
};

const ABOUT_LOCATION = {
	id: 2,
	type: "about",
	name: "About me",
	icon: "/icons/info.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "Me",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-10 left-5",
			imageUrl: "/images/favorites5.jpg",
		},
		{
			id: 2,
			name: "Casual",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-28 right-72",
			imageUrl: "/images/favorites2.jpg",
		},
		{
			id: 3,
			name: "Work",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-52 left-80",
			imageUrl: "/images/people1.jpg",
		},
		{
			id: 4,
			name: "About Me.txt",
			icon: "/images/txt.png",
			kind: "file",
			fileType: "txt",
			position: "top-60 left-5",
			subtitle: "Meet the Developer Behind the Code",
			image: "/images/library1.jpg",
			description: [
				"If you’ve ever wondered what happens when a computer science student has too much coffee and not enough sleep, you’ve come to the right place! This collection of projects is the result of countless late-night coding sessions, questionable decisions, and an occasional existential crisis.",
			],
		},
	],
};

const RESUME_LOCATION = {
	id: 3,
	type: "resume",
	name: "Resume",
	icon: "/icons/file.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "Resume.pdf",
			icon: "/images/pdf.png",
			kind: "file",
			fileType: "pdf",
		},
	],
};

/*
const TRASH_LOCATION = {
	id: 4,
	type: "trash",
	name: "Trash",
	icon: "/icons/trash.svg",
	kind: "folder",
	children: [
		{
			id: 1,
			name: "trash1.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-10 left-10",
			imageUrl: "/images/trash-1.png",
		},
		{
			id: 2,
			name: "trash2.png",
			icon: "/images/image.png",
			kind: "file",
			fileType: "img",
			position: "top-40 left-80",
			imageUrl: "/images/trash-2.png",
		},
	],
};
*/

export const locations = {
	work: WORK_LOCATION,
	about: ABOUT_LOCATION,
	resume: RESUME_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
	finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
	imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
