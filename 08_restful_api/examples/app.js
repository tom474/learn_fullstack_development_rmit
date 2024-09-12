const express = require("express");
const cookieParser = require("cookie-parser");
const { listRouter } = require("./routes/listRoute");
const { userRouter } = require("./routes/userRoute");

const app = express();
const port = 2222;
const SECRET = "hello-rmit";

app.use(cookieParser(SECRET));

app.use("/users", userRouter);
app.use(
	"/lists",
	(req, res, next) => {
		if (!req.signedCookies.user_id) {
			req.json({ message: "You must login first to access this area" });
			return;
		}
		next();
	},
	listRouter
);

app.get("/", (req, res) => {
	res.json({ message: "Welcome to the Home page" });
});

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}/`);
});
