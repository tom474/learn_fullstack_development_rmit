import { Link, Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";

export async function loadCustomers() {
	const customers = await fetch("http://localhost:2222/customers");
	return customers;
}

export default function Customers() {
	const customers = useLoaderData();
	const customerList = customers.map((customer) => (
		<li key={customer.id}>
			<Link to={`${customer.id}`}>{customer.name}</Link>
		</li>
	));
	return (
		<>
			<Header />
			<h2>Customers</h2>
			<ul>{customerList}</ul>
			<hr />
			<div>
				<Outlet />
			</div>
		</>
	);
}
