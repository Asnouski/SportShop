const getPreLoader = () => {
	const preloader = document.querySelector(".container-preloader");
	const rootElement = document.querySelector("#site");
	preloader.classList.remove("active");
	const root = document.querySelector("#content");
	rootElement.style.opacity = 1;
}

export default getPreLoader;
