import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
