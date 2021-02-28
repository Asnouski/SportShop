import { createProductcategory } from "../components/categoryList";

const ProductCategory = async () => {
	const view = `
	<div class="container">
	<div id="catalog" class="catalog">
	<ul class='product-cont'>
	</ul>
</div>
</div>
		`;
	return view;
}
const ProductCategoryRender = async (category) => {
	const content = await createProductcategory(category);
	const contentContainer = document.querySelector('.product-cont');
	contentContainer.innerHTML = `${content}`
}

export { ProductCategory, ProductCategoryRender };