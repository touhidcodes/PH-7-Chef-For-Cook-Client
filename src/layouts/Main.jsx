import React from "react";
import Header from "../shared/Header/Header";

import { Outlet } from "react-router-dom";

const Main = () => {
	return (
		<div className='container mx-auto px-6'>
			<Header />
			<Outlet />
		</div>
	);
};

export default Main;
