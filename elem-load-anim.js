const footerElem = [...document.querySelectorAll('.footer-reveal')]
const headerElem = [...document.querySelectorAll('.header-reveal')]
const mainHeading = document.querySelector('.main-heading')
const heading = [...document.querySelectorAll('.heading-reveal')]
const img = [...document.querySelectorAll('.img-reveal')]
const imgCover = [...document.querySelectorAll('.img-wrapper-reveal')]
const p = [...document.querySelectorAll('p')]
const ctaSection = [...document.querySelectorAll('.section-reveal')]
const figcaption = [...document.querySelectorAll('.figcaption-reveal')]
const clientLogoList = document.querySelector('.client-logo-list')

const obsOptions = {
	rootMargin: '-12%',
	threshold: 0.0,
}

const mainHeadingObs = new IntersectionObserver(showDramatic, obsOptions)
const footerElemObs = new IntersectionObserver(showFooter, obsOptions)
const headingObs = new IntersectionObserver(addShowingTag, obsOptions)
const imgCoverObs = new IntersectionObserver(addShowingTag, obsOptions)
const imgObs = new IntersectionObserver(addShowingTag, obsOptions)
const pObs = new IntersectionObserver(addShowingTag, obsOptions)
const ctaSectionObs = new IntersectionObserver(addShowingTag, obsOptions)
const figcaptionObs = new IntersectionObserver(showFigcaption, obsOptions)
const clientLogoListObs = new IntersectionObserver(showClientLogos, obsOptions)

function showDramatic(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const spans = [...entry.target.querySelectorAll('span')]
			spans.forEach((span, i) => {
				setTimeout(() => {
					span.classList.add('showing')
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

function showFooter(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const footerPieces = [...entry.target.querySelectorAll('.footer-piece')]
			console.log(footerPieces)
			footerPieces.forEach((piece, i) => {
				setTimeout(() => {
					piece.classList.add('showing')
					console.log(piece)
				}, i * 100)
			})
		}
	})
}

function showFigcaption(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const letters = [...entry.target.querySelectorAll('span')]
			letters.forEach((letter, i) => {
				letter.classList.add('showing')
				setTimeout(() => {
					letter.classList.add('reveal')
				}, i * 450)
			})
		}
	})
}

function showClientLogos(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const spans = [...entry.target.querySelectorAll('li')]
			spans.forEach((span, i) => {
				setTimeout(() => {
					span.classList.add('showing')
				}, i * 12)
			})
		}
	})
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
	addObs(footerElem, footerElemObs)
	fromTextToSpans(mainHeading)
	mainHeadingObs.observe(mainHeading)
	clientLogoListObs.observe(clientLogoList)
	addObs(heading, headingObs)
	addObs(img, imgObs)
	addObs(imgCover, imgCoverObs)
	addObs(p, pObs)
	addObs(ctaSection, ctaSectionObs)
	addObs(figcaption, figcaptionObs)
}, 500)
