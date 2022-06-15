const menuCheckbox = document.querySelector('#menu-toggle')
const pageIsHome = document.querySelector('main').classList.contains('homepage')
if (pageIsHome) menuCheckbox.checked = 'false'

// Making the menu appear on top of everything when it's open
// When going back to the previous page, if the menu was left open, it stays open, but the zIndex isn't correct
document
	.querySelector('.out-toggle')
	.addEventListener('click', changeHeaderZIndex)
document
	.querySelector('.in-toggle')
	.addEventListener('click', changeHeaderZIndex)

function changeHeaderZIndex() {
	const header = document.querySelector('header')
	if (menuCheckbox.checked) setTimeout(() => (header.style.zIndex = '0'), 750)
	else header.style.zIndex = '10'
}
