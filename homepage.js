const swup = new Swup()

const mainProjs = [
	{
		projNum: 1,
		projName: 'Hou Mei Asian Food Bar',
		projCat: 'Comer e Beber',
		projThumbSrc: '/assets/partners-pics/sarah.jpeg',
	},
	{
		projNum: 2,
		projName: 'Estúdio Veste',
		projCat: 'Comercial',
		projThumbSrc: '/assets/partners-pics/paulo.jpeg',
	},
	{
		projNum: 3,
		projName: 'Dorsé Bar e Restaurante',
		projCat: 'Comer e Beber',
		projThumbSrc: '/assets/compressed-image.jpeg',
	},
	{
		projNum: 4,
		projName: 'CD Fazenda Alegria',
		projCat: 'Logística / Comer e Beber',
		projThumbSrc: '/assets/logo-balsa.png',
	},
]

function changeMainProjThumb(e) {
	const DOMAIN_NAME = 'http://127.0.0.1:5500'
	const mainProjThumb = document.querySelector('.main-proj-thumb')
	const hasSpecificClass = mainProjThumb.classList.contains('img-reveal')
	if (hasSpecificClass) mainProjThumb.classList.remove('img-reveal')

	const curSrc = mainProjThumb.src.split(DOMAIN_NAME)[1]
	const curIndex = mainProjs.findIndex(proj => proj.projThumbSrc === curSrc)
	const nextProjThumb =
		curIndex === mainProjs.length - 1 ? mainProjs[0] : mainProjs[curIndex + 1]
	const prevProjThumb =
		curIndex === 0 ? mainProjs[mainProjs.length - 1] : mainProjs[curIndex - 1]

	let i = 10
	let j = window.setInterval(() => {
		if (i < 0) clearInterval(j)
		mainProjThumb.style.opacity = i / 10
		i--
	}, 15)

	setTimeout(() => {
		const newProjThumb = `${DOMAIN_NAME}${
			e.deltaY > 0 ? nextProjThumb.projThumbSrc : prevProjThumb.projThumbSrc
		}`

		mainProjThumb.src = newProjThumb
		let k = window.setInterval(() => {
			if (i > 10) clearInterval(k)
			mainProjThumb.style.opacity = i / 10
			i++
		}, 15)
	}, 650)
}

function changeProjNum(e, domNum, curProj, nextProj, prevProj) {
	const oldProjNum = `0${curProj.projNum}`
	const newProjNum = `0${e.deltaY > 0 ? nextProj.projNum : prevProj.projNum}`
	domNum.dataset.before = oldProjNum
	domNum.dataset.after = newProjNum
	domNum.innerText = ''

	domNum.classList.add('roll')

	setTimeout(() => {
		domNum.classList.remove('roll')

		domNum.dataset.before = ''
		domNum.dataset.after = ''
		domNum.innerText = newProjNum
	}, 1300)
}

document.body.addEventListener('wheel', e => {
	const domNum = document.querySelector('.changing-number')
	const isCurProj = proj => proj.projNum === Number(domNum.innerText)
	const curIndex = mainProjs.findIndex(isCurProj)
	const curProj = mainProjs[curIndex]
	const nextProj =
		curIndex === mainProjs.length - 1 ? mainProjs[0] : mainProjs[curIndex + 1]
	const prevProj =
		curIndex === 0 ? mainProjs[mainProjs.length - 1] : mainProjs[curIndex - 1]

	changeMainProjThumb(e)
	changeProjNum(e, domNum, curProj, nextProj, prevProj)
	changeProjDeets(e, nextProj, prevProj)
})

function changeProjDeets(e, nextProj, prevProj) {
	const projDetails = document.querySelector('.project-details')
	const projName = document.querySelector('.proj-name')
	const projCat = document.querySelector('.proj-category')

	const block1 = document.createElement('div')
	const block2 = document.createElement('div')
	block1.classList.add('proj-deets-block', 'block1')
	block2.classList.add('proj-deets-block', 'block2', 'slideUpThenDownBlock')

	projDetails.insertBefore(block1, projName)
	projDetails.appendChild(block2)
	projCat.classList.add('hideUpText')
	projName.classList.add('hideDownText')

	const newProjName = e.deltaY > 0 ? nextProj.projName : prevProj.projName
	const newProjCat = e.deltaY > 0 ? nextProj.projCat : prevProj.projCat

	setTimeout(() => {
		projName.innerText = newProjName
		projCat.innerText = newProjCat
	}, 600)

	setTimeout(() => {
		document.querySelector('.block1').remove()
		document.querySelector('.block2').remove()
		projName.classList.remove('hideDownText')
		projCat.classList.remove('hideUpText')
	}, 1300)
}

const projDetails = document.querySelector('.project-details')
let projName = document.querySelector('.cur-proj-name')
let projCategory = document.querySelector('.cur-proj-cat')
let hiddenNameArr = [...document.querySelectorAll('.hidden-proj-name')]
let hiddenCatArr = [...document.querySelectorAll('.hidden-proj-cat')]

document.body.addEventListener('', function () {
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
