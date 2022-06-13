const toggleAccord = e => {
	const accordClasses = e.target.parentElement.classList
	const isOpen = accordClasses.contains('open')

	if (isOpen)	accordClasses.remove('open')
	else {
		const allSiblings = accToggles.map(toggle => toggle.parentElement)

		allSiblings.forEach(sibling => {
			const isOpen = sibling.classList.contains('open')
			if (isOpen) sibling.classList.remove('open')
		})

		accordClasses.add('open')
	}
}

const accToggles = Array.from(document.querySelectorAll('.contactPieceToggle'))
accToggles.forEach(toggle => toggle.addEventListener('click', toggleAccord))
