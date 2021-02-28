import getHash from "../utils/getHash";
import { getProduct } from "../utils/getProduct";

const ProductItem = async () => {
	const id = getHash();
	const elem = await getProduct(id);
	const view = `
   <div class="product__card">
		<div class="container">
			<div class="card__foto">
				<div class='big__foto'>
					<img src="${elem.img1}" alt="foto1">
				</div>
				<ul class='small__foto'>
					<li class="activ__foto"><img src="${elem.img1}" alt="foto1"></li>
					<li><img src="${elem.img2}" alt="foto2"></li>
					<li><img src="${elem.img3}" alt="foto3"></li>
				</ul>
			</div>
			<div class="info__card">
				<div class="information">
					<h2>${elem.name}</h2>
					<div>
						<label for="catalog">Выберите размер</label>
						<select name='catalog' required>
							<option value='размер'>S</option>
							<option value='размер'>M</option>
							<option value='размер'>L</option>
							<option value='размер'>XL</option>
							<option value='размер'>XXL</option>
						</select>
					</div>
					<p>${elem.description}</p>
					<p class="price">Цена ${elem.price} руб</p>
					<button type="submit" class="pay__btn" data-id="${elem.id}">Добавить в карину</button>
					<a href="#"><i class="fas fa-angle-left"></i> Вернуться к покупкам</a>
				</div>
			</div>
		</div>
	</div>
  `;
	return view;

}

export { ProductItem };