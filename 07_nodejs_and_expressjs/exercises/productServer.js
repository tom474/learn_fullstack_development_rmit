const express = require("express");
const cors = require("cors");
const { products } = require("./products.js");

const app = express();
const port = 2222;

app.use(cors());
app.use(express.static("dist"));

app.get("/products", (req, res) => {
	setTimeout(() => res.json(products), 3000);
});

app.all("*", (req, res) => {
	res.status(404).send("Not found");
});

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}/`);
});
