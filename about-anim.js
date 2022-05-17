const h2 = [...document.querySelectorAll('h2')]
const imgCover = [...document.querySelectorAll('.img-wrapper')]
const img = [...document.querySelectorAll('img')]

const obsOptions = {
	rootMargin: '-15%',
	threshold: 0.0,
}

const headingObs = new IntersectionObserver(showHeading, obsOptions)
const imgObs = new IntersectionObserver(showImage, obsOptions)
const imgCoverObs = new IntersectionObserver(showImageCover, obsOptions)

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

function showImage(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
      console.log(entry.target)
			entry.target.classList.add('showing')
		}
	})
}

function showImageCover(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
      console.log(entry.target)
			entry.target.classList.add('showing')
		}
	})
}

setTimeout(() => {
	h2.forEach(heading => {
		fromTextToSpans(heading)
		headingObs.observe(heading)
	})
	img.forEach(image => imgObs.observe(image))
}, 500)

function fromTextToSpans(element) {
	let newString = ''
	const elementText = element.innerText.split('')
	elementText.map(letter => {
		newString +=
			letter === ' ' ? `<span class="gap"> </span>` : `<span>${letter}</span>`
	})
	element.innerHTML = newString
}
