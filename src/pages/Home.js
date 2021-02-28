import Slider1 from "../images/slider1.jpeg";
import Slider2 from "../images/slider2.jpeg";
import Slider3 from "../images/slider3.jpeg";
import Slider5 from "../images/slider5.jpeg";
import "../styles/scss/main.scss";
import { createProductcategory } from "../components/categoryList";

const Home = async () => {  
	const products = await createProductcategory("yes");
	const view = `
		<div class=" infomation">
		<div class="container">
			<div class="slider">
				<div class="item__photo active_slide">
					<img src="${Slider1}" />
					<div class="slider-cont"><a href="#/productcategory/" class="down" data-id="женщина">Женщинам</a></div>
				</div>
				<div class="item__photo">
					<img src="${Slider2}" alt="slade2" />
					<div class="slider-cont"><a href="#/productcategory/" class="down" data-id="мужчина">Мужчинам</a></div>
				</div>
				<div class="item__photo">
					<img src="${Slider3}" alt="slade3" />
					<div class="slider-cont"><a href="#/productcategory/" data-id="Дети">Одежда для детей</a></div>
				</div>
				<div class="item__photo">
					<img src="${Slider5}" alt="slade5" />
					<div class="slider-cont"><a href="#/productcategory/" data-id="yes">Распродажа</a></div>
				</div>
				<ul class="items_dots">
					<li class="dot_active"></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
			<div id="catalog" class="catalog">
			<h2>Выбор магазина! Товары на скидке !</h2>
				<ul class='product-cont'>
				${products}
				</ul>
			</div>
		</div>
	</div>
      `;
	return view;
}

export default Home;