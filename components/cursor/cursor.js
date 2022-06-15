// Styling the custom cursor
const cursor = document.querySelector('.inner-cursor')
// const cursorWrapper = document.querySelector('.outer-cursor')

// Inner cursor
window.addEventListener('mousemove', e => {
	cursor.style.top = `${e.pageY - 5}px`
	cursor.style.left = `${e.pageX - 6}px`
})

// Outer cursor
// window.addEventListener('mousemove', e => {
// 	cursorWrapper.style.top = `${e.clientY - 13}px`
// 	cursorWrapper.style.left = `${e.clientX - 14}px`
// })

// document.addEventListener('mousedown', _ => {
// 	cursorWrapper.classList.add('cursorClick')
// })
// document.addEventListener('mouseup', _ => {
// 	cursorWrapper.classList.remove('cursorClick')
// })
// need to make the outer circle grow back smoothly
// need to add a delay to the outer circle when following the inner circle

const projName = document.createElement('span')

window.addEventListener('mousemove', e => {
	const listItem = e.target.parentElement.parentElement

	if (!listItem.dataset.projName) projName.style.opacity = 0
	else {
		projName.innerText = listItem.dataset.projName
		projName.style.textTransform = 'uppercase'
		projName.style.position = 'absolute'
		projName.style.fontWeight = '700'
		projName.style.top = `${e.clientY + 15 + window.scrollY}px`
		projName.style.left = `${e.clientX}px`
		projName.style.opacity = 1

		listItem.appendChild(projName)
	}
})
