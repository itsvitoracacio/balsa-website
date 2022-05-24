// Settings for triggering the intersection
// Currently, it intesects when the element rolls 12% from any direction into the screen
const obsOptions = {
	rootMargin: '-12%',
	threshold: 0.0,
}

// Checking which page type we're on
const isHomepage = document.querySelector('main').classList.contains('home')
const isAboutPage = document
	.querySelector('main')
	.classList.contains('about-page')

//------------ ELEMENTS IN ALL PAGES ------------
/* Loads instantly, no need for observing them */
const headerElem = [...document.querySelectorAll('.header-reveal')]

//
//------------ ELEMENTS ON THE HOMEPAGE ------------
const homeMainHeading = [...document.querySelectorAll('.home-main-heading')]
const projElem = [...document.querySelectorAll('.proj-reveal')]
const homeImg = [...document.querySelectorAll('.home-img-reveal')]
const homeImgCover = [...document.querySelectorAll('.home-img-wrapper-reveal')]
const button = document.querySelector('.button-reveal')

function instantlyAddClassToRevealArrElems(arr, revealingClass) {
	arr.forEach(elem => elem.classList.add(revealingClass))
}

if (isHomepage) {
	// Wait for the loading fill animation ends + 0.5s for preventing the load flash
	setTimeout(() => {
		// Opacity starts at 0 to prevent the load flash
		document.querySelector('main').style.opacity = '1'

		// Revealing instantly at page load
		instantlyAddClassToRevealArrElems(headerElem, 'header-reveal-on')
		instantlyAddClassToRevealArrElems(projElem, 'proj-reveal-on')
		instantlyAddClassToRevealArrElems(homeMainHeading, 'showing')
		instantlyAddClassToRevealArrElems(homeImg, 'showing')
		instantlyAddClassToRevealArrElems(homeImgCover, 'showing')
		// Fade in blue rectangle before removing the rectagle and revealing the element
		button.classList.add('showing')
		setTimeout(() => {
			// Big heading loading should go here
			button.classList.add('reveal')
		}, 500)

		// This tag is needed for the image loading animation, but prevents scaling on hover, so it is removed after the image is loaded.
		setTimeout(() => {
			homeImg[0].classList.remove('home-img-reveal')
		}, 2750)
	}, 5500)
}

//
//------------ ELEMENTS ON TEXT PAGES ------------
const mainHeading = document.querySelector('.main-heading')
// const mainHeadingObs = new IntersectionObserver(showDramatic, obsOptions)

const heading = [...document.querySelectorAll('.heading-reveal')]
const paragraphs = [...document.querySelectorAll('p')]
const img = [...document.querySelectorAll('.img-reveal')]
const imgCover = [...document.querySelectorAll('.img-wrapper-reveal')]
const ctaSection = [...document.querySelectorAll('.section-reveal')]
const clientLogoList = document.querySelector('.client-logo-list')
const footerElem = [...document.querySelectorAll('.footer-reveal')]
const figcaption = [...document.querySelectorAll('.figcaption-reveal')]

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

function fromTextToSpans(elem) {
	let newString = ''
	const elementText = elem.innerText.split('')
	elementText.map(letter => {
		newString +=
			letter === ' ' ? `<span class="gap"> </span>` : `<span>${letter}</span>`
	})
	elem.innerHTML = newString
}

function addObserverToArrElems(elem, observer) {
	elem.forEach(e => observer.observe(e))
}

function addShowingTag(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) entry.target.classList.add('showing')
	})
}

function staggerShow(entry, stagger) {
	const children = Array.from(entry.target.children)
	console.log(children)
	children.forEach((child, i) => {
		console.dir(child)
		setTimeout(() => {
			child.classList.add('showing')
		}, i * stagger)
	})
}

function addShowingStagger(entries) {
	entries.forEach(entry => {
		const entryIsLogoList = entry.target.classList.contains('client-logo-list')
		const entryIsFooter = entry.target.classList.contains('footer-reveal')

		if (entry.isIntersecting) {
			if (entryIsLogoList) staggerShow(entry, 50)
			if (entryIsFooter) staggerShow(entry, 100)
			else {
				// The only else case is if the entry.target is a figcaption
				// This needs to be an else case because we can't specifically check if it has a class before it showing up on the screen. And it won't show up on the screen unless it gets the class 'fade-in'
				const children = Array.from(entry.target.children)
				children.forEach(child => child.classList.add('fade-in'))
				staggerShow(entry, 450)
			}
		}
	})
}

// The homepage doesn't scroll, so we can instantly reveal the elements

if (isAboutPage) {
	const headingObs = new IntersectionObserver(addShowingTag, obsOptions)
	const paragraphObs = new IntersectionObserver(addShowingTag, obsOptions)
	const imgObs = new IntersectionObserver(addShowingTag, obsOptions)
	const imgCoverObs = new IntersectionObserver(addShowingTag, obsOptions)
	const ctaSectionObs = new IntersectionObserver(addShowingTag, obsOptions)
	const footerElemObs = new IntersectionObserver(addShowingStagger, obsOptions)
	const figcaptionObs = new IntersectionObserver(addShowingStagger, obsOptions)
	const logoListObs = new IntersectionObserver(addShowingStagger, obsOptions)

	// Wait 0.5s to prevent the load flash
	setTimeout(() => {
		// Opacity starts at 0 to prevent the load flash
		document.querySelector('main').style.opacity = '1'

		instantlyAddClassToRevealArrElems(headerElem, 'header-reveal-on')

		addObserverToArrElems(heading, headingObs)
		addObserverToArrElems(paragraphs, paragraphObs)
		addObserverToArrElems(img, imgObs)
		addObserverToArrElems(imgCover, imgCoverObs)
		addObserverToArrElems(ctaSection, ctaSectionObs)
		addObserverToArrElems(footerElem, footerElemObs)
		addObserverToArrElems(figcaption, figcaptionObs)

		// This was selected as a sole element, not as part of an array
		logoListObs.observe(clientLogoList)
	}, 500)
}
