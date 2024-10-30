import express from "express"
import { createProductController, getAllProductsController } from "./product.controller.js"

const router = express.Router()

router.route("/create-product").post(createProductController)
router.route("/all-products").get(getAllProductsController)

export default router