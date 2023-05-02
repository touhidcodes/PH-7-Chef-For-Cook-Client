import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
	},
]);

export default router;
