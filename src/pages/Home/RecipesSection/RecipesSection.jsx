import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import RecipeBanner from "../RecipeBanner/RecipeBanner";

const RecipesSection = () => {
	const cook = useLoaderData();
	const [recipeData, setRecipeData] = useState();

	useEffect(() => {
		fetch(
			"https://ph-7-assignment-11-chef-for-cook-server-touhidcodes.vercel.app/recipes"
		)
			.then((res) => res.json())
			.then((data) => setRecipeData(data?.recipes));
	}, []);

	return (
		<div className='mt-10'>
			<RecipeBanner cook={cook} />
		</div>
	);
};

export default RecipesSection;
