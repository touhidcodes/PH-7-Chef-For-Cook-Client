import React from "react";
import { useLoaderData } from "react-router-dom";

const Recipes = () => {
	const recipe = useLoaderData();
	console.log(recipe);
	return <div>This is recipes</div>;
};

export default Recipes;
