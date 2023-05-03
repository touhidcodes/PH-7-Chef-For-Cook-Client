import React from "react";
import { BeakerIcon, HeartIcon } from "@heroicons/react/24/solid";

const Recipes = ({ recipe }) => {
	const { recipe_id, name, image, ratings, ingredients, method } = recipe;
	// console.log(recipe_id, name, image, ratings, ingredients, method);
	return (
		<div>
			<div className='card w-96 h-[950px] bg-base-100 shadow-xl'>
				<figure>
					<img src={image} alt={name} className='h-60 w-full' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{name}</h2>
					<p>
						<span className='font-semibold'>Ingredients: </span>
						{ingredients.slice(0, 6).map((item) => (
							<li>{item}</li>
						))}
					</p>
					<p>
						<span className='font-semibold'>Cooking Method: </span>
						{method.length < 600 ? (
							method
						) : (
							<>
								{method.slice(0, 600)}...
								<p className='font-semibold text-red-400'>Load More</p>
							</>
						)}
					</p>
					<div className='card-actions'>
						<button>
							<HeartIcon className='h-6 w-6 text-red-400' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipes;
