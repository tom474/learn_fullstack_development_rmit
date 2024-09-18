import { Link, Outlet, useLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import { getFavoriteCustomers } from "./customersSlice";

export async function loadCustomers() {
	const customers = await fetch("http://localhost:2222/customers");
	return customers;
}

export default function Customers() {
	const customers = useLoaderData();
	const favCustomers = useSelector((state) => getFavoriteCustomers(state));
	const customerList = customers.map((customer) => (
		<li key={customer.id}>
			<Link to={`${customer.id}`}>
				{favCustomers.find((fav_customer) => fav_customer === customer.id) != undefined && (
					<strong>{customer.name}</strong>
				)}
				{favCustomers.find((fav_customer) => fav_customer === customer.id) == undefined && customer.name}
			</Link>
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
