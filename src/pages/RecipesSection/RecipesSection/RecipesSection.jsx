import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeBanner from "../RecipeBanner/RecipeBanner";
import RecipesContainer from "../RecipesContainer/RecipesContainer";

const RecipesSection = () => {
	const cook = useLoaderData();
	const [recipeData, setRecipeData] = useState();

	useEffect(() => {
		fetch(
			"https://ph-7-assignment-11-chef-for-cook-server-touhidcodes.vercel.app/recipes"
		)
			.then((res) => res.json())
			.then((data) => setRecipeData(data));
	}, []);

	const chef = recipeData?.find((data) => parseInt(data.id) === cook.id);
	console.log("chef data", chef);
	return (
		<div className='mt-10'>
			<RecipeBanner cook={cook} />
			<RecipesContainer chef={chef} />
		</div>
	);
};

export default RecipesSection;
