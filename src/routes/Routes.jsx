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
				element: <Home />,
				loader: ({ params }) =>
					fetch(
						"https://ph-7-assignment-11-chef-for-cook-server.vercel.app/chefs"
					),
			},
			{
				path: "/blogs",
				element: <Blogs />,
			},
		],
	},
]);

export default router;
