import React from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ChefSection from "../ChefSection/ChefSection";

const Home = () => {
	const chefs = useLoaderData();

	return (
		<div>
			<Banner />
			<ChefSection chefs={chefs}></ChefSection>
		</div>
	);
};

export default Home;
