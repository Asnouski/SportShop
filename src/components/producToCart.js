class LocalStorageUtil {
	constructor() {
		this.keyName = "products";
	}

	getProducts() {
		const productsLocalStorage = localStorage.getItem(this.keyName);
		if (productsLocalStorage !== null) {
			return JSON.parse(productsLocalStorage);
		}
		return [];
	}

	putProducts(id) {
		let products = this.getProducts();
		let pushProduct = false;
		const index = products.indexOf(id);
		if (index === -1) {
			products.push(id);
			pushProduct = true;
		} else {
			products.splice(index, 1);
		}
		localStorage.setItem(this.keyName, JSON.stringify(products));
		return { pushProduct, products }
	}
}

const localStorageUtil = new LocalStorageUtil();

const ProductToCart = (id) => {
	localStorageUtil.putProducts(`${id}`);
}

const CartQtw = () => {
	let cart = localStorageUtil.getProducts();
	const cartElems = document.querySelector(".qtw");
	if (cart.length >= 1) {
		cartElems.innerText = cart.length;
	}
	else {
		cartElems.innerText = 0;
	}
}

const CartDeletElem = (elem) => {
	let cart = localStorageUtil.getProducts();
	cart.forEach((item, index) => {
		if (item === elem) {
			cart.splice(index, 1);
			localStorage.setItem("products", JSON.stringify(cart));
		}
	})
	CartQtw();
}
const CartSum = () => {
	const itogo = document.querySelector(".purchases h2");
	const piceElems = document.querySelectorAll(".price");
	const cartBtn = document.querySelector(".cart__pay__btn");
	let sum = 0;
	if (piceElems && itogo && cartBtn) {
		cartBtn.style.display = "block";
		piceElems.forEach((item, index) => {
			sum = sum + parseInt(item.innerHTML);
		})
		itogo.innerHTML = `Итого ${sum} руб`;
		localStorage.setItem("Total", `${sum}`);
	}
	if (sum == 0 && cartBtn) {
		cartBtn.style.display = "none";
	}

}


export { ProductToCart, CartQtw, CartDeletElem, CartSum, LocalStorageUtil };

