document.addEventListener('DOMContentLoaded', function () {
	function openModal(modalId) {
		const modal = document.getElementById(modalId);
		if (modal) {
			modal.classList.remove('hidden');
			modal.classList.add('flex');
		}
	}

	function closeModal(modalId) {
		const modal = document.getElementById(modalId);
		if (modal) {
			modal.classList.add('hidden');
			modal.classList.remove('flex');
		}
	}

	document.querySelectorAll('[data-modal-toggle]').forEach((button) => {
		button.addEventListener('click', function () {
			const targetModal = button.getAttribute('data-modal-target');
			openModal(targetModal);
		});
	});

	document.querySelectorAll('[data-modal-hide]').forEach((closeButton) => {
		closeButton.addEventListener('click', function () {
			const targetModal = closeButton.getAttribute('data-modal-hide');
			closeModal(targetModal);
		});
	});

	document.addEventListener('click', function (event) {
		document.querySelectorAll('.modal').forEach((modal) => {
			if (
				!modal.contains(event.target) &&
				!event.target.hasAttribute('data-modal-toggle')
			) {
				modal.classList.add('hidden');
				modal.classList.remove('flex');
			}
		});
	});
});
