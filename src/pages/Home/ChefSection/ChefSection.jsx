import React from "react";
import ChefCard from "../ChefCard/ChefCard";

const ChefSection = ({ chefs }) => {
	return (
		<div className='mt-10'>
			<h4 className='text-3xl'>Know Your Chefs</h4>
			<div className='grid grid-cols-3 gap-10'>
				{chefs.map((chef) => (
					<ChefCard chef={chef} key={chef.id}></ChefCard>
				))}
			</div>
		</div>
	);
};

export default ChefSection;
