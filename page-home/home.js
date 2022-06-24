const lvl1Filter = document.querySelector('#projFilterLvl1')
const lvl1Options = Array.from(lvl1Filter.children)

const toggleLvl2 = e => {
	// Getting the identifier of the label clicked
	const labelOptionClicked = e.target.htmlFor

	// Getting out of the function if the label clicked corresponds to the lvl2 filter that's already showing
	const lvl1OptionsInputs = lvl1Options.filter(el => el.tagName === 'INPUT')
	const selectedLvl1 = lvl1OptionsInputs.find(input => input.checked)
	if (selectedLvl1.id === labelOptionClicked) return

	// Making all lvl 2 filters that aren't the one we need to show invisible
	const allLvl2FiltersAsNodes = document.querySelectorAll('.filter-level-2')
	const allLvl2Filters = Array.from(allLvl2FiltersAsNodes)

	allLvl2Filters.forEach(
		lvl2Filter =>
			lvl2Filter.dataset.lvl1 !== labelOptionClicked &&
			lvl2Filter.classList.contains('show') &&
			lvl2Filter.classList.remove('show')
	)

	// Making the lvl 2 filter that we need to show visible
	const lvl2ToShow = document.querySelector(`.lvl2-${labelOptionClicked}`)
	if (lvl2ToShow) lvl2ToShow.classList.add('show')
}

// Adding the event listener to all lvl1 filter options labels
const lvl1OptionsLabels = lvl1Options.filter(el => el.tagName === 'LABEL')
lvl1OptionsLabels.forEach(label => label.addEventListener('click', toggleLvl2))
