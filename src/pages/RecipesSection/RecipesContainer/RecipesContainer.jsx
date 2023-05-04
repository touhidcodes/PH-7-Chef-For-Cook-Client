import React, { useState } from "react";
import Recipes from "../Recipes/Recipes";

const RecipesContainer = ({ chef }) => {
	const { recipes, cook_name } = chef || {};

	return (
		<div className='mt-20'>
			<h4 className='text-3xl font-semibold ml-4'>
				Popular Recipes of Chef
				<span className='text-red-400'> {cook_name}</span>
			</h4>
			<div className='grid grid-cols-3 gap-10 mt-10'>
				{recipes?.map((recipe) => (
					<Recipes recipe={recipe} />
				))}
			</div>
		</div>
	);
};

export default RecipesContainer;
