import router from "./routes";
import getPreloader from "./components/preloader";
import { putActiveDot, putActiveSlide, nextActiveSlide } from "./components/slider";
import { openReist, closeRegist, writeAccountData, chekLogin, loginDisplay, passwordFields, mailTrue, loginvvod, addOder } from "./components/signin";
import { CartQtw, ProductToCart, CartDeletElem, CartSum, LocalStorageUtil } from "./components/producToCart";
import { saveOrder, fromOrdertoLogin, addOderStore } from "./components/orderCreate";
import { prodInCart, imageMove } from "./components/productList"
import { ProductCategoryRender } from "./pages/ProductCategory";
document.body.innerHTML = `
<div id="site">
   <div class="header" id="header"></div>
   <main id="content"></main> 
	<div class="footer" id="footer"></div> 
</div>
<div class="container-preloader active">
	<div class="dash uno"></div>
	<div class="dash dos"></div>
	<div class="dash tres"></div>
	<div class="dash cuatro"></div>
</div>
`;
let sliderInterval = 0;
window.addEventListener("load", async () => {
	// Загрузка страницы Loading page
	await router();
	// Preloader
	setTimeout(getPreloader, 1000);
	// Slider
	clearInterval(sliderInterval);
	const dots = document.querySelector(".items_dots");
	const activeSlider = document.querySelector(".active_slide");
	if (activeSlider) {
		clearInterval(sliderInterval);
		sliderInterval = setInterval(() => {
			nextActiveSlide();
		}, 4000);
		dots.addEventListener("click", (e) => {
			if (e.target.tagName === "LI") {
				clearInterval(sliderInterval);
				sliderInterval = setInterval(() => {
					nextActiveSlide();
				}, 4000);
				const active = document.querySelector(".dot_active");
				active.classList.remove("dot_active");
				e.target.closest("li").classList.add("dot_active");
			}
			const activeItem = putActiveDot();
			putActiveSlide(activeItem);
		})
	}
	let categorySlider = document.querySelector(".slider");
	if (categorySlider) {
		categorySlider.addEventListener("click", (e) => {
			if (e.target.tagName === "A") {
				ProductCategoryRender(e.target.dataset.id);
			}
		})
	}
	// login
	const registOpen = document.querySelector(".regist__btn");
	const modalNone = document.querySelector(".login-wr i");
	const registBtn = document.querySelector(".registerbtn");
	let loginFrom = document.querySelector(".login-go");
	if (registOpen) {
		registOpen.addEventListener("click", openReist);
	}
	if (modalNone) {
		modalNone.addEventListener("click", closeRegist);
	}
	if (registBtn) {
		registBtn.addEventListener("click", writeAccountData);
	}
	if (loginFrom) {
		loginFrom.addEventListener("click", () => {
			chekLogin();
			loginDisplay();
			loginvvod();
		});
	}
	loginDisplay();
	loginvvod();
	//chekLogin
	const mailLogin = document.querySelector(".login .name");
	const passwordLogin = document.querySelector(".login .password");
	const passwordLoginRegistr = document.querySelector(".registration .password");
	const nameLoginRegistr = document.querySelector(".registration .name");
	const mailLoginRegistr = document.querySelector(".registration .mail");
	if (passwordLogin) {
		passwordLogin.addEventListener("blur", () => {
			passwordFields(passwordLogin);
		})
	}
	if (mailLogin) {
		mailLogin.addEventListener("blur", () => {
			passwordFields(mailLogin);
		})
	}
	if (passwordLoginRegistr) {
		passwordLoginRegistr.addEventListener("blur", () => {
			passwordFields(passwordLoginRegistr);
		})
	}
	if (nameLoginRegistr) {
		nameLoginRegistr.addEventListener("blur", () => {
			passwordFields(nameLoginRegistr);
		})
	}
	if (mailLoginRegistr) {
		mailLoginRegistr.addEventListener("blur", () => {
			passwordFields(mailLoginRegistr);
			mailTrue(mailLoginRegistr);
		})
	}
	//ProductitemCart
	const productCart = document.querySelector(".product__card .pay__btn");
	if (productCart) {
		productCart.addEventListener("click", (e) => {
			ProductToCart(e.target.dataset.id);
			CartQtw();
			prodInCart();
		})
	}
	prodInCart();
	CartQtw();
	const deleteProduct = document.querySelector(".cart_container .purchases");
	if (deleteProduct) {
		deleteProduct.addEventListener("click", (e) => {
			if (e.target.tagName === "BUTTON") {
				const btn = e.target.dataset.id;
				CartDeletElem(btn);
				e.target.parentElement.remove();
			}
			CartSum()
		})
	}
	CartSum();
	// order
	const orderBtn = document.querySelector("#order");
	if (orderBtn) {
		orderBtn.addEventListener("click", (e) => {
			saveOrder();
			e.preventDefault();
		})
	}
	const orderTologin = document.querySelector("#orderToLogin");
	if (orderTologin) {
		orderTologin.addEventListener("click", (e) => {
			fromOrdertoLogin();
		})
	}
	loginDisplay();
	loginvvod();
	//productCategory
	const category = document.querySelector(".topmenu");
	if (category) {
		category.addEventListener("click", (e) => {
			if (e.target.tagName === "A") {
				ProductCategoryRender(e.target.dataset.id);
			}
		})
	}

	let orderAddd = document.querySelector(".cart__pay__btn");

	if (orderAddd) {
		orderAddd.addEventListener("click", () => {
			addOderStore();
		})
	}
	//imgMove
	const images = document.querySelector(".small__foto");
	if (images) {
		images.addEventListener("click", (e) => {
			if (e.target.tagName === "IMG") {
				imageMove(e.target.src, e.target.parentElement);
			}
		})
	}
});



window.addEventListener("hashchange", async () => {
	// Загрузка страницы Loading page
	await router();
	// Preloader
	setTimeout(getPreloader, 1000);
	// Slider
	clearInterval(sliderInterval);
	const dots = document.querySelector(".items_dots");
	const activeSlider = document.querySelector(".active_slide");
	if (activeSlider) {
		clearInterval(sliderInterval);
		sliderInterval = setInterval(() => {
			nextActiveSlide();
		}, 4000);
		dots.addEventListener("click", (e) => {
			if (e.target.tagName === "LI") {
				clearInterval(sliderInterval);
				sliderInterval = setInterval(() => {
					nextActiveSlide();
				}, 4000);
				const active = document.querySelector(".dot_active");
				active.classList.remove("dot_active");
				e.target.closest("li").classList.add("dot_active");
			}
			const activeItem = putActiveDot();
			putActiveSlide(activeItem);
		})
	}
	let categorySlider = document.querySelector(".slider");
	if (categorySlider) {
		categorySlider.addEventListener("click", (e) => {
			if (e.target.tagName === "A") {
				ProductCategoryRender(e.target.dataset.id);
			}
		})
	}
	// login
	const registOpen = document.querySelector(".regist__btn");
	const modalNone = document.querySelector(".login-wr i");
	const registBtn = document.querySelector(".registerbtn");
	let loginFrom = document.querySelector(".login-go");
	if (registOpen) {
		registOpen.addEventListener("click", openReist);
	}
	if (modalNone) {
		modalNone.addEventListener("click", closeRegist);
	}
	if (registBtn) {
		registBtn.addEventListener("click", writeAccountData);
	}
	if (loginFrom) {
		loginFrom.addEventListener("click", () => {
			chekLogin();
			loginDisplay();
			loginvvod();
		});
	}
	loginDisplay();
	loginvvod();
	//chekLogin
	const mailLogin = document.querySelector(".login .name");
	const passwordLogin = document.querySelector(".login .password");
	const passwordLoginRegistr = document.querySelector(".registration .password");
	const nameLoginRegistr = document.querySelector(".registration .name");
	const mailLoginRegistr = document.querySelector(".registration .mail");
	if (passwordLogin) {
		passwordLogin.addEventListener("blur", () => {
			passwordFields(passwordLogin);
		})
	}
	if (mailLogin) {
		mailLogin.addEventListener("blur", () => {
			passwordFields(mailLogin);
		})
	}
	if (passwordLoginRegistr) {
		passwordLoginRegistr.addEventListener("blur", () => {
			passwordFields(passwordLoginRegistr);
		})
	}
	if (nameLoginRegistr) {
		nameLoginRegistr.addEventListener("blur", () => {
			passwordFields(nameLoginRegistr);
		})
	}
	if (mailLoginRegistr) {
		mailLoginRegistr.addEventListener("blur", () => {
			passwordFields(mailLoginRegistr);
			mailTrue(mailLoginRegistr);
		})
	}
	//ProductitemCart
	const productCart = document.querySelector(".product__card .pay__btn");
	if (productCart) {
		productCart.addEventListener("click", (e) => {
			ProductToCart(e.target.dataset.id);
			CartQtw();
			prodInCart();
		})
	}
	prodInCart();
	CartQtw();
	const deleteProduct = document.querySelector(".cart_container .purchases");
	if (deleteProduct) {
		deleteProduct.addEventListener("click", (e) => {
			if (e.target.tagName === "BUTTON") {
				const btn = e.target.dataset.id;
				CartDeletElem(btn);
				e.target.parentElement.remove();
			}
			CartSum()
		})
	}
	CartSum();
	// order
	const orderBtn = document.querySelector("#order");
	if (orderBtn) {
		orderBtn.addEventListener("click", (e) => {
			saveOrder();
			e.preventDefault();
		})
	}
	const orderTologin = document.querySelector("#orderToLogin");
	if (orderTologin) {
		orderTologin.addEventListener("click", (e) => {
			fromOrdertoLogin();
		})
	}
	loginDisplay();
	loginvvod();
	//productCategory
	const category = document.querySelector(".topmenu");
	if (category) {
		category.addEventListener("click", (e) => {
			if (e.target.tagName === "A") {
				ProductCategoryRender(e.target.dataset.id);
			}
		})
	}

	let orderAddd = document.querySelector(".cart__pay__btn");

	if (orderAddd) {
		orderAddd.addEventListener("click", () => {
			addOderStore();
		})
	}
	//imgMove
	const images = document.querySelector(".small__foto");
	if (images) {
		images.addEventListener("click", (e) => {
			if (e.target.tagName === "IMG") {
				imageMove(e.target.src, e.target.parentElement);
			}
		})
	}
});











