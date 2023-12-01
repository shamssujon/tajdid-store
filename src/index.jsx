import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products.jsx";
import DashboardLayout from "./layouts/DashboardLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <DashboardLayout />,
		children: [
			{
				path: "/",
				element: <Products />,
			},
			{
				path: "/products",
				element: <Products />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("app")).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
