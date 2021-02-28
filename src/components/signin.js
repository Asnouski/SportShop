
const mailLogin = document.querySelector(".login .mail");
const passwordLogin = document.querySelector(".login .password");

const passwordFields = (elem) => {
	let newP = document.createElement("p");
	if (elem.value.trim() === "" && !elem.nextElementSibling) {
		elem.classList.add("red__false");
		elem.parentElement.appendChild(newP).innerHTML = "Заполните поле!";
	}
	if (elem.value.trim() !== "" && elem.nextElementSibling) {
		elem.nextElementSibling.remove();
		elem.classList.remove("red__false");
	}
}

const mailTrue = (elem) => {
	let mailText = /^[^@]+@[^@.]+\.[^@]+$/;
	let newP = document.createElement("p");
	if (mailText.test(elem.value) === false && !elem.nextElementSibling) {
		elem.classList.add("red__false");
		elem.parentElement.appendChild(newP).innerHTML = "введите корректный e-mail";
	}
	if (mailText.test(elem.value) === true && elem.nextElementSibling) {
		elem.nextElementSibling.remove();
		elem.classList.remove("red__false");
	}
}

const openReist = () => {
	const registration = document.querySelector(".registration");
	const modalBlock = document.querySelector("#displayLogin");
	registration.classList.toggle("no__activ__registration");
	modalBlock.style.display = "block";
	modalBlock.style.height = `${screen.height}px`;
}
const closeRegist = () => {
	const registration = document.querySelector(".registration");
	const modalBlock = document.querySelector("#displayLogin");
	registration.classList.toggle("no__activ__registration");
	modalBlock.style.display = "none";
}



const writeAccountData = () => {
	const userName = document.querySelector("#nameUser");
	const userMail = document.querySelector("#nameMail");
	const userPassword = document.querySelector("#namePw");
	const registration = document.querySelector(".registration");
	const modalBlock = document.querySelector("#displayLogin");
	localStorage.setItem("user-name", userName.value);
	localStorage.setItem("user-mail", userMail.value);
	localStorage.setItem("user-pw", userPassword.value);
	registration.classList.toggle("no__activ__registration");
	modalBlock.style.display = "none";

};

const chekLogin = () => {
	const nameStore = localStorage.getItem("user-name");
	const passwordStore = localStorage.getItem("user-pw");
	const userName = document.querySelector("#mailUser");
	const userPassword = document.querySelector("#passwordUser");
	const registration = document.querySelector(".account .container");
	const loginOk = document.querySelector("#LoginOk");
	if (nameStore === userName.value && passwordStore === userPassword.value) {
		localStorage.setItem("Login", "ok");

	}
	else {
		alert("Не верно введены данные");
	}
}

const loginDisplay = async () => {
	const logindStore = await localStorage.getItem("Login");
	const nameStore = await localStorage.getItem("user-name");
	const mailStore = await localStorage.getItem("user-mail");
	const registration = document.querySelector(".account .container");
	const loginOk = document.querySelector("#LoginOk");
	const orderStore = localStorage.getItem("order");
	if (logindStore === "ok" && loginOk) {
		loginOk.style.display = "block";
		registration.style.display = "none";
		loginOk.innerHTML = ` 
		<h3>Ваш Логин: ${nameStore}</h3>
		<p>Ваш e-mail: ${mailStore}</p>
		`;
		addOder();
	}
}
const loginvvod = () => {
	const logindStore = localStorage.getItem("Login");
	const nameStore = localStorage.getItem("user-name");
	const vvod = document.querySelector(".vvod");
	if (logindStore === "ok") {
		vvod.innerText = nameStore;
	}
	else vvod.innerText = "Войти";
	return vvod.innerText;
}

const addOder = () => {
	const orderStore = localStorage.getItem("order");
	const loginOk = document.querySelector("#LoginOk");
	if (orderStore) {
		let Newp = document.createElement("p");
		Newp.innerHTML = `Ваш заказ №: ${orderStore}. Обработка.`
		loginOk.appendChild(Newp);
	}
}
export { openReist, closeRegist, writeAccountData, chekLogin, loginDisplay, passwordFields, mailTrue, loginvvod, addOder };


