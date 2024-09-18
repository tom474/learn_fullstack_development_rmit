const express = require("express");
const cors = require("cors");
const { customers, orders, products } = require("./data");

const app = express();
const port = 2222;

app.use(cors());

app.get("/customers", (req, res) => {
	res.status(200).json(customers);
});

app.get("/customers/:id", (req, res) => {
	const customer_id = parseInt(req.params.id);
	const customer = customers.find((customer) => customer.id === customer_id);
	const customer_orders = orders
		.filter((order) => order.customer_id === customer_id)
		.map((order) => {
			return { product_id: order.product_id, quantity: order.quantity };
		});
	customer.orders = customer_orders;
	res.status(200).json(customer);
});

app.get("/customers/:id/total", (req, res) => {
	const customer_id = parseInt(req.params.id);
	const customer_orders = orders.filter((order) => order.customer_id == customer_id);
	let total_price = 0;
	customer_orders.forEach((order) => {
		const product = products.find((product) => product.id === order.product_id);
		let price = 0;
		if (product.sell_off) {
			price = product.price * (1 - product.percent / 100);
		} else {
			price = product.price;
		}
		total_price += price * order.quantity;
	});
	res.status(200).json({ total_price: total_price });
});

app.get("*", (req, res) => {
	res.status(404).json({ msg: "not found" });
});

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
});
