import React from "react";
import image_1 from "../../../assets/img/2.jpg";
import profile from "../../../assets/img/profile.jpg";
import { Rating } from "@smastrom/react-rating";

const Featured = () => {
	return (
		<div className='mt-10'>
			<h4 className='text-4xl font-semibold ml-4'>Featured Recipe:</h4>
			<div className='card lg:card-side bg-base-100 shadow-xl mt-10'>
				<figure>
					<img
						src={image_1}
						alt='Album'
						className='w-[700px] h-96 opacity-70'
					/>
				</figure>
				<div className='card-body items-center'>
					<figure>
						<div className='avatar  placeholder'>
							<div className='bg-neutral-focus text-neutral-content rounded-full w-24'>
								<img src={profile} alt='' className='h-full' />
							</div>
						</div>
					</figure>
					<p className='text-xl font-semibold'>Arica Sarrah</p>
					<Rating style={{ maxWidth: 100 }} value={5} readOnly key={5} />
					<h2 className='card-title text-3xl'>Green Vegetable Salad!</h2>
					<p>Best way to keep your body healthy....</p>
					<div className='card-actions justify-center'>
						<button className='btn btn-error text-white'>Go to Recipe</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
