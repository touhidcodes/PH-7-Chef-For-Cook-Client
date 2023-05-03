import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import Recipes from "../pages/Home/Recipes/Recipes";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () =>
					fetch(
						"https://ph-7-assignment-11-chef-for-cook-server-touhidcodes.vercel.app/chefs"
					),
			},
			{
				path: "recipes/:id",
				element: <Recipes />,
				loader: ({ params }) =>
					fetch(
						`https://ph-7-assignment-11-chef-for-cook-server-touhidcodes.vercel.app/chefs/${params.id}`
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
