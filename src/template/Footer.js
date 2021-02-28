import bank1 from "../images/alfabank.png";
import bank2 from "../images/belcart.png";
import bank3 from "../images/mastercard.png";
import bank4 from "../images/mastercard2.png";
import bank5 from "../images/visa.png";
import bank6 from "../images/visa2.png";

const Footer = () => {
	const view = `
	<footer class="info">
		<div class="container">
			<div class="urist">
				© 2020 ООО «Спорт». Юридический адрес: 220121, г. Минск, ул. П. Глыбы, д. 5, каб. 55 (цокольный
				этаж). Минским горисполкомом 24.08.2012 в Единый государственный регистр юридических лиц и индивидуальных
				предпринимателей внесена запись о государственной регистрации юридического лица за No 191622233.
			</div>
			<div class="cards">
				<ul>
					<li><img src="${bank1}" alt="visa" title="visa"></li>
					<li><img src="${bank2}" alt="belcart" title="belcart"></li>
					<li><img src="${bank3}" alt="visa" title="visa"></li>
					<li><img src="${bank4}" alt="visa" title="visa"></li>
					<li> <img src="${bank5}" alt="mastercard" title="mastercard"></li>
					<li><img src="${bank6}" alt="alfabank title=" alfabank"></li>
				</ul>
			</div>
			<div class="insta">
				<h4>Instagram</h4>
				<ul>
					<li><a href="https://www.instagram.com/" title="blog" target="_blank">
							<img src="https://cs2.livemaster.ru/storage/a9/a3/2c53f6880965448c3da4d9fb82a8--odezhda-kostyum-sport-shik.jpg" alt="insta" title="insta"></a></li>
					<li><a href="https://www.instagram.com/" title="blog" target="_blank">
							<img src="https://vritmetest.demo5.sitepro.by/images/catalog/euphoria/Desire-mart2019/5A3A0732-2_-_-.jpg" alt="insta" title="insta"></a></li>
					<li><a href="https://www.instagram.com/" title="blog" target="_blank">
							<img src="https://modax.ua/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/0/0/00000011777.jpg " alt="insta" title="insta"></a></li>
					<li><a href="https://www.instagram.com/" title="blog" target="_blank">
							<img src="http://img.ltwebstatic.com/images3_pi/2020/06/23/1592896386bbc3efa8413dbe1b520b6ef92dbf8d9f.jpg " alt="insta" title="insta"></a></li>
					<li><a href="https://www.instagram.com/" title="blog" target="_blank">
							<img src="https://static-ru.insales.ru/images/products/1/7742/300932670/B7EB7485-3E08-4C93-ADA4-7B0A75A50EEC.jpeg " alt="insta" title="insta"></a></li>
					<li><a href="https://www.instagram.com/" title="blog" target="_blank">
							<img src="https://ae01.alicdn.com/kf/HTB1v2s1adfvK1RjSspfq6zzXFXaf/WITHZZ-Casual-Pants-Printed-Leggings-New-Arrival-Women-for-Fitness-Workout-Jeggings-Sporting-Athleisure-Active-Wear.jpg " alt="insta" title="insta"></a></li>
					<li><a href="https://www.instagram.com/" title="blog" target="_blank">
							<img src="https://s22221.cdn.ngenix.net/media/catalog/product/cache/1/image/682165d1ec9fe2eb345bfcf8155024cf/C/O/CONT-7229_foto_od_3260.jpg " alt="insta" title="insta"></a></li>
					<li><a href="https://www.instagram.com/" title="blog" target="_blank">
							<img src=" https://ae01.alicdn.com/kf/HTB19UhcahrvK1RjSszeq6yObFXaj/-.jpg" alt="insta" title="insta"></a></li>
					<li><a href="https://www.instagram.com/" title="blog" target="_blank">
							<img src=" https://images.ua.prom.st/2245590961_w640_h640_losiny-dlya-fitnesa.jpg" alt="insta" title="insta"></a></li>
				</ul>
			</div>
			<div class="contact">
				<h4>Контакты</h4>
				<ul>
					<li>
						<span><i class="fas fa-map-marker-alt"></i> Адрес:</span>
						<p>Минск, ул. П. Глебки, д. 5</p>
					</li>
					<li>
						<span><i class="fas fa-phone-alt"></i> Телефоны:</span>
						<p>310-341-3870<br>
							310-341-3872 </p>
					</li>
					<li>
						<span><i class="far fa-envelope"></i> Email:</span>
						<p>info@sport.com<br>
							info@yousport.com</p>
					</li>
				</ul>
			</div>
		</div>
	</footer>
    `;
	return view;
}

export default Footer;