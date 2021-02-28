const Login = () => {
	const view = `
	<div class="account">
	<div class="container">
		<div class="login">
			<div class="login-wr">
				<h2>УЖЕ ЕСТЬ АККАУНТ?</h2>
				<p>ВВЕДИТЕ E-mail И ПАРОЛЬ:</p>
				<form class="form">
					<div class="imp">
					<input class="name" id="mailUser"  type="text" name='name' size="30" value="" required placeholder="Ваше имя">
					</div>
					<div class="imp">
						<input class="password" id="passwordUser" type="password" placeholder="Пароль" name='password' size="30" value=""
							required>
					</div>
					<!-- <input type="email" id="mail" name='mail' size="30" value="" required> -->
					<button type="submit" class="login-go"> Авторизация </button>
					<!-- 	<a href="#">
							<p> У вас нет аккаунта? Регистрация </p>
						</a> -->
				</form>
			</div>
		</div>
		<div class="regist">
			<div class="cont">
				<h2>СОЗДАТЬ АККАУНТ</h2>
				<p>У ВАС НЕТ ЛИЧНОГО КАБИНЕТА НА САЙТЕ SPORT? УЗНАЙТЕ О ВСЕХ ВОЗМОЖНЫХ ПРЕИМУЩЕСТВАХ</p>
				<div class="info">
					- Увеличенный обмен и возврат товаров до 365 дней<br>
					- Эксклюзивная информация об акциях и специальные предложения<br>
					- Электронные чеки в личном кабинете<br>
					- Бесплатное гарантийное тех.обслуживание велосипедов в течение полугода<br>
					- Приглашения на мастер-классы и спортивные мероприятия наших партнеров *При предъявлении карты<br>
					Sport при совершении покупок
				</div>
				<button class="regist__btn"> Создать аккаунт</button>
			</div>

		</div>
	</div>
	<div class="registration no__activ__registration">
		<div class="login-wr">
			<h2>Для регистрации заполните форму</h2>
			<i class="far fa-times-circle"></i>
			<div class="form">
				<div class="imp">
					<input class="name" id="nameUser" type="text" name='name' size="30" value="" required placeholder="Ваше имя">
				</div>
				<div class="imp">
					<input class="mail" id="nameMail" type="email" id="mail" name='mail' size="30" value="" required
						placeholder="E-mail">
				</div>
				<div class="imp">
					<input class="password" id="namePw" type="password" placeholder="Пароль" name='password' size="30" value=""
						required>
				</div>	
				<button type="submit" class="registerbtn"> Зарегестрироваться </button>
				<!-- 	<a href="#">
					<p> У вас нет аккаунта? Регистрация </p>
				</a> -->
			</div>
		</div>
	</div>
	<div id="LoginOk">

	</div>
</div>
<div id="displayLogin"></div>
      `;
	return view;
}

export default Login;