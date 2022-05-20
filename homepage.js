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
	}, 1500)
})

let curProjNum = document.querySelector('.cur-proj-number')
const hiddenProjNum = [...document.querySelectorAll('.hidden-proj-number')]
let nextProjNum = hiddenProjNum[0]
let prevProjNum = hiddenProjNum[hiddenProjNum.length - 1]

document.body.addEventListener('click', function () {

	curProjNum.classList.add('rollOutProjNum')
	nextProjNum.classList.add('rollInProjNum')


	setTimeout(() => {
		curProjNum.classList.remove('rollOutProjNum')
		nextProjNum.classList.remove('rollInProjNum')
		
		curProjNum.classList.remove('cur-proj-number')
		curProjNum.classList.add('hidden-proj-number')
		nextProjNum.classList.remove('hidden-proj-number')
		nextProjNum.classList.add('cur-proj-number')

		hiddenProjNum.shift()
		hiddenProjNum.push(curProjNum)
		
		nextProjNum = hiddenProjNum[0]
		prevProjNum = hiddenProjNum[hiddenProjNum.length - 1]
		curProjNum = document.querySelector('.cur-proj-number')
	}, 1500)
})
