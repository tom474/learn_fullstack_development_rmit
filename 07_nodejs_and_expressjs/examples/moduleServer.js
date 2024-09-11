const express = require("express");
const { data, hello } = require("./myModule");

const app = express();
const port = 2222;

app.get("/", (req, res) => {
	console.log(data);
	let message = hello("Alice");
	res.send(message);
});

app.all("*", (req, res) => {
	res.send("Other page and methods");
});

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}/`);
});
