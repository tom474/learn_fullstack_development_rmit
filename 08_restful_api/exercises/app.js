const express = require("express");
const cookieParser = require("cookie-parser");
const { userRouter } = require("./routes/userRoute");
const { productRouter } = require("./routes/productRoute");

const app = express();
const port = 2222;
const SECRET = "rmit-cosc2769";

app.use(cookieParser(SECRET));

app.use(
	"/users",
	(req, res, next) => {
		if (req.method === "POST" && req.url === "/login") {
			next();
			return;
		}

		// Access control
		if (!req.signedCookies.user_id) {
			res.json({ message: "You must login first to access this area" });
			return;
		}
		next();
	},
	userRouter
);
app.use("/products", productRouter);

app.get("/", (req, res) => {
	res.json({ message: "Welcome to the Home page" });
});

app.all("*", (req, res) => {
	res.status(404).json({ message: "Page not found" });
});

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}/`);
});
