import { createCartInfo } from "../components/orderCreate";

const Order = async () => {
	const nameStore = localStorage.getItem('user-name');
	const mailStore = localStorage.getItem('user-mail');
	const oderStore = localStorage.getItem('order');
	const cartInfo = await createCartInfo();
	const view = `
<div class="order"> 
	<div class="container">
			<div class="login-wr">
				<h2>Ваш заказ № ${oderStore}</h2>
				<p>Ваш логин: ${nameStore}</p>
				<p>Ваш e-mail: ${mailStore}</p>
				<form class="form">
				<div>
				<label for="phone">Номер телефона (+375xxxxxxxxx):</label>
				<input input type="tel" name="tel" value="" required>
			</div>
			<div> 
				<label for="dostavka">Доставка:</label>
				<select name='dostavka' required>
					<option value='с 10 до 13'>
					с 10 до 13
					</option>
					<option value='с 13 до 15'>с 13 до 15</option>
					<option value='с 15 до 20'>с 15 до 20</option>
				</select>
			</div>
			<div>
				<label for="oplata">Оплата:</label>
				<input type="radio" name="oplata" id="place1" value="no">Наличные 
				<input type="radio" name="oplata" id="place2" value="$">Карта
			</div>
			<div>
				<label for="remember">Напонить за 2 часа:</label>
				<input type="checkbox" id="remember" name="remember" value="yes">
			</div>
			<input type="submit" id="order" value="Заказать"/>
				</form>
			</div>
		<div class="cart__info">
		<h2>Товары</h2>
		${cartInfo}
		</div>
		</div>
<div class="orderAdd">
		<div class="login-wr">
			<h2>Спасибо за заказ! </br>
			Ваш заказ № ${oderStore}</h2>
			<button id="orderToLogin"><a href="#/login/">Перейти в личный кабинет</a></button>
			</div>
		</div>
		</div>
	</div>
	<div id="displayOrder"></div>
      `;
	return view;
}

export default Order;