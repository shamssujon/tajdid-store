import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products.jsx";
import DashboardLayout from "./layouts/DashboardLayout";
import { QueryClient, QueryClientProvider } from "react-query";
import CreateProduct from "./pages/CreateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const queryClient = new QueryClient();

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
			{
				path: "/products/create-product",
				element: <CreateProduct />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("app")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router}></RouterProvider>
			<ToastContainer />
		</QueryClientProvider>
	</React.StrictMode>,
);
