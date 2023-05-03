import React from "react";

const ChefCard = ({ chef }) => {
	console.log(chef);
	const { name, picture, experience, recipes } = chef;
	console.log(name);
	return (
		<div className='mt-10'>
			<div className='card w-96 bg-base-100 shadow-xl'>
				<figure>
					<img src={picture} alt='Chef' />
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{name}</h2>
					<p>
						<span className='font-semibold'>Years of Experience: </span>
						{experience}
					</p>
					<p>
						<span className='font-semibold'>Numbers of Recipes: </span>
						{recipes}
					</p>
					<div className='card-actions justify-end'>
						<button className='btn btn-error'>Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChefCard;
