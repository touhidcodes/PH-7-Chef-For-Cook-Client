import React from "react";
import Header from "../shared/Header/Header";

import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";

const Main = () => {
	return (
		<div className='container mx-auto px-6'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Main;
