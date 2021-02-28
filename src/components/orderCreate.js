import { LocalStorageUtil } from "./producToCart";
import { getAllProducts } from "../utils/getProduct";
const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

const createCartInfo = async () => {
	const Items = await getAllProducts();
	const localStorageUtil = new LocalStorageUtil();
	let cart = localStorageUtil.getProducts();
	let totalStore = localStorage.getItem("Total");
	let view = "";
	let render = "";
	let num = 0;
	for (let elem of cart) {
		Items.forEach((item, index) => {
			if (elem === item.id) {
				num++
				view += `
		<li>${num}) ${item.name}</li>
		`;
			}
		})
	};

	render = `
		<ul>
		${view}
		<h2>Итого ${totalStore} руб</h2>
		</ul>
			`;
	return render;
}

const saveOrder = () => {
	const orderOk = document.querySelector("#displayOrder");
	const orderAdd = document.querySelector(".orderAdd");
	orderAdd.style.display = "block";
	orderOk.style.display = "block";
}

const fromOrdertoLogin = () => {
	const randomElem = getRandomInt(100, 999)
	const orderOk = document.querySelector("#displayOrder");
	const orderAdd = document.querySelector(".orderAdd");
	orderAdd.style.display = "none";
	orderOk.style.display = "none";
	localStorage.setItem("products", JSON.stringify([]));
}


const addOderStore = () => {
	const randomElem = getRandomInt(100, 999)
	localStorage.setItem("order", `${randomElem}`)
}

export { createCartInfo, getRandomInt, saveOrder, fromOrdertoLogin, addOderStore };