'use strict';

// DOM Elements
const home = document.querySelector('.home');

// Guard against missing elements
if (!home) {
  console.warn('home element not found');
  throw new Error('Required DOM element missing: .home');
}

// Event Listeners - track mouse across entire document
document.addEventListener('mousemove', (e) => {
  const rect = home.getBoundingClientRect();
  
  // Only apply effect if home section is in viewport
  if (rect.bottom < 0 || rect.top > window.innerHeight) {
    return;
  }
  
  // Calculate position relative to viewport center, not just home section
  const x = e.clientX;
  const y = e.clientY;

  const offsetX = (x / window.innerWidth - 0.5) * 10;
  const offsetY = (y / window.innerHeight - 0.5) * 10;
  
  home.style.setProperty('--parallax-x', `${offsetX}px`);
  home.style.setProperty('--parallax-y', `${offsetY}px`);
});