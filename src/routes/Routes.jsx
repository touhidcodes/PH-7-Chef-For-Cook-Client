import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home/>,
			},
			{
				path: "/blogs",
				element: <Blogs />,
			},
		],
	},
]);

export default router;
