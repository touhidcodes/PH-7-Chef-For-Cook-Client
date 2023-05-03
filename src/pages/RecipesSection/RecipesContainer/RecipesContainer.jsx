import React, { useState } from "react";
import Recipes from "../Recipes/Recipes";

const RecipesContainer = ({ chef }) => {
	console.log("chef", chef);

	const { recipes } = chef || {};

	console.log("chef info", recipes);
	return (
		<div>
			{recipes?.map((recipe) => (
				<Recipes recipe={recipe} />
			))}
		</div>
	);
};

export default RecipesContainer;
