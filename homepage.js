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