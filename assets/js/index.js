'use strict';

AOS.init({
	duration: 1000,
	// once: true,
	anchorPlacement: 'top-bottom',
});

// // Portfolio data is now loaded from assets/data/portfolio.json
// let works = [];
// let projects = [];

// // Fetch portfolio data from JSON file
// async function loadPortfolioData() {
// 	try {
// 		const response = await fetch('./assets/data/portfolio.json');
// 		if (!response.ok) throw new Error('Failed to load portfolio data');
// 		const data = await response.json();
// 		works = data.works || [];
// 		projects = data.projects || [];
// 		return data;
// 	} catch (error) {
// 		console.error('Error loading portfolio data:', error);
// 		return null;
// 	}
// }

const works = [
    {
		"id": 1,
		"title": "Analytics Dashboard",
		"description": "Real-time data visualization platform",
		"longDescription": "A comprehensive analytics dashboard that provides real-time insights into business metrics. Features interactive charts, customizable widgets, and advanced filtering capabilities. Built with performance in mind to handle large datasets efficiently.",
		"image": "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzAzNDg1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		"technologies": ["React", "TypeScript", "D3.js", "TailwindCSS"],
		"category": "Web Application",
		"liveUrl": "#",
		"githubUrl": "#"
	},
	{
		"id": 2,
		"title": "E-Commerce Platform",
		"description": "Modern online shopping experience",
		"longDescription": "A full-featured e-commerce platform with seamless shopping cart, secure checkout, and inventory management. Includes admin panel for product management, order tracking, and customer analytics.",
		"image": "https://images.unsplash.com/photo-1615623705641-db34ad498cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAyOTEwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		"technologies": ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
		"category": "E-Commerce",
		"liveUrl": "#"
	},
	{
		"id": 3,
		"title": "Mobile Fitness App",
		"description": "Track workouts and nutrition",
		"longDescription": "A mobile-first fitness tracking application that helps users monitor their workouts, nutrition, and progress. Features include custom workout plans, meal logging, and progress visualization with charts and graphs.",
		"image": "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMzQxNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
		"technologies": ["React Native", "Firebase", "Redux", "Chart.js"],
		"category": "Mobile App",
		"githubUrl": "#"
	},
	{
		"id": 4,
		"title": "Analytics Dashboard",
		"description": "Real-time data visualization platform",
		"longDescription": "A comprehensive analytics dashboard that provides real-time insights into business metrics. Features interactive charts, customizable widgets, and advanced filtering capabilities. Built with performance in mind to handle large datasets efficiently.",
		"image": "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzAzNDg1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		"technologies": ["React", "TypeScript", "D3.js", "TailwindCSS"],
		"category": "Web Application",
		"liveUrl": "#",
		"githubUrl": "#"
	},
	{
		"id": 5,
		"title": "E-Commerce Platform",
		"description": "Modern online shopping experience",
		"longDescription": "A full-featured e-commerce platform with seamless shopping cart, secure checkout, and inventory management. Includes admin panel for product management, order tracking, and customer analytics.",
		"image": "https://images.unsplash.com/photo-1615623705641-db34ad498cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NzAyOTEwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
		"technologies": ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
		"category": "E-Commerce",
		"liveUrl": "#"
	},
	{
		"id": 6,
		"title": "Mobile Fitness App",
		"description": "Track workouts and nutrition",
		"longDescription": "A mobile-first fitness tracking application that helps users monitor their workouts, nutrition, and progress. Features include custom workout plans, meal logging, and progress visualization with charts and graphs.",
		"image": "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcwMzQxNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
		"technologies": ["React Native", "Firebase", "Redux", "Chart.js"],
		"category": "Mobile App",
		"githubUrl": "#"
	}
];

const projects = [
	{
		"id": 1,
		"title": "Creative Portfolio",
		"description": "Minimalist portfolio for artists",
		"longDescription": "A sleek and minimalist portfolio website designed for creative professionals. Features smooth page transitions, an image gallery with lightbox functionality, and a blog section for sharing insights and updates.",
		"image": "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3MDQwMTc2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
		"technologies": ["React", "Framer Motion", "Sanity CMS", "Vercel"],
		"category": "Portfolio",
		"liveUrl": "#",
		"githubUrl": "#"
	},
	{
		"id": 2,
		"title": "Social Hub",
		"description": "Connect and share with friends",
		"longDescription": "A social media platform that enables users to connect, share content, and engage with their community. Includes features like real-time messaging, post reactions, and user profiles with customizable themes.",
		"image": "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBsYXRmb3JtfGVufDF8fHx8MTc3MDQwMTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
		"technologies": ["Vue.js", "Socket.io", "MongoDB", "Express"],
		"category": "Social Platform",
		"liveUrl": "#"
	},
	{
		"id": 3,
		"title": "Landing Page Studio",
		"description": "High-converting landing pages",
		"longDescription": "A collection of modern, high-converting landing page templates designed for startups and businesses. Each template is fully responsive, optimized for performance, and includes sections for hero, features, testimonials, and CTAs.",
		"image": "https://images.unsplash.com/photo-1760008486593-a85315610136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjcmVhdGl2ZSUyMGxhbmRpbmclMjBwYWdlfGVufDF8fHx8MTc3MDM3OTQ3MHww&ixlib=rb-4.1.0&q=80&w=1080",
		"technologies": ["Next.js", "TailwindCSS", "MDX", "Cloudflare"],
		"category": "Marketing",
		"githubUrl": "#"
	},
	{
		"id": 4,
		"title": "Creative Portfolio",
		"description": "Minimalist portfolio for artists",
		"longDescription": "A sleek and minimalist portfolio website designed for creative professionals. Features smooth page transitions, an image gallery with lightbox functionality, and a blog section for sharing insights and updates.",
		"image": "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3MDQwMTc2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
		"technologies": ["React", "Framer Motion", "Sanity CMS", "Vercel"],
		"category": "Portfolio",
		"liveUrl": "#",
		"githubUrl": "#"
	},
	{
		"id": 5,
		"title": "Social Hub",
		"description": "Connect and share with friends",
		"longDescription": "A social media platform that enables users to connect, share content, and engage with their community. Includes features like real-time messaging, post reactions, and user profiles with customizable themes.",
		"image": "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBsYXRmb3JtfGVufDF8fHx8MTc3MDQwMTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
		"technologies": ["Vue.js", "Socket.io", "MongoDB", "Express"],
		"category": "Social Platform",
		"liveUrl": "#"
	},
	{
		"id": 6,
		"title": "Landing Page Studio",
		"description": "High-converting landing pages",
		"longDescription": "A collection of modern, high-converting landing page templates designed for startups and businesses. Each template is fully responsive, optimized for performance, and includes sections for hero, features, testimonials, and CTAs.",
		"image": "https://images.unsplash.com/photo-1760008486593-a85315610136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjcmVhdGl2ZSUyMGxhbmRpbmclMjBwYWdlfGVufDF8fHx8MTc3MDM3OTQ3MHww&ixlib=rb-4.1.0&q=80&w=1080",
		"technologies": ["Next.js", "TailwindCSS", "MDX", "Cloudflare"],
		"category": "Marketing",
		"githubUrl": "#"
	}
];


// On page load set the theme and render grids.
document.addEventListener('DOMContentLoaded', async function() {

	// // Load portfolio data first
	// await loadPortfolioData();

	const root = document.documentElement;
	const body = document.querySelector("body");

	// Header scroll event listener.
	const header = document.querySelector("header");

	if (header) {
		header.classList.toggle("scrolled", window.scrollY > 0);
		window.addEventListener("scroll", () => {
			header.classList.toggle("scrolled", window.scrollY > 0);
		});
	}

	// Theme toggle setup
	const btnToggleTheme = document.querySelector('.toggle-theme');

	function applyTheme(theme) {
		if (theme === 'dark') {
			root.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			root.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}

	// // Initialize theme from localStorage (default: light)
	// try {
	// 	const stored = localStorage.getItem('theme') || 'light';
	// 	applyTheme(stored);
	// } catch (e) {
	// 	// localStorage may be unavailable; default to light
	// 	applyTheme('light');
	// }

	if (btnToggleTheme) {
		btnToggleTheme.addEventListener('click', () => {
			const next = root.classList.contains('dark') ? 'light' : 'dark';
			applyTheme(next);
		});
	}

	// Menu toggle setup
	const btnToggleMenu = document.querySelector('.toggle-menu');

	if (btnToggleMenu) {
		btnToggleMenu.addEventListener('click', () => {
			const menuStatus = body.classList.contains('menu-opened');
			if (menuStatus) {
				body.classList.remove('menu-opened');
			} else {
				body.classList.add('menu-opened');
			}
		});
	}

	// Close menu button
	const btnCloseMenu = document.querySelector('.close-menu');

	if (btnCloseMenu) {
		btnCloseMenu.addEventListener('click', () => {
			const menuStatus = body.classList.contains('menu-opened');
			if (menuStatus) {
				body.classList.remove('menu-opened');
			}
		});
	}

	// Close menu if overlay is clicked
	const overlayContainer = document.querySelector('.overlay');

	if (overlayContainer) {
		overlayContainer.addEventListener('click', () => {
			const menuStatus = body.classList.contains('menu-opened');
			if (menuStatus) {
				body.classList.remove('menu-opened');
			}
		});
	}

	// Utility function to safely escape HTML to prevent XSS
	function escapeHTML(str) {
		return String(str || '')
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;');
	}

	// Render works grid items using insertAdjacentHTML for fast insertion
	function renderWorksGrid() {
		const container = document.querySelector("#works .grid") || document.querySelector("#works");
		if (container && works.length > 0) {
			const html = works.map((item, index) => {
				let delay = 200 * index;
				return `
				<div class="grid-item" data-id="${escapeHTML(item.id)}" data-src="works" data-aos="fade-up" data-aos-delay="${delay}" data-aos-anchor-placement="top-bottom">
					<div class="grid-content">
						<div class="grid-item-img">
							<img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}">
							<div class="grid-item-overlay">
								<span>View Details</span>
							</div>
						</div>
						<div class="grid-item-text">
							<div class="grid-item-text-sub">${escapeHTML(item.category || '')}</div>
							<h3 class="grid-item-text-title">${escapeHTML(item.title)}</h3>
							<p class="grid-item-text-desc">${escapeHTML(item.description)}</p>
						</div>
					</div>
				</div>`;
			}).join('');
			container.insertAdjacentHTML('beforeend', html);
		}
	}

	// Render projects grid items using insertAdjacentHTML for fast insertion
	function renderProjectsGrid() {
		const container = document.querySelector("#projects .grid") || document.querySelector("#projects");
		if (container && projects.length > 0) {
			const html = projects.map((item, index) => {
				const pills = (item.technologies || []).slice(0, 3).map(tech => `<span class="pill">${escapeHTML(tech)}</span>`).join('');
				let delay = 200 * index;
				return `
				<div class="grid-item" data-id="${escapeHTML(item.id)}" data-src="projects" data-aos="fade-up" data-aos-delay="${delay}" data-aos-anchor-placement="top-bottom">
					<div class="grid-content">
						<img class="grid-item-img" src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}">
						<div class="grid-item-overlay"></div>
						<div class="grid-item-text">
							<div>
								<div class="grid-item-sub">${escapeHTML(item.category || '')}</div>
								<h3 class="grid-item-title">${escapeHTML(item.title)}</h3>
								<p class="grid-item-desc">${escapeHTML(item.description)}</p>
								<div class="grid-item-pills">${pills}</div>
							</div>
						</div>
						<div class="grid-item-arrow" aria-hidden="true">
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
							</svg>
						</div>
					</div>
				</div>`;
			}).join('');
			container.insertAdjacentHTML('beforeend', html);
		}
	}

	// Render both grids
	renderWorksGrid();
	renderProjectsGrid();

	const eventWorksModal = document.querySelector('#works .grid');
	if (eventWorksModal) {
		eventWorksModal.addEventListener('click', function(e) {
			const el = e.target.closest('.grid-item[data-id][data-src]');
			if (!el) return;
			if (el.dataset.src !== 'works') return;
			renderModal(el.dataset.src, el.dataset.id);
		});
	}

	const eventProjectsModal = document.querySelector('#projects .grid');
	if (eventProjectsModal) {
		eventProjectsModal.addEventListener('click', function(e) {
			const el = e.target.closest('.grid-item[data-id][data-src]');
			if (!el) return;
			if (el.dataset.src !== 'projects') return;
			renderModal(el.dataset.src, el.dataset.id);
		});
	}

	const eventCloseModal = document.querySelector('#modal-overlay .modal-close');
	if (eventCloseModal) {
		eventCloseModal.addEventListener('click', function(e) {
			destroyModal();
		});
	}

	// Add event listener to close modal when clicking only the overlay (not modal content)
	const modalOverlay = document.querySelector('.modal-overlay');
	if (modalOverlay) {
		modalOverlay.addEventListener('click', function (e) {
			if (e.target === modalOverlay) {
				destroyModal();
			}
		});
	}

	function renderModal(type, id) {
		const modalOverlay = document.getElementById('modal-overlay');

		const types = ['works', 'projects'];
		if (!types.includes(type)) return;

		id = Number(id);

		let data = null;

		switch (type) {
			case 'works':
				data = works.find((item) => { if (item.id === id) { return item; } });
				break;
			case 'projects':
				data = projects.find((item) => { if (item.id === id) { return item; } });
				break;
		}

		const pills = (data.technologies || []).map(tech => `<span class="pill">${escapeHTML(tech)}</span>`).join('');
		const liveUrl = (data.liveUrl) ? data.liveUrl : '';
		const githubUrl = (data.githubUrl) ? data.githubUrl : '';

		let linksHtml = '';
		if (liveUrl) {
			linksHtml += `<a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="modal-link btn-live">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M15 3h6v6"></path>
					<path d="M10 14 21 3"></path>
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
				</svg>
				View Live
			</a>`;
		}
		if (githubUrl) {
			linksHtml += `<a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="modal-link btn-github">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
					<path d="M9 18c-4.51 2-5-2-7-2"></path>
				</svg>
				Source Code
			</a>`;
		}

		const html = `
			<div class="modal-img">
				<img src="${escapeHTML(data.image)}" alt="${escapeHTML(data.title)}">
				<div class="modal-img-overlay"></div>
			</div>
			<div class="modal-text">
				<h2 class="modal-text-title">${escapeHTML(data.title)}</h2>
				<p class="modal-text-sub">${escapeHTML(data.category || '')}</p>
				<p class="modal-text-desc">${escapeHTML(data.longDescription)}</p>
				<div class="modal-technologies">
					<h3>Technologies Used</h3>
					<div class="modal-technology-list">${pills}</div>
				</div>
				<div class="modal-link">
					${linksHtml}
				</div>
			</div>`;

		const container = document.querySelector("#modal-overlay .modal-content");
		container.textContent = '';
		container.insertAdjacentHTML('beforeend', html);

		modalOverlay.classList.add('active');
	}

	function destroyModal() {
		const modalOverlay = document.getElementById('modal-overlay');

		modalOverlay.classList.remove('active');
	}

	const form = document.getElementById("contact-form");
	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		const btn = form.querySelector('.btn-contact[type="submit"]');
		btn.setAttribute('disabled', '');

		emailjs.init("MaNOgTpsGcwSxAqNR");

		try {
			const response = await emailjs.sendForm(
				"service_qkgpjvj",
				"template_4yer42b",
				form
			);

			// status.textContent = "Message sent successfully!";
			form.reset();

			if (grecaptcha) {
				grecaptcha.reset();
			}

			btn.removeAttribute('disabled', '');
		} catch (err) {
			// status.textContent = "Failed to send message, please try later.";
			// console.error("EmailJS Error:", err);

			btn.removeAttribute('disabled', '');
		}
	});
});

/* legacy API: keep compatibility if something calls themeToggle() */
function themeToggle() {
	const root = document.documentElement;
	const next = root.classList.contains('dark') ? 'light' : 'dark';
	// trigger same behavior as the click handler
	const toggleBtn = document.querySelector('.toggle-theme');
	if (toggleBtn) toggleBtn.click();
	return next;
}