//const JSON_CATALOG = "http://localhost:3006/data";
const JSON_CATALOG = "https://raw.githubusercontent.com/Asnouski/shopProgect/main/src/data/product.json";

const getResource = async (url) => {
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`Error code ${res.status}`);
	}
	return res.json();
}

const getProduct = async (id) => {
	const res = await getResource(`${JSON_CATALOG}`);
	return res.data.find((item, index) => {
		if(item.id == id){
			return item;
		}
	});
}

const getAllProducts = async () => {
	const res = await getResource(JSON_CATALOG);
	return res.data;
}



export { getAllProducts, getProduct };

