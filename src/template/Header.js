const Header = () => {
	const view = `
		<div class="container">
			<div class="header_one">
				<div class="logo">
				<a href="#/">
					<i class="fas fa-snowboarding"> </i>SPORT</a>
				</div>
				<div class="global-search">
					<svg class="search-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
						<path stroke-linecap="round" stroke="#5b5b5b" stroke-linejoin="round" stroke-width="2"
							d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"></path>
					</svg>
					<div class="input-search">
						<label for="global-search">
							<input type="text" class="input-go" placeholder="Я хочу купить..." name="global-search"
								autocomplete="off" value="">
						</label>
					</div>
				</div>
				<div class="nav-list">
					<div class="user">
					<a href="#/login/"><button>
							<svg class="user-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
									stroke="#5b5b5b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								</path>
							</svg>
							<span class="vvod"></span>
						
						</button></a>
					</div>
					<div class="cart">
					<a href="#/cart/">
						<button>
							<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2zM1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
									stroke="#5b5b5b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								</path>
							</svg>
							<span class="corzina">Корзина</span>
						</button></a>
						<div class="qtw"></div>
					</div>
				</div>
			</div>
			<nav>
				<ul class="topmenu">
					<li><a href="#/productcategory/" class="down" data-id="мужчина">Мужчинам</a>
						<ul class="submenu">
							<li><a href="#/productcategory/" data-id="man_cart">Куртки</a></li>
							<li><a href="#/productcategory/" data-id="man_trousers">Штаны</a></li>
							<li><a href="#/productcategory/" data-id="man_t-shirt">Майки</a></li>
							<li><a href="#/productcategory/" data-id="man_shorts">Шорты</a></li>
						</ul>
					</li>
					<li><a href="#/productcategory/" class="down" data-id="женщина">Женщинам</a>
						<ul class="submenu">
							<li><a href="#/productcategory/" data-id="woman_cart">Куртки</a></li>
							<li><a href="#/productcategory/" data-id="woman_trousers">Штаны</a></li>
							<li><a href="#/productcategory/" data-id="woman_t-shirt">Майки</a></li>
							<li><a href="#/productcategory/" data-id="woman_shorts">Шорты</a></li>
						</ul>
					</li>
					<li><a href="#/productcategory/" class="down" data-id="Дети">Детям</a>
						<ul class="submenu">
							<li><a href="#/productcategory/" data-id="child_cart">Куртки</a></li>
							<li><a href="#/productcategory/" data-id="child_trousers">Штаны</a></li>
							<li><a href="#/productcategory/" data-id="child_t-shirt">Майки</a></li>
							<li><a href="#/productcategory/" data-id="child_shorts">Шорты</a></li>
						</ul>
					</li>
					<li><a href="#/productcategory/" data-id="yes">Распродажа</a></li>
				</ul>
			</nav>
		</div>
    `;
	return view;
}

export default Header;