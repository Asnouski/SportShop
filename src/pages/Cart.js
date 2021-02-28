import productAdd from "../components/cartAdd";

const Cart = async () => {
	const elems = await productAdd()
	elems;
	const view = `
	<div class="cart_container">
		<ul class="container">
			<h1>Оформление заказа</h1>
			<p>список товаров</p>
			<ul class="infom">	
			</ul>
			<ul class="purchases">
				${elems}
			</ul>
			<div class="cart__pay">
				<a href="#"><i class="fas fa-angle-left"></i> Вернуться к покупкам</a>
				<button type="submit" class="cart__pay__btn"><a href="#/order/"> Оформит заказ</a> </button>
			</div>
		</ul>
	</div> 
      `;
	return view;
}

export default Cart;