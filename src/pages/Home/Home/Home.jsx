import React from "react";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import ChefSection from "../ChefSection/ChefSection";
import Categories from "../Categories/Categories";
import Featured from "../Featured/Featured";

const Home = () => {
	const chefs = useLoaderData();

	return (
		<div>
			<Banner />
			<ChefSection chefs={chefs}></ChefSection>
			<Categories />
			<Featured />
		</div>
	);
};

export default Home;
