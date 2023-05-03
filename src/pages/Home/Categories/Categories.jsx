import React from "react";
import image_1 from "../../../assets/img/1.jpg";
import image_2 from "../../../assets/img/5.jpg";
import image_3 from "../../../assets/img/6.jpg";
import image_4 from "../../../assets/img/2.jpg";

const Categories = () => {
	return (
		<div className='mt-10'>
			<h4 className='text-4xl font-semibold ml-4'>
				Popular Recipe Categories:
			</h4>
			<div className='grid grid-cols-1 lg:grid-cols-4 gap-10 mt-10'>
				{/* card 1 */}
				<div className='card w-full bg-base-100 shadow-xl h-96'>
					<figure>
						<img src={image_1} alt='foods' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title text-2xl'>Bangladeshi Foods</h2>
						<p>50 Recipes</p>
					</div>
				</div>
				{/* card 2 */}
				<div className='card w-full bg-base-100 shadow-xl h-96'>
					<figure>
						<img src={image_2} alt='foods' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title text-2xl'>Japanese Foods</h2>
						<p>38 Recipes</p>
					</div>
				</div>
				{/* card 3 */}
				<div className='card w-full bg-base-100 shadow-xl h-96'>
					<figure>
						<img src={image_3} alt='foods' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title text-2xl'>Thai Foods</h2>
						<p>25 Recipes</p>
					</div>
				</div>
				{/* card 4*/}
				<div className='card w-full bg-base-100 shadow-xl h-96'>
					<figure>
						<img src={image_4} alt='foods' />
					</figure>
					<div className='card-body'>
						<h2 className='card-title text-2xl'>American Foods</h2>
						<p>45 Recipes</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;
