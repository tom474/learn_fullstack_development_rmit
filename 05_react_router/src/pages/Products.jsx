import React from "react";
import Header from "../components/Header";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getProducts } from "../api/products";

export async function loadProducts() {
	const products = await getProducts();
	return products;
}

export default function Products() {
	const products = useLoaderData();
	const data = products.map((product) => (
		<li key={product.id}>
			<Link to={`${product.id}`}>{product.name}</Link>
		</li>
	));

	return (
		<>
			<Header />
			<h1>Products</h1>
			<ul>{data}</ul>
			<hr />
			<Outlet />
		</>
	);
}
