const express = require("express");
const productController = require("../controllers/productController");

const productRouter = express.Router();

productRouter.get("/", productController.list);
productRouter.get("/:productID", productController.get);
productRouter.post("/", express.json(), express.urlencoded({ extended: false }), productController.create);

exports.productRouter = productRouter;
