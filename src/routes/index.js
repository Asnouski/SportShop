import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import { ProductCategory } from "../pages/ProductCategory";
import Order from "../pages/Order";
import Header from "../template/Header";
import Footer from "../template/Footer";
import getHash from "../utils/getHash";
import getResolveRoutes from "../utils/getResolveRoutes";
import ErrorNotFound from "../pages/ErrorNotFound";
import { ProductItem } from "../pages/ProductItem";


const routes = {
	"/": Home,
	"/cart": Cart,
	"/login": Login,
	"/productcategory": ProductCategory,
	"/order": Order,
	"/:id": ProductItem
}

const router = async () => {
	const header = null || document.getElementById("header");
	const content = null || document.getElementById("content");
	const footer = null || document.getElementById("footer");
	header.innerHTML = Header();
	footer.innerHTML = Footer();
	let hash = getHash();
	let route = await getResolveRoutes(hash);
	let render = routes[route] ? routes[route] : ErrorNotFound;
	content.innerHTML = await render();
}

export default router;

