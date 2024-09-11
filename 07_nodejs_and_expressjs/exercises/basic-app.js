const express = require("express");

const app = express();
const port = 2222;

app.get("/", (req, res) => {
	res.send("get data");
});

app.post("/", (req, res) => {
	res.send("create data");
});

app.put("/", (req, res) => {
	res.send("update data");
});

app.delete("/", (req, res) => {
	res.send("delete data");
});

app.all("*", (req, res) => {
	res.send("not found");
});

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}/`);
});
