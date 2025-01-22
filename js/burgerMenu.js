const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('mega-menu');
const menuLinks = document.querySelectorAll('.menu-link');

menuToggle.addEventListener('click', () => {
	menu.classList.toggle('hidden');
	menuToggle.setAttribute(
		'aria-expanded',
		menu.classList.contains('hidden') ? 'false' : 'true'
	);
});
menuLinks.forEach((link) => {
	link.addEventListener('click', () => {
		menu.classList.add('hidden'); // Hide the menu
		menuToggle.setAttribute('aria-expanded', 'false');
	});
});
