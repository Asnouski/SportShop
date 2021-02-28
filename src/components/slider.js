const dots = document.querySelector(".items_dots");

const putActiveDot = () => {
	let activeIndex = 0;

	let itemsDots = document.querySelectorAll(".items_dots li")
	itemsDots.forEach((item, index) => {
		if (item.classList.contains("dot_active")) {
			activeIndex = index;
		}
	})
	return activeIndex;
}
const putActiveSlide = (activeIndex) => {
	const active = document.querySelector(".active_slide");

	const itemsSlider = document.querySelectorAll(".slider .item__photo");
	active.classList.remove("active_slide");
	itemsSlider.forEach((item, index) => {
		if (activeIndex === index) {
			item.classList.add("active_slide");
		}
	})
}

const nextActiveSlide = () => {
	const activeDot = document.querySelector(".dot_active");
	const activeSlider = document.querySelector(".active_slide");
	const itemsSlider = document.querySelectorAll(".slider .item__photo");
	let itemsDots = document.querySelectorAll(".items_dots li")
	if (activeSlider && activeDot) {
		activeSlider.classList.remove("active_slide");
		activeDot.classList.remove("dot_active");

		if (activeSlider.nextElementSibling && activeSlider.nextElementSibling.tagName === "DIV") {
			activeSlider.nextElementSibling.classList.add("active_slide");
			activeDot.nextElementSibling.classList.add("dot_active");
		}
		else {
			itemsDots[0].classList.add("dot_active");
			itemsSlider[0].classList.add("active_slide");
		}
	}
}


export { putActiveDot, putActiveSlide, nextActiveSlide };