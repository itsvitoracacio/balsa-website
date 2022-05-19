const swup = new Swup()

const projDetails = document.querySelector('.project-details')
let projName = document.querySelector('.cur-proj-name')
let projCategory = document.querySelector('.cur-proj-cat')
let hiddenNameArr = [...document.querySelectorAll('.hidden-proj-name')]
let hiddenCatArr = [...document.querySelectorAll('.hidden-proj-cat')]

document.body.addEventListener('click', function () {
	const block1 = document.createElement('div')
	const block2 = document.createElement('div')
	block1.classList.add('proj-deets-block', 'block1')
	block2.classList.add('proj-deets-block', 'block2', 'slideUpThenDownBlock')

	projDetails.insertBefore(block1, projName)
	projDetails.appendChild(block2)
	projName.classList.add('hideDownText')
	projCategory.classList.add('hideUpText')

	hiddenNameArr[0].classList.add('showUpText')
	hiddenCatArr[0].classList.add('showDownText')

	console.log(projName)
	console.log(
		`
		0: ${hiddenNameArr[0].innerHTML},
		1: ${hiddenNameArr[1].innerHTML},
		2: ${hiddenNameArr[2].innerHTML}`
	)

	setTimeout(() => {
		projName.classList.remove('hideDownText')
		projCategory.classList.remove('hideUpText')
		hiddenNameArr[0].classList.remove('showUpText')
		hiddenCatArr[0].classList.remove('showDownText')
		document.querySelector('.block1').remove()
		document.querySelector('.block2').remove()

		projName.classList.add('hidden-proj-name')
		projCategory.classList.add('hidden-proj-cat')
		projName.classList.remove('cur-proj-name')
		projCategory.classList.remove('cur-proj-cat')

		hiddenNameArr[0].classList.add('cur-proj-name')
		hiddenCatArr[0].classList.add('cur-proj-cat')
		hiddenNameArr[0].classList.remove('hidden-proj-name')
		hiddenCatArr[0].classList.remove('hidden-proj-cat')

		hiddenNameArr.shift()
		hiddenNameArr.push(projName)
		hiddenCatArr.shift()
		hiddenCatArr.push(projCategory)

		projName = document.querySelector('.cur-proj-name')
		projCategory = document.querySelector('.cur-proj-cat')
		// console.log(projName)
		// console.log(hiddenNameArr[1])
	}, 1500)
})

document.body.addEventListener('mousewheel', function () {
	const curProjNum = document.querySelector('.cur-proj-number')
	const hiddenProjNum = document.querySelector('.hidden-proj-number')

	curProjNum.classList.add('rollOutProjNum')
	hiddenProjNum.classList.add('rollInProjNum')
})
