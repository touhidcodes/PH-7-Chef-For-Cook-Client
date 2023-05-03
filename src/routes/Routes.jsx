import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import RecipesSection from "../pages/RecipesSection/RecipesSection/RecipesSection";
import Login from "../pages/Login/Login";

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
				element: <RecipesSection />,
				loader: ({ params }) =>
					fetch(
						`https://ph-7-assignment-11-chef-for-cook-server-touhidcodes.vercel.app/chefs/${params.id}`
					),
			},
			{
				path: "/blogs",
				element: <Blogs />,
			},
			{
				path: "/login",
				element: <Login />,
			},
		],
	},
]);

export default router;
