import { useState } from "react";
import "./App.css";

export default function App() {
	const URL = "http://localhost:2222/products";

	const [products, setProducts] = useState([]);

	async function handleClick() {
		const res = await fetch(URL, { method: "GET" });
		const json = await res.json();
		setProducts(json);
	}

	const data = products.map((product) => {
		return (
			<>
				<tr key={product.id}>
					<td>{product.id}</td>
					<td>{product.name}</td>
					<td>{product.description}</td>
					<td>{product.price}</td>
					<td>{product.weight}</td>
				</tr>
			</>
		);
	});

	return (
		<>
			<h1>React Frontend</h1>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Description</th>
						<th>Price</th>
						<th>Weight</th>
					</tr>
				</thead>
				<tbody>
					{products.length === 0 && (
						<tr>
							<td colSpan="100%">No product</td>
						</tr>
					)}
					{products.length > 0 && data}
				</tbody>
			</table>
			<div>
				<button onClick={() => handleClick()}>Fetch Data</button>
			</div>
		</>
	);
}
