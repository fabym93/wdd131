// temples.js

(function () { 
// Update year in footer 
var yearSpan = document.getElementById('currentyear'); 
if (yearSpan) { 
var now = new Date(); 
yearSpan.textContent = now.getFullYear(); 
} 

// Update last modified date 
var lm = document.getElementById('lastModified'); 
if (lm) { 
lm.textContent = 'Last Modified: ' + document.lastModified; 
} 

// Hamburger Menu (mobile only) 


var hamburgerBtn = document.getElementById('hamburger');

var navLinks = document.getElementById('navlinks');

// If no elements exist, do nothing

if (hamburgerBtn && navLinks) {

// Create the button if it doesn't exist 

function showMobileHamburger() {

// Show/hide by size using CSS; here we only ensure the behavior

// Check width to decide initial state

var isMobile = window.matchMedia('(max-width: 599px)').matches;

if (isMobile) {

hamburgerBtn.style.display = 'inline-block';

// Hide the default menu on mobile

navLinks.style.display = 'none'; 

hamburgerBtn.setAttribute('aria-expanded', 'false'); 
hamburgerBtn.textContent = '☰'; // hamburger icon 
} else { 
hamburgerBtn.style.display = 'none'; 
navLinks.style.display = 'block'; 
} 
} 

// toggling listener 
function toggleMenu() { 
var open = navLinks.style.display === 'block'; 
navLinks.style.display = open ? 'none': 'block'; 
hamburgerBtn.setAttribute('aria-expanded', String(!open)); 
hamburgerBtn.textContent = open ? '☰' : '✖'; 
} 

// Change to window size 
function handleResize() { 
showMobileHamburger(); 
} 

// Initial 
showMobileHamburger(); 

// Events 
hamburgerBtn.addEventListener('click', toggleMenu); 
window.addEventListener('resize', handleResize); 
}
})();