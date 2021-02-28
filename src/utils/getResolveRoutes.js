const getResolveRoutes = (route) => {
	if (route.length <= 2) {
		let validationRoute = route === "/" ? route : "/:id";
		return validationRoute;
	}
	return `/${route}`;
}

export default getResolveRoutes;
