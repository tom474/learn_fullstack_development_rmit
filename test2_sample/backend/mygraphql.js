const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
	GraphQLFloat,
	GraphQLBoolean,
} = require("graphql");
const { customers, orders, products } = require("./data");

const getCustomers = (args) => {
	const name = args.name;
	if (name === "*") {
		return customers;
	}
	return customers.filter((customer) => customer.name.includes(name));
};

const getQuantitySold = (productID) => {
	let totalQuantity = 0;
	orders.forEach((order) => {
		if (order.product_id === productID) {
			totalQuantity += order.quantity;
		}
	});
	return totalQuantity;
};

const CustomerType = new GraphQLObjectType({
	name: "Customers",
	fields: {
		id: { type: GraphQLInt },
		name: { type: GraphQLString },
		address: { type: GraphQLString },
	},
});

const ProductType = new GraphQLObjectType({
	name: "Products",
	fields: {
		id: { type: GraphQLInt },
		name: { type: GraphQLString },
		price: { type: GraphQLFloat },
		sell_off: { type: GraphQLBoolean },
		percent: {
			type: GraphQLFloat,
			resolve: (product) => {
				if (product.sell_off) {
					return product.percent;
				}
				return 0;
			},
		},
		quantity_sold: { type: GraphQLInt, resolve: (product) => getQuantitySold(product.id) },
	},
});

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "Query",
		fields: {
			customers: {
				type: new GraphQLList(CustomerType),
				args: { name: { type: GraphQLString } },
				resolve: (parent, args) => getCustomers(args),
			},
			products: {
				type: new GraphQLList(ProductType),
				resolve: () => products,
			},
		},
	}),
});

const app = express();
const port = 8888;

app.all("/graphql", createHandler({ schema }));

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
});
