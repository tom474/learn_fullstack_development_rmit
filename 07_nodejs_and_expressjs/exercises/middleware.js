const express = require("express");
const cors = require("cors");

const app = express();
const port = 2222;

function logUserAgent(req, res, next) {
	console.log(req.headers["user-agent"]);
	next();
}

function stopCycle(req, res, next) {
	res.send("Stop!");
}

app.use(cors());
app.use(logUserAgent);
app.use("/secret", stopCycle);

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

app.get("/secret", (req, res) => {
	res.send("Protected page");
});

app.all("*", (req, res) => {
	res.send("not found");
});

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}/`);
});
