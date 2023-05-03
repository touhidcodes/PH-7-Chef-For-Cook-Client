import React from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
	const { id, name, picture, experience, recipes, likes } = chef;
	return (
		<div className='mt-10'>
			<div className='card w-50 lg:w-96 bg-base-100 shadow-xl'>
				<figure>
					<img src={picture} alt='Chef' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title text-2xl'>{name}</h2>
					<p>
						<span className='font-semibold'>Years of Experience: </span>
						{experience}
					</p>
					<p>
						<span className='font-semibold'>Numbers of Recipes: </span>
						{recipes}
					</p>
					<p>
						<span className='font-semibold'>Likes: </span>
						{likes}
					</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-error text-white font-semibold'>
							<Link to={`/recipes/${id}`}> View Recipes</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChefCard;
