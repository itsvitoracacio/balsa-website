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