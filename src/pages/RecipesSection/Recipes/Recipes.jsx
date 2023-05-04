import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = ({ recipe }) => {
	const [like, setLike] = useState(true);
	const { recipe_id, name, image, ratings, ingredients, method } = recipe;

	const handleLike = () => {
		setLike(false);
		toast(`${name} added into your favorites`);
	};
	return (
		<div>
			<div className='card w-96 h-[920px] bg-base-100 shadow-xl'>
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
						{method.length < 500 ? (
							method
						) : (
							<>
								{method.slice(0, 500)}...
								<p className='font-semibold text-red-400'>Load More</p>
							</>
						)}
					</p>
					<div className='card-actions flex items-center'>
						<div className='flex items-center flex-grow'>
							<Rating
								style={{ maxWidth: 100 }}
								value={ratings}
								readOnly
								key={ratings}
							/>
							<p className='ml-2 font-semibold'>{ratings}</p>
						</div>
						<button
							className='btn  btn-error'
							onClick={handleLike}
							disabled={!like}
						>
							<p className=' text-white'>Like </p>
							<HeartIcon className='h-6 w-6 ml-3 text-white' />
							<ToastContainer />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Recipes;
