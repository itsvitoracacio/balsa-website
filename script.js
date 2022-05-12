const swup = new Swup()

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

document.body.addEventListener('mousewheel', function () {
	const projDetails = document.querySelector('.project-details')
	const projName = document.querySelector('.cur-proj-name')
	const projCategory = document.querySelector('.cur-proj-cat')

	const block1 = document.createElement('div')
	const block2 = document.createElement('div')
	block1.classList.add('proj-deets-block', 'block1')
	block2.classList.add('proj-deets-block', 'block2', 'slideUpThenDownBlock')

	projDetails.insertBefore(block1, projName)
	projDetails.appendChild(block2)
	projName.classList.add('hideDownText')
	projCategory.classList.add('hideUpText')

	const hiddenName = document.querySelector('.hidden-proj-name')
	const hiddenCat = document.querySelector('.hidden-proj-cat')
	hiddenName.classList.add('showUpText')
	hiddenCat.classList.add('showDownText')

	// setTimeout(() => {
	// 	projName.classList.remove('slideDownText')
	// 	projCategory.classList.remove('slideUpText')
	// 	projDeetsBlock1.remove()
	// 	projDeetsBlock2.remove()
	// }, 1500)
})

document.body.addEventListener('mousewheel', function () {
	const curProjNum = document.querySelector('.cur-proj-number')
	const hiddenProjNum = document.querySelector('.hidden-proj-number')

	curProjNum.classList.add('rollOutProjNum')
	hiddenProjNum.classList.add('rollInProjNum')
})

document.body.addEventListener('click', function () {})
