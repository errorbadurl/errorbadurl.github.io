'use strict';

AOS.init({
	duration: 1000,
	// once: true,
	anchorPlacement: 'center-bottom',
});

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

const projects = [];

// On page load set the theme and render grids.
document.addEventListener('DOMContentLoaded', async function() {

	const root = document.documentElement;
	const body = document.querySelector("body");

	// Event: Header scroll event listener.
	const header = document.querySelector("header");
	if (header) {
		header.classList.toggle("scrolled", window.scrollY > 0);
		window.addEventListener("scroll", function() {
			header.classList.toggle("scrolled", window.scrollY > 0);
		});
	}

	// Theme toggle setup
	const btnToggleTheme = document.querySelector('.toggle-theme');

	/**
	 * Applies the specified theme to the document and stores it in localStorage.
	 * @param {string} theme - The theme to apply ('dark' or 'light')
	 */
	function applyTheme(theme) {
		if (theme === 'dark') {
			root.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			root.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
		renderRecaptcha(theme);
	}

	// Event: Theme toggle button click - switches between light and dark themes
	if (btnToggleTheme) {
		btnToggleTheme.addEventListener('click', function() {
			const next = root.classList.contains('dark') ? 'light' : 'dark';
			applyTheme(next);
		});
	}

	// Event: Menu toggle button click - opens or closes the navigation menu
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

	// Event: Close menu button click - closes the navigation menu
	const btnCloseMenu = document.querySelector('.close-menu');
	if (btnCloseMenu) {
		btnCloseMenu.addEventListener('click', function() {
			const menuStatus = body.classList.contains('menu-opened');
			if (menuStatus) {
				body.classList.remove('menu-opened');
			}
		});
	}

	// Event: Overlay click - closes the menu when clicking the overlay background
	const overlayContainer = document.querySelector('.overlay');
	if (overlayContainer) {
		overlayContainer.addEventListener('click', function() {
			const menuStatus = body.classList.contains('menu-opened');
			if (menuStatus) {
				body.classList.remove('menu-opened');
			}
		});
	}

	// Event: Navigation button clicks - closes menu when a nav link is clicked
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

	/**
	 * Safely escapes HTML special characters to prevent XSS attacks.
	 * @param {string} str - The string to escape
	 * @returns {string} The escaped HTML string
	 */
	function escapeHTML(str) {
		return String(str || '')
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#39;');
	}

	/**
	 * Renders the works/portfolio grid items from the works data array.
	 * Uses insertAdjacentHTML for efficient DOM manipulation.
	 */
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
		} else if (container && works.length <= 0) {
			container.insertAdjacentHTML('beforeend', `<h1 class="upcoming-items" data-aos="fade-up">!!!UNDER CONSTRUCTION!!!<br/>Entries are coming soon.</h1>`);
		}
	}

	/**
	 * Renders the projects grid items from the projects data array.
	 * Uses insertAdjacentHTML for efficient DOM manipulation.
	 */
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
		} else if (container && projects.length <= 0) {
			container.insertAdjacentHTML('beforeend', `<h1 class="upcoming-items" data-aos="fade-up">!!!UNDER CONSTRUCTION!!!<br/>Entries are coming soon.</h1>`);
		}
	}

	// Render both grids
	renderWorksGrid();
	renderProjectsGrid();

	// Event: Works grid click - opens a modal with details about the selected work
	const eventWorksModal = document.querySelector('#works .grid');
	if (eventWorksModal) {
		eventWorksModal.addEventListener('click', function(e) {
			const el = e.target.closest('.grid-item[data-id][data-src]');
			if (!el) return;
			if (el.dataset.src !== 'works') return;
			renderModal(el.dataset.src, el.dataset.id);
		});
	}

	// Event: Projects grid click - opens a modal with details about the selected project
	const eventProjectsModal = document.querySelector('#projects .grid');
	if (eventProjectsModal) {
		eventProjectsModal.addEventListener('click', function(e) {
			const el = e.target.closest('.grid-item[data-id][data-src]');
			if (!el) return;
			if (el.dataset.src !== 'projects') return;
			renderModal(el.dataset.src, el.dataset.id);
		});
	}

	// Event: Modal close button click - closes the currently open modal on desktop
	const eventCloseModal = document.querySelector('#modal-overlay .modal-close');
	if (eventCloseModal) {
		eventCloseModal.addEventListener('click', function(e) {
			destroyModal();
		});
	}

	// Event: Modal close button click - closes the currently open modal on mobile
	const eventCloseMobileModal = document.querySelector('#modal-overlay .modal-mobile-close');
	if (eventCloseMobileModal) {
		eventCloseMobileModal.addEventListener('click', function(e) {
			destroyModal();
		});
	}

	// Add event listener to close modal when clicking only the overlay (not modal content)
	// Event: Modal overlay click - closes the modal when clicking the overlay background
	const modalOverlay = document.querySelector('.modal-overlay');
	if (modalOverlay) {
		modalOverlay.addEventListener('click', function (e) {
			if (e.target === modalOverlay) {
				destroyModal();
			}
		});
	}

	/**
	 * Renders a modal window with detailed information about a work or project.
	 * @param {string} type - The type of content ('works' or 'projects')
	 * @param {string|number} id - The unique identifier of the item to display
	 */
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

	/**
	 * Closes and removes the active modal from view.
	 */
	function destroyModal() {
		const modalOverlay = document.getElementById('modal-overlay');

		modalOverlay.classList.remove('active');
	}

	// Event: Contact form submit - triggers reCAPTCHA validation before sending
	const form = document.getElementById("contact-form");
	form.addEventListener("submit", function(e) {
		e.preventDefault();
		grecaptcha.execute(reCaptchaId);
	});

	// Event: In-page link clicks - smooth scroll to targets and update URL
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
});

/**
 * Legacy API: Toggles the theme between light and dark mode.
 * Kept for backward compatibility.
 */
function themeToggle() {
	const root = document.documentElement;
	const next = root.classList.contains('dark') ? 'light' : 'dark';
	// trigger same behavior as the click handler
	const toggleBtn = document.querySelector('.toggle-theme');
	if (toggleBtn) toggleBtn.click();
	return next;
}

// Store the reCAPTCHA widget ID
let reCaptchaId = null;

/**
 * Renders or re-renders the reCAPTCHA widget with the specified theme.
 * @param {string} theme - The theme for reCAPTCHA ('light' or 'dark'). Auto-detects if undefined.
 */
function renderRecaptcha(theme) {
	const container = document.getElementById('recaptcha_element_container');
	container.innerHTML = '<div id="recaptcha_element"></div>';   // remove iframe

	// If already rendered, remove safely
	if (reCaptchaId !== null) {
		if (grecaptcha) {
			grecaptcha.reset(reCaptchaId);
		}
		reCaptchaId = null;
	}

	if (typeof theme === "undefined") {
		theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
	}

	const element = document.getElementById('recaptcha_element');
	reCaptchaId = grecaptcha.render(element, {
		sitekey: '6Ley0XEsAAAAAGBEohy3nRKMJgdUI3ylbmuUpvzQ',
    	size: 'invisible',
		badge: 'bottomleft',
		theme: theme,
    	callback: onSubmitContactForm,
	});
}

/**
 * Handles the contact form submission after successful reCAPTCHA validation.
 * Sends the form data via EmailJS service.
 * @param {string} token - The reCAPTCHA response token
 */
async function onSubmitContactForm(token) {
	const form = document.getElementById("contact-form");
	const btn = form.querySelector('.btn-contact[data-action="submit"]');
	btn.setAttribute('disabled', '');

	emailjs.init("MaNOgTpsGcwSxAqNR");

	const timeNow = new Date();
	const data = {
		from_name: form.from_name.value,
		reply_to: form.reply_to.value,
		message: form.message.value,
		'g-recaptcha-response': token,
		'time': timeNow.toLocaleString(),
	};

	try {
		const response = await emailjs.send(
			"service_qkgpjvj",
			"template_3ipidn5",
			data,
		);

		showToast("Message sent successfully!", "success");
		form.reset();

		if (grecaptcha) {
			grecaptcha.reset(reCaptchaId);
		}

		btn.removeAttribute('disabled', '');
	} catch (err) {
		showToast("Failed to send message", "error");
		console.error("EmailJS Error:", err);

		btn.removeAttribute('disabled', '');
	}
}

/**
 * Displays a toast notification message with optional type and duration.
 * @param {string} message - The message to display in the toast
 * @param {string} type - The toast type ('success', 'error', etc.). Default is 'success'.
 * @param {number} duration - The duration in milliseconds to show the toast. Default is 3000ms.
 */
function showToast(message, type = "success", duration = 3000) {
	let container = document.querySelector(".toast-container");

	if (!container) {
		container = document.createElement("div");
		container.className = "toast-container";
		document.body.appendChild(container);
	}

	const toast = document.createElement("div");
	toast.className = `toast ${type}`;
	toast.textContent = message;
	container.appendChild(toast);

	setTimeout(() => toast.classList.add("show"), 50);

	setTimeout(() => {
		toast.classList.remove("show");
		setTimeout(() => toast.remove(), 300);
	}, duration);
}
