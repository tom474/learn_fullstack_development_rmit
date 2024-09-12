const { user, users } = require("../data");

// Authenticate a user
exports.authenticate = async (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;

	let user_id = -1;
	for (const user of users) {
		if ((user.username = username && user.password == password)) {
			user_id = user.id;
			break;
		}
	}

	if (user_id == -1) {
		res.json({ message: "Login failed" });
		return;
	}
	res.cookie("user_id", user_id, { signed: true }).json({ message: "Login successfully" });
};
