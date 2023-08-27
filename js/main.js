const togglerButton = window.document.querySelector('.navbar-toggler');
const body = window.document.body;

togglerButton.addEventListener('click', () => {
	togglerButton.classList.toggle('open');
	body.classList.toggle('h-overflow-y');
});
