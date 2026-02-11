'use strict';

// // DOM Elements
// const home = document.querySelector('#home');

// // Guard against missing elements
// if (!home) {
// 	console.warn('home element not found');
// 	throw new Error('Required DOM element missing: #home');
// }

// // Event Listeners - track mouse across entire document
// document.addEventListener('mousemove', (e) => {
// 	const rect = home.getBoundingClientRect();

// 	// Only apply effect if home section is in viewport
// 	if (rect.bottom < 0 || rect.top > window.innerHeight) {
// 		return;
// 	}

// 	// Calculate position relative to viewport center, not just home section
// 	const x = e.clientX;
// 	const y = e.clientY;

// 	const offsetX = (x / window.innerWidth - 0.5) * 10;
// 	const offsetY = (y / window.innerHeight - 0.5) * 10;

// 	home.style.setProperty('--parallax-x', `${offsetX}px`);
// 	home.style.setProperty('--parallax-y', `${offsetY}px`);
// });

// On page load set the theme.
(function() {
// 	let onpageLoad = localStorage.getItem("theme") || "dark";
// console.log(onpageLoad);
// 	let element = document.body;
// console.log(element);
// 	element.classList.add(onpageLoad);
// 	document.getElementById("theme").textContent = localStorage.getItem("theme") || "light";

	const root = document.documentElement;
	const body = document.querySelector("body");

	// Header scroll event listener.
	const header = document.querySelector("header");

	window.addEventListener("scroll", () => {
		header.classList.toggle("scrolled", window.scrollY > 0);
	});

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

	// Initialize theme from localStorage (default: light)
	try {
		const stored = localStorage.getItem('theme') || 'light';
		applyTheme(stored);
	} catch (e) {
		// localStorage may be unavailable; default to light
		applyTheme('light');
	}

	if (btnToggleTheme) {
		btnToggleTheme.addEventListener('click', () => {
			const next = root.classList.contains('dark') ? 'light' : 'dark';
			applyTheme(next);
		});
	}

	// Menu toggle setup
	const btnToggleMenu = document.querySelector('.toggle-menu');

	btnToggleMenu.addEventListener('click', () => {
		const menuStatus = body.classList.contains('menu-opened');
		if (menuStatus) {
			body.classList.remove('menu-opened');
		} else {
			body.classList.add('menu-opened');
		}
	});

	const btnCloseMenu = document.querySelector('.close-menu');

	btnCloseMenu.addEventListener('click', () => {
		const menuStatus = body.classList.contains('menu-opened');
		if (menuStatus) {
			body.classList.remove('menu-opened');
		}
	});
	
})();

/* legacy API: keep compatibility if something calls themeToggle() */
function themeToggle() {
	const root = document.documentElement;
	const next = root.classList.contains('dark') ? 'light' : 'dark';
	// trigger same behavior as the click handler
	const toggleBtn = document.querySelector('.toggle-theme');
	if (toggleBtn) toggleBtn.click();
	return next;
}