import { getAllProducts } from "../utils/getProduct";
import { LocalStorageUtil } from "./producToCart";

const productAdd = async () => {
	const Items = await getAllProducts();
	let view = "";
	let render = "";
	const localStorageUtil = new LocalStorageUtil();
	let cart = localStorageUtil.getProducts();
	let sum = 0;
	if (cart.length >= 1) {
		for (let elem of cart)
			Items.forEach((item, index) => {
				if (elem === item.id) {
					sum += item.price
					view += `
		<li>
		<ul class = "cartProduct">
		<li><a href="http://localhost:8080/#/${item.id}" data-id="${item.id} ">${item.name}</a></li>
		<li><img src="${item.img1}" class="product-cont__img"/></li>
		<li>${item.availability}</li>
		<li class="price">${item.price}руб</li>
		<button class="deletBtn" data-id="${item.id}">Удалить из карзины</button>
		</ul>
		</li>
		`;
				}
			})

	}
	render = `
		${view}
		<h2>Итого ${sum} руб</h2>
		`
	return render;
}

export default productAdd;
