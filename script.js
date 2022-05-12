const swup = new Swup()
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

document.body.addEventListener('click', function () {
	const projDetails = document.querySelector('.project-details')
	const projName = document.querySelector('.current-feat-proj-name')
	const projCategory = document.querySelector('.current-feat-proj-cat')

	const projDeetsBlock1 = document.createElement('div')
	const projDeetsBlock2 = document.createElement('div')
	projDeetsBlock1.classList.add('proj-deets-block', 'block1', 'slideDownBlock')
	projDeetsBlock2.classList.add('proj-deets-block', 'block2', 'slideUpBlock')

	projDetails.insertBefore(projDeetsBlock1, projName)
	projDetails.appendChild(projDeetsBlock2)
	projName.classList.add('hideDownText')
	projCategory.classList.add('hideUpText')

	const hiddenName = document.querySelector('.hidden-feat-proj-name')
	const hiddenCategory = document.querySelector('.hidden-feat-proj-cat')
	hiddenName.classList.add('showUpText')
	hiddenCategory.classList.add('showDownText')

	// setTimeout(() => {
	// 	projName.classList.remove('slideDownText')
	// 	projCategory.classList.remove('slideUpText')
	// 	projDeetsBlock1.remove()
	// 	projDeetsBlock2.remove()
	// }, 1500)
})

document.body.addEventListener('click', function () {})