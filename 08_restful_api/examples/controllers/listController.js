const { lists, tasks } = require("../data");

// Read all lists for a user
exports.list = async (req, res, next) => {
	const user_id = req.signedCookies.user_id;
	const data = lists
		.filter((list) => {
			return list.user_id == user_id;
		})
		.map((list) => {
			return { id: list.id, name: list.name };
		});
	res.json(data);
};

// Read a list detail
exports.get = async (req, res, next) => {
	const listID = req.params.listID;
	// Get list
	const data = lists.filter((list) => {
		return list.id == listID;
	})[0];
	// Get all tasks in list
	data.tasks = tasks.filter((task) => {
		return task.list_id == listID;
	});
	res.json(data);
};

// Create a new list for a user
exports.create = async (req, res, next) => {
	const user_id = req.signedCookies.user_id;
	const listName = req.body.name;

	// Generate a new id
	const ids = lists.map((list) => {
		return list.id;
	});
	const max_id = Math.max(...ids);
	const new_id = max_id + 1;
	lists.push({ id: new_id, name: listName, user_id: user_id });
	res.json({ id: new_id });
};

// Update a list
exports.update = async (req, res, next) => {
	const listID = req.params.listID;
	const newName = req.body.name;

	for (let index = 0; index < lists.length; index++) {
		if (lists[index].id == listID) {
			lists[index].name = newName;
			break;
		}
	}
	res.json({ id: listID });
};

// Delete a list
exports.delete = async (req, res, next) => {
	const listID = req.params.listID;
	// Delete all related tasks
	const taskTemp = tasks.filter((task) => {
		return task.list_id != listID;
	});
	// Clear all tasks
	tasks.length = 0;
	// Copy from temp to tasks
	taskTemp.forEach((task) => tasks.push(task));

	// Delete the list
	for (let index = 0; index < lists.length; index++) {
		if (lists[index].id == listID) {
			lists.splice(index, 1);
			break;
		}
	}
	res.json({ message: `List ${listID} deleted` });
};
