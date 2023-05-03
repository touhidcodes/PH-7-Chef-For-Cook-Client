import React, { useState } from "react";
import Recipes from "../Recipes/Recipes";

const RecipesContainer = ({ chef }) => {
	console.log("chef", chef);

	const { recipes } = chef || {};

	console.log("chef info", recipes);
	return (
		<div className='grid grid-cols-3 gap-10'>
			{recipes?.map((recipe) => (
				<Recipes recipe={recipe} />
			))}
		</div>
	);
};

export default RecipesContainer;
