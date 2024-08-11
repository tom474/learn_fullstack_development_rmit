// Core
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Product from "./pages/Product";
import ProductIndex from "./pages/ProductIndex";

// React router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// React redux
import { Provider } from "react-redux";
import { store } from "./app/store";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <NotFound />,
	},
	{
		path: "/products",
		element: <Products />,
		children: [
			{
				index: true,
				element: <ProductIndex />,
			},
			{
				path: ":productID",
				element: <Product />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
