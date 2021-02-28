import { getAllProducts } from "../utils/getProduct";

const createProductcategory = async (elem) => {
	const Items = await getAllProducts();
	let list = "";
	Items.forEach((item, index) => {
		if (item.category === elem) {
			list += `
			<li>
			<span class="product-cont__name">${item.name}</span>
			<img src="${item.img1}" class="product-cont__img"/>
			<span class="product-cont__price">Цена ${item.price} </span>
			<button class="product-cont__btn"><a href="#/${item.id}" data-id="${item.id} ">Посмотреть информацию</a></button>
			</li>
			`
		}
		if (item.gender === elem) {
			list += `
			<li>
			<span class="product-cont__name">${item.name}</span>
			<img src="${item.img1}" class="product-cont__img"/>
			<span class="product-cont__price">Цена ${item.price} </span>
			<button class="product-cont__btn"><a href="#/${item.id}" data-id="${item.id} ">Посмотреть информацию</a></button>
			</li>
			`
		}
		if (item.sale === elem) {
			list += `
			<li>
			<span class="product-cont__name">${item.name}</span>
			<img src="${item.img1}" class="product-cont__img"/>
			<span class="product-cont__price">СКИДКА 20% </span>
			<span class="product-cont__price">Цена ${item.price} </span>
			<button class="product-cont__btn"><a href="#/${item.id}" data-id="${item.id} ">Посмотреть информацию</a></button>
			</li>
			`;
		}
	})
	return list;
}

export { createProductcategory };
