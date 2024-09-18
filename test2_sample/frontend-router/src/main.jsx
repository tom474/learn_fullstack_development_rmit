import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Pages
import Home from "./Home";
import Customers, { loadCustomers } from "./Customers";
import CustomerIndex from "./CustomerIndex";
import Customer, { loadCustomer } from "./Customer";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/customers",
		element: <Customers />,
		loader: loadCustomers,
		children: [
			{
				index: true,
				element: <CustomerIndex />,
			},
			{
				path: ":customerID",
				element: <Customer />,
				loader: loadCustomer,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
