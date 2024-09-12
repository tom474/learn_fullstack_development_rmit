const express = require("express");

const taskRouter = express.Router();

taskRouter.get("/", (req, res) => {
	res.json({ message: "Read all tasks of the logged-in user" });
});

taskRouter.get("/taskID", (req, res) => {
	res.json({ message: "Read a task for the logged-in user" });
});

taskRouter.post("/", (req, res) => {
	res.json({ message: "Create a new task for the logged-in user" });
});

taskRouter.put("/:taskID", (req, res) => {
	res.json({ message: `Update the task ${req.params.taskID} for the logged-in user` });
});

taskRouter.delete("/:taskID", (req, res) => {
	res.json({ message: `Delete the task ${req.params.taskID} of the logged-in user` });
});

exports.taskRouter = taskRouter;
