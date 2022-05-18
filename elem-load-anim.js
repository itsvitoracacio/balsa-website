const headerElem = [...document.querySelectorAll('.header-reveal')]
const mainHeading = document.querySelector('.main-heading')
const heading = [...document.querySelectorAll('.heading-reveal')]
const img = [...document.querySelectorAll('.img-reveal')]
const imgCover = [...document.querySelectorAll('.img-wrapper-reveal')]
const p = [...document.querySelectorAll('p')]

const obsOptions = {
	rootMargin: '-12%',
	threshold: 0.0,
}

const mainHeadingObs = new IntersectionObserver(showHeading, obsOptions)
const headingObs = new IntersectionObserver(addShowingTag, obsOptions)
const imgCoverObs = new IntersectionObserver(addShowingTag, obsOptions)
const imgObs = new IntersectionObserver(addShowingTag, obsOptions)
const pObs = new IntersectionObserver(addShowingTag, obsOptions)

function showHeading(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const letters = [...entry.target.querySelectorAll('span')]
			letters.forEach((letter, i) => {
				setTimeout(() => {
					letter.classList.add('showing')
				}, i * 12)
			})
		}
	})
	// setTimeout(() => {
	//   entries.forEach(entry => {
	//     let headingText = ''
	//     Array.from(entry.target.children).forEach(letter => {
	//       headingText += letter.classList.contains('gap') ? ' ' : letter.innerText
	//     })
	//     entry.target.innerHTML = headingText
	//   })
	// }, 10000)
}

function addShowingTag(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) entry.target.classList.add('showing')
	})
}

function fromTextToSpans(elem) {
	let newString = ''
	const elementText = elem.innerText.split('')
	elementText.map(letter => {
		newString +=
			letter === ' ' ? `<span class="gap"> </span>` : `<span>${letter}</span>`
	})
	elem.innerHTML = newString
}

function addObs(elem, observer) {
	elem.forEach(e => observer.observe(e))
}

setTimeout(() => {
	headerElem.forEach(elem => elem.classList.add('header-reveal-on'))
	document.querySelector('main').style.opacity = '1'
	fromTextToSpans(mainHeading)
	mainHeadingObs.observe(mainHeading)
	addObs(heading, headingObs)
	addObs(img, imgObs)
	addObs(imgCover, imgCoverObs)
	addObs(p, pObs)
}, 500)
