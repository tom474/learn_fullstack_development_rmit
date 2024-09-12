const express = require("express");
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/", userController.home);
userRouter.post("/login", express.json(), express.urlencoded({ extended: false }), userController.authenticate);

exports.userRouter = userRouter;
