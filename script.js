// const swup = new Swup()

document
	.querySelector('.outside-toggle')
	.addEventListener('click', changeHeaderZIndex)
document
	.querySelector('.inside-toggle')
	.addEventListener('click', changeHeaderZIndex)

function changeHeaderZIndex() {
	const header = document.querySelector('header')
	const menuCheckbox = document.querySelector('#menu-toggle')
	if (menuCheckbox.checked) setTimeout(() => (header.style.zIndex = '0'), 750)
	else header.style.zIndex = '10'
}

/* const cursor = document.querySelector('.inner-cursor')
const cursorWrapper = document.querySelector('.outer-cursor')
document.addEventListener('mousemove', e => {
	cursor.style.top = `${e.pageY - 5}px`
	cursor.style.left = `${e.pageX - 3}px`
})
document.addEventListener('mousemove', e => {
	cursorWrapper.style.top = `${e.clientY - 16}px`
	cursorWrapper.style.left = `${e.clientX - 13.5}px`
})
document.addEventListener('mousedown', _ => {
	cursorWrapper.classList.add('cursorClick')
})
document.addEventListener('mouseup', _ => {
	cursorWrapper.classList.remove('cursorClick')
}) */
// need to make the outer circle grow back smoothly
// need to add a delay to the outer circle when following the inner circle