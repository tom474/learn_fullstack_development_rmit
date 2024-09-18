import { useLoaderData } from "react-router-dom";

export async function loadCustomer({ params }) {
	const customer = await fetch(`http://localhost:2222/customers/${params.customerID}`);
	return customer;
}

export default function Customer() {
	const customer = useLoaderData();

	const customer_orders = customer.orders.map((order) => (
		<li key={order.product_id}>
			Product ID: {order.product_id}, Quantity: {order.quantity}
		</li>
	));

	return (
		<>
			<h2>Customer details</h2>
			<ul>
				<li>ID: {customer.id}</li>
				<li>Name: {customer.name}</li>
				<li>Address: {customer.address}</li>
				{customer.orders.length > 0 && (
					<li>
						Orders:
						<ul>{customer_orders}</ul>
					</li>
				)}
			</ul>
		</>
	);
}
