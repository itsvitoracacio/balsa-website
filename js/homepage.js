// const swup = new Swup()

const mainProjs = [
	{
		projNum: 1,
		projName: 'Hou Mei Asian Food Bar',
		projCat: 'Comer e Beber',
		projThumbSrc: '/assets/projetos/houmei/hm-1.jpeg',
	},
	{
		projNum: 2,
		projName: 'OOP Torrefação',
		projCat: 'Comercial',
		projThumbSrc: '/assets/projetos/oop-torrefacao/oopt-1.jpeg',
	},
	{
		projNum: 3,
		projName: 'Loja da Fazenda Alegria',
		projCat: 'Comer e Beber',
		projThumbSrc: '/assets/projetos/fz-alegria/fz-alegria-1.jpeg',
	},
	{
		projNum: 4,
		projName: 'Cabernet Savassi',
		projCat: 'Comer e Beber',
		projThumbSrc: '/assets/projetos/cabernet-savassi/cabernet-savassi-1.jpeg',
	},
]

function changeMainProjThumbOnScroll(e) {
	const DOMAIN_NAME = 'https://itsvitoracacio.github.io/balsa-website'
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

function changeProjNumOnScroll(e, domNum, curProj, nextProj, prevProj) {
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

function changeProjDeetsOnScroll(e, nextProj, prevProj) {
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

let isCurrentlyScrolling = false
document.body.addEventListener('wheel', e => {
	if (isCurrentlyScrolling) return
	isCurrentlyScrolling = true
	const domNum = document.querySelector('.changing-number')
	const isCurProj = proj => proj.projNum === Number(domNum.innerText)
	const curIndex = mainProjs.findIndex(isCurProj)
	const curProj = mainProjs[curIndex]
	const nextProj =
		curIndex === mainProjs.length - 1 ? mainProjs[0] : mainProjs[curIndex + 1]
	const prevProj =
		curIndex === 0 ? mainProjs[mainProjs.length - 1] : mainProjs[curIndex - 1]

	changeMainProjThumbOnScroll(e)
	changeProjNumOnScroll(e, domNum, curProj, nextProj, prevProj)
	changeProjDeetsOnScroll(e, nextProj, prevProj)

	setTimeout(() => (isCurrentlyScrolling = false), 1400)
})
