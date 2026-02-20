'use strict';

AOS.init({
	duration: 1000,
	// once: true,
	anchorPlacement: 'center-bottom',
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
		"title": "Barossa",
		"subtitle": "",
		"description": "Australia’s premier wine tourism destination platform",
		"longDescription": "Led end-to-end development of a high-traffic tourism website using WordPress and Elementor. Translated high-fidelity Figma designs into pixel-perfect, responsive pages. Built custom Elementor widgets and plugins to integrate dynamic tourism data (ATDW API) and enable scalable content management. Optimized performance, SEO, and cross-browser reliability for long-term stability.",
		"image": "assets/img/portfolio/web-barossa.jpg",
		"client": "Barossa",
		"date": "Nov 2024",
		"technologies": ["PHP", "WordPress", "Elementor", "JavaScript", "MySQL", "Figma", "ATDW API", "SEO"],
		"category": "Enterprise WordPress Development",
		"liveUrl": "https://www.barossa.com/",
		"githubUrl": "",
	},
	{
		"id": 2,
		"title": "ViewRetreats",
		"subtitle": "",
		"description": "Luxury wellness retreat booking and content platform",
		"longDescription": "Contributed to the migration and modernization of a large-scale travel platform to OctoberCMS. Rebuilt legacy booking components, migrated user data, and optimized database queries for performance. Integrated Expedia API services to enhance booking functionality. Following the platform’s pivot from a transactional booking system to a content-driven travel publication, delivered UI/UX improvements, reusable components, and architectural enhancements to support the new direction.",
		"image": ["assets/img/portfolio/web-viewretreats-laravel.jpg", "assets/img/portfolio/web-viewretreats-wp.jpg"],
		"client": "ViewRetreats",
		"date": "Jan 2021",
		"technologies": ["PHP", "OctoberCMS", "WordPress", "Elementor", "JavaScript", "jQuery", "MySQL", "Expedia API", "Bootstrap", "Figma"],
		"category": "Travel Platform",
		"liveUrl": "https://www.viewretreats.com/",
		"githubUrl": "",
	},
	{
		"id": 3,
		"title": "Punchmark",
		"description": "Market-leading SaaS platform for jewelry retailers",
		"longDescription": "Maintained and enhanced a high-volume SaaS platform serving jewelry businesses. Implemented front-end and back-end feature improvements using PHP and JavaScript. Optimized MySQL queries for performance and scalability. Assisted in UI enhancements, debugging, and production-level support within a structured development environment.",
		"image": "assets/img/portfolio/web-punchmark.jpg",
		"client": "Punchmark",
		"date": "Apr 2018",
		"technologies": ["PHP", "JavaScript", "jQuery", "MySQL", "Bootstrap"],
		"category": "SaaS Platform / E-Commerce",
		"liveUrl": "https://www.punchmark.com/",
		"githubUrl": "",
	},
	{
		"id": 4,
		"title": "Flavor Producers",
		// "subtitle": "(Lorimer Innovations)",
		"description": "Back-end system modernization and performance optimization",
		"longDescription": "Modernized legacy web application components by refactoring outdated UI and backend structures. Improved database query efficiency and optimized data presentation layers. Conducted QA testing and systematic debugging to enhance system stability and responsiveness.",
		"image": "assets/img/portfolio/web-flavorworks.jpg",
		"client": "Lorimer Innovations Llc",
		"date": "Feb 2017",
		"technologies": ["PHP", "JavaScript", "MySQL", "Bootstrap", "DataTables"],
		"category": "Web Application Modernization",
		"liveUrl": "",
		"githubUrl": "",
	},
	{
		"id": 5,
		"title": "Promotional Wristbands",
		"description": "Custom Laravel-based e-commerce platform",
		"longDescription": "Collaborated with another developer to build a full-featured e-commerce platform using Laravel. Designed database architecture, implemented authentication logic, and integrated payment gateways including PayPal and Authorize.Net. Developed secure checkout workflows and optimized transactional processes for scalability and reliability.",
		"image": "assets/img/portfolio/web-promotionalwristbands.jpg",
		"client": "Promotional Wristbands",
		"date": "Jul 2016",
		"technologies": ["Laravel", "PHP", "MySQL", "JavaScript", "jQuery", "Bootstrap", "PayPal API", "Authorize.Net"],
		"category": "Custom E-Commerce Development",
		"liveUrl": "https://www.promotionalwristband.com/",
		"githubUrl": "",
	},
    {
		"id": 6,
		"title": "NativeAdBuzz",
		"description": "Enterprise advertising platform redevelopment",
		"longDescription": "Collaborated in a team-driven redevelopment of a large-scale advertising platform using Laravel. Rebuilt core administrative dashboards, user authentication systems, and payment integrations. Refactored legacy logic, improved code structure, and enhanced system performance across both front-end and back-end layers.",
		"image": "assets/img/portfolio/web-nativeadbuzz.jpg",
		"client": "Futuristech Inc.",
		"date": "Jul 2015",
		"technologies": ["Laravel", "PHP", "MySQL", "JavaScript", "jQuery", "Bootstrap", "REST APIs"],
		"category": "Advertising Platform / Full-Stack Development",
		"liveUrl": "https://www.nativeadbuzz.com/",
		"githubUrl": "",
	},
    {
		"id": 7,
		"title": "Design-to-Code Engineering",
		"description": "Transforming modern design systems into pixel-perfect, responsive web interfaces",
		"longDescription": "Converted high-fidelity design mockups (Figma, PSD, and other design tools) into responsive, production-ready front-end implementations. Focused on pixel accuracy, accessibility standards, cross-browser compatibility, and performance optimization. Collaborated with designers and stakeholders to translate visual concepts into scalable UI components while maintaining clean, maintainable code architecture.",
		"image": "assets/img/portfolio/web-dasm.jpg",
		"client": "",
		"date": "Since 2013",
		"technologies": ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design", "Cross-Browser Testing"],
		"category": "Front-End Engineering / UI Implementation",
		"liveUrl": "",
		"githubUrl": "",
	},
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

	// // Resume download button (footer)
	// const btnResume = document.querySelectorAll('.link-resume');
	// if (btnResume) {
	// 	btnResume.forEach(btn => {
	// 		if (btn) {
	// 			btn.addEventListener('click', function() {
	// 				// For browsers that support download attribute, this is enough.
	// 				// For others, force download via JS fallback
	// 				if (!this.hasAttribute('download')) {
	// 					e.preventDefault();
	// 					window.open(this.getAttribute('href'), '_blank');
	// 				}
	// 			});
	// 		}
	// 	});
	// }

	// // Load portfolio data first
	// await loadPortfolioData();

	const root = document.documentElement;
	const body = document.querySelector("body");

	// Header scroll event listener.
	const header = document.querySelector("header");

	if (header) {
		header.classList.toggle("scrolled", window.scrollY > 0);
		window.addEventListener("scroll", function() {
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

	if (btnToggleTheme) {
		btnToggleTheme.addEventListener('click', function() {
			const next = root.classList.contains('dark') ? 'light' : 'dark';
			applyTheme(next);
		});
	}

	// Menu toggle setup
	const btnToggleMenu = document.querySelector('.toggle-menu');
	if (btnToggleMenu) {
		btnToggleMenu.addEventListener('click', function() {
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
		btnCloseMenu.addEventListener('click', function() {
			const menuStatus = body.classList.contains('menu-opened');
			if (menuStatus) {
				body.classList.remove('menu-opened');
			}
		});
	}

	// Close menu if overlay is clicked
	const overlayContainer = document.querySelector('.overlay');
	if (overlayContainer) {
		overlayContainer.addEventListener('click', function() {
			const menuStatus = body.classList.contains('menu-opened');
			if (menuStatus) {
				body.classList.remove('menu-opened');
			}
		});
	}

	const btnNav = document.querySelectorAll('.nav-menu .nav .nav-btn');
	if (btnNav) {
		btnNav.forEach(btn => {
			if (btn) {
				btn.addEventListener('click', function() {
					const menuStatus = body.classList.contains('menu-opened');
					if (menuStatus) {
						body.classList.remove('menu-opened');
					}
				});
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
				const subtitle = (item.subtitle) ? ` <small>${escapeHTML(item.subtitle)}</small>` : '';
				let image = "";
				let imageClass = ["grid-img-container"];
				if (typeof item.image === "object") {
					image = item.image.map((img, idx) => `<img class="grid-img ${(idx === 0) ? "active" : ""}" src="${escapeHTML(img)}" alt="${escapeHTML(item.title)}">`).join('');
					imageClass.push("img-slider");
				} else {
					image = (item.image) ? `<img class="grid-img" src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}">` : '';
				}

				return `
				<div class="grid-item" data-id="${escapeHTML(item.id)}" data-src="works" data-aos="fade-up">
					<div class="grid-content">
						<div class="grid-item-img">
							<div class="${imageClass.join(' ')}">${image}</div>
							<div class="grid-item-overlay">
								<span>View Details</span>
							</div>
						</div>
						<div class="grid-item-text">
							<div class="grid-item-text-sub">${escapeHTML(item.category || '')}</div>
							<h3 class="grid-item-text-title">${escapeHTML(item.title)}${subtitle}</h3>
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
				const subtitle = (item.subtitle) ? ` <small>${escapeHTML(item.subtitle)}</small>` : '';
				const pills = (item.technologies || []).slice(0, 3).map(tech => `<span class="pill">${escapeHTML(tech)}</span>`).join('');
				let image = "";
				if (typeof item.image === "object") {
					image = item.image.map(img => `<img class="grid-item-img" src="${escapeHTML(img)}" alt="${escapeHTML(item.title)}">`).join('');
				} else {
					image = (item.image) ? `<img class="grid-item-img" src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}">` : '';
				}

				return `
				<div class="grid-item" data-id="${escapeHTML(item.id)}" data-src="projects" data-aos="fade-up">
					<div class="grid-content">
						<div class="grid-img-container">${image}</div>
						<div class="grid-item-overlay"></div>
						<div class="grid-item-text">
							<div>
								<div class="grid-item-sub">${escapeHTML(item.category || '')}</div>
								<h3 class="grid-item-title">${escapeHTML(item.title)}${subtitle}</h3>
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
			linksHtml += `<a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-live"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>Live</a>`;
		}
		if (githubUrl) {
			linksHtml += `<a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-github"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>Source</a>`;
		}

		const date = (data.date) ? ` &bull; ${escapeHTML(data.date)}` : '';

		let image = "";
		let imageClass = ["modal-img-container"];
		if (typeof data.image === "object") {
			image = data.image.map((img, idx) => `<img ${(idx === 0) ? 'class="active"' : ""} src="${escapeHTML(img)}" alt="${escapeHTML(data.title)}${(idx+1)}">`).join('');
			imageClass.push("img-slider");
		} else {
			image = (data.image) ? `<img src="${escapeHTML(data.image)}" alt="${escapeHTML(data.title)}">` : '';
		}

		const html = `
			<div class="modal-img">
				<div class="${imageClass.join(' ')}">${image}</div>
				<div class="modal-img-overlay"></div>
				<div class="modal-link">
					${linksHtml}
				</div>
			</div>
			<div class="modal-text">
				<h2 class="modal-text-title">${escapeHTML(data.title)}</h2>
				<p class="modal-text-sub">${escapeHTML(data.category || '')}${date}</p>
				<p class="modal-text-desc">${escapeHTML(data.longDescription)}</p>
				<div class="modal-technologies">
					<h3>Technologies Used</h3>
					<div class="modal-technology-list">${pills}</div>
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
				"template_3ipidn5",
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

	const inLinks = document.querySelectorAll('.inlink');
	if (inLinks) {
		inLinks.forEach(link => {
			if (link) {
				link.addEventListener('click', function(e) {
					e.preventDefault();
					
  					const id = link.getAttribute('href');
					const target = document.querySelector(id);
					
					if (target) {
						target.scrollIntoView({ block: 'start' });
						history.replaceState(null, '', window.location.pathname + window.location.search);
					}
				});
			}
		});
	}

	// const slider = document.querySelector('.img-slider');
	// const slides = slider.querySelectorAll('img');

	// if (slides.length > 1) {
	// 	let current = 0;

	// 	setInterval(() => {
	// 		slides[current].classList.remove('active');

	// 		current = (current + 1) % slides.length;

	// 		slides[current].classList.add('active');
	// 	}, 10000); // change every 4s
	// }
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