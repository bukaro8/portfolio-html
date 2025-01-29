document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('myForm');
	const modal = document.getElementById('myModal');
	const closeModal = document.getElementById('closeModal');
	const span = document.querySelector('.close');

	form.addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent the default form submission
		modal.classList.remove('hidden'); // Show the modal
	});

	function closeAndRedirect() {
		modal.classList.add('hidden');
		window.location.href = 'index.html'; // Redirect to index.html
	}

	// Close modal and redirect when the user clicks the close button
	closeModal.addEventListener('click', closeAndRedirect);

	// Close modal and redirect when the user clicks the "x" span
	span.addEventListener('click', closeAndRedirect);

	// Close modal and redirect when the user clicks outside of the modal content
	window.addEventListener('click', function (event) {
		if (event.target == modal) {
			closeAndRedirect();
		}
	});
});
