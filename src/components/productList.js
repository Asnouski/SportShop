import { getAllProducts } from "../utils/getProduct";
import { LocalStorageUtil } from "../components/producToCart";


const createProduct = async () => {
	const Items = await getAllProducts();
	let list = "";
	Items.forEach((item, index) => {
		list += `
			<li>
			<span class="product-cont__name">${item.name}</span>
			<img src="${item.img1}" class="product-cont__img"/>
			<span class="product-cont__price">Цена ${item.price} </span>
			<button class="product-cont__btn"><a href="http://#/${item.id}" data-id="${item.id} ">Посмотреть информацию</a></button>
			</li>
			`
	})
	return list;
}

const localStorageUtil = new LocalStorageUtil();
const prodInCart = () => {
	let cart = localStorageUtil.getProducts();
	const productBnt = document.querySelector(".pay__btn");
	if (productBnt) {
		for (let i = 0; i < cart.length; i++) {
			if (productBnt.dataset.id === cart[i]) {
				productBnt.innerHTML = "Убрать их карзины";
				productBnt.classList.add("activeBtn");
				break;
			}
			else {
				productBnt.innerHTML = "Добавить в карзину";
				productBnt.classList.remove("activeBtn");
			}
		}
		if (cart.length === 0) {
			productBnt.innerHTML = "Добавить в карзину";
			productBnt.classList.remove("activeBtn");
		}
	}

}

const imageMove = (src, li) => {
	let imgageBig = document.querySelector(".big__foto");
	let active = document.querySelector(".activ__foto");
	imgageBig.innerHTML = `<img src="${src}" alt="user">`
	active.classList.remove("activ__foto");
	li.classList.add("activ__foto");
}

export { createProduct, prodInCart, imageMove };
