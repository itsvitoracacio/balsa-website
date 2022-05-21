//------------ ELEMENTS IN ALL PAGES ------------
const headerElem = [...document.querySelectorAll('.header-reveal')]
/* Loads instantly, no need for observing them */

const img = [...document.querySelectorAll('.img-reveal')]
const imgObs = new IntersectionObserver(addShowingTag, obsOptions)

const imgCover = [...document.querySelectorAll('.img-wrapper-reveal')]
const imgCoverObs = new IntersectionObserver(addShowingTag, obsOptions)

//
//------------ ELEMENTS ON THE HOMEPAGE ------------
const projElem = [...document.querySelectorAll('.proj-reveal')]
/* Loads instantly, no need for observing them */

const button = document.querySelector('.button-reveal')
/* Loads instantly, no need for observing it */

const homeMainHeading = [...document.querySelectorAll('.home-main-heading')]
const homeHeadingObs = new IntersectionObserver(showHomeDramatic, obsOptions)

//
//------------ ELEMENTS ON TEXT PAGES ------------
const mainHeading = document.querySelector('.main-heading')
const mainHeadingObs = new IntersectionObserver(showDramatic, obsOptions)

const heading = [...document.querySelectorAll('.heading-reveal')]
const headingObs = new IntersectionObserver(addShowingTag, obsOptions)

const p = [...document.querySelectorAll('p')]
const pObs = new IntersectionObserver(addShowingTag, obsOptions)

const clientLogoList = document.querySelector('.client-logo-list')
const clientLogoListObs = new IntersectionObserver(showClientLogos, obsOptions)

const figcaption = [...document.querySelectorAll('.figcaption-reveal')]
const figcaptionObs = new IntersectionObserver(showFigcaption, obsOptions)

const ctaSection = [...document.querySelectorAll('.section-reveal')]
const ctaSectionObs = new IntersectionObserver(addShowingTag, obsOptions)

const footerElem = [...document.querySelectorAll('.footer-reveal')]
const footerElemObs = new IntersectionObserver(showFooter, obsOptions)

const obsOptions = {
	rootMargin: '-12%',
	threshold: 0.0,
}

// function showDramatic(entries) {
// 	entries.forEach(entry => {
// 		if (entry.isIntersecting) {
// 			const spans = [...entry.target.querySelectorAll('span')]
// 			spans.forEach((span, i) => {
// 				setTimeout(() => {
// 					span.classList.add('showing')
// 				}, i * 12)
// 			})
// 		}
// 	})
// setTimeout(() => {
//   entries.forEach(entry => {
//     let headingText = ''
//     Array.from(entry.target.children).forEach(letter => {
//       headingText += letter.classList.contains('gap') ? ' ' : letter.innerText
//     })
//     entry.target.innerHTML = headingText
//   })
// }, 10000)
// }

// function showHomeDramatic(entries) {
// 	entries.forEach(entry => {
// 		if (entry.isIntersecting) {
// 			const spans = [...entry.target.querySelectorAll('span')]
// 			spans.forEach((span, i) => {
// 				setTimeout(() => {
// 					span.classList.add('showing')
// 				}, i * 12)
// 			})
// 		}
// 	})
// }

function addShowingStagger(entries, selectTag, stagger) {
	entries.forEach(entry => {
		const pieces = [...entry.target.querySelectorAll(selectTag)]
		pieces.forEach((piece, i) => {
			setTimeout(() => {
				piece.classList.add('showing')
			}, i * stagger)
		})
	})
}

addShowingStagger(entries, '.footer-piece', 100)
addShowingStagger(entries, 'li', 12)

function showFooter(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const footerPieces = [...entry.target.querySelectorAll('.footer-piece')]
			footerPieces.forEach((piece, i) => {
				setTimeout(() => {
					piece.classList.add('showing')
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

function homeTextToSpans(elem) {
	let newString = ''
	const elementText = elem.innerText.split('')
	// console.log(elementText)
	elementText.map(letter => {
		// newString += `<span>${letter}</span>`
		newString +=
			letter === ' ' ? `<span class="gap"> </span>` : `<span>${letter}</span>`
	})
	elem.innerHTML = newString
}

function addObs(elem, observer) {
	elem.forEach(e => observer.observe(e))
}

if (document.querySelector('main').classList.contains('home')) {
	setTimeout(() => {
		// Opacity starts at 0 so that stuff don't appear before the load animation
		document.querySelector('main').style.opacity = '1'

		// Loading instantly at page load
		headerElem.forEach(elem => elem.classList.add('header-reveal-on'))
		projElem.forEach(elem => elem.classList.add('proj-reveal-on'))
		button.classList.add('showing')
		setTimeout(() => {
			// Big heading loading should go here
			button.classList.add('reveal')
		}, 500)

		// Adding observers, but this could be converted to instant load since there's no scroll on the homepage
		addObs(img, imgObs)
		addObs(imgCover, imgCoverObs)

		// Thist tag is needed for the image loading animation, but prevents scaling on hover, so it is removed after the image is loaded.
		setTimeout(() => {
			img.forEach(i => i.classList.remove('img-reveal'))
		}, 1750)
	}, 5500)
}

if (document.querySelector('main').classList.contains('about-page')) {
	setTimeout(() => {
		document.querySelector('main').style.opacity = '1'

		clientLogoListObs.observe(clientLogoList)
	}, 500)
}

// setTimeout(() => {
// 	headerElem.forEach(elem => elem.classList.add('header-reveal-on'))
// 	if (document.querySelector('main').classList.contains('home')) {
// 		projElem.forEach(elem => elem.classList.add('proj-reveal-on'))
// 		button.classList.add('showing')
// 		setTimeout(() => {
// 			button.classList.add('reveal')
// 		}, 500)
// 	}

// 	if (document.querySelector('main').classList.contains('about-page')) {
// 		document.querySelector('main').style.opacity = '1'

// 		// fromTextToSpans(mainHeading)
// 		// mainHeadingObs.observe(mainHeading)

// 		clientLogoListObs.observe(clientLogoList)
// 	}

// 	addObs(footerElem, footerElemObs)
// 	addObs(heading, headingObs)
// 	addObs(img, imgObs)
// 	addObs(imgCover, imgCoverObs)
// 	addObs(p, pObs)
// 	addObs(ctaSection, ctaSectionObs)
// 	addObs(figcaption, figcaptionObs)
// }, 500)
