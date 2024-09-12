const express = require("express");
const listController = require("../controllers/listController");

const listRouter = express.Router();

listRouter.get("/", listController.list);
listRouter.get("/:listID", listController.get);
listRouter.post("/", express.json(), listController.create);
listRouter.put("/:listID", express.urlencoded({ extended: false }), listController.update);
listRouter.delete("/:listID", listController.delete);

exports.listRouter = listRouter;
