import React from "react";

const RecipeBanner = ({ cook }) => {
	const { id, name, picture, experience, recipes, likes, bio } = cook;
	return (
		<div className='grid grid-cols-3 gap-10'>
			<div className='col-span-2'>
				<div className='card w-full bg-base-100 shadow-xl p-4'>
					<div className='card-body'>
						<div className='grid grid-cols-2 gap-5 items-center'>
							<div>
								<img src={picture} alt='' className='h-48 rounded' />
							</div>
							<div>
								<h2 className='card-title text-3xl'>{name}</h2>
								<p className='mt-2 text-xl'>
									<span className='font-semibold'>Years of Experience: </span>
									{experience}
								</p>
								<p className='mt-2 text-xl'>
									<span className='font-semibold'>Numbers of Recipes: </span>
									{recipes}
								</p>
								<p className='mt-2 text-xl'>
									<span className='font-semibold'>Likes: </span>
									{likes}
								</p>
							</div>
						</div>

						<p className='mt-2 '>
							<span className='font-semibold'>Biography: </span>
							{bio}
						</p>
					</div>
				</div>
			</div>
			{/* side Section */}
			<div>
				<div className='card w-full bg-base-100 shadow-xl'>
					<figure>
						<div className='avatar mt-8'>
							<div className='w-24 rounded-full'>
								<img src={picture} />
							</div>
						</div>
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
						<div className='card-actions justify-center mt-2'>
							<button className='btn btn-error text-white font-semibold'>
								Follow
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeBanner;
