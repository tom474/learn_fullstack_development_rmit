const { users } = require("../data");
const bcrypt = require("bcrypt");

exports.authenticate = async (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;

	let user_id = -1;
	for (const user of users) {
		if (user.username == username) {
			const match = await bcrypt.compare(password, user.password);
			if (match) {
				user_id = user.id;
				break;
			}
		}
	}

	if (user_id == -1) {
		res.json({ message: "Login failed" });
		return;
	}
	res.cookie("user_id", user_id, { signed: true }).json({ message: "Login successfully" });
};

// Welcome
exports.home = async (req, res, next) => {
	const user_id = req.signedCookies.user_id;
	let username = "";
	for (const user of users) {
		if (user.id == user_id) {
			username = user.username;
			break;
		}
	}
	res.json({ message: `Welcome ${username}` });
};
