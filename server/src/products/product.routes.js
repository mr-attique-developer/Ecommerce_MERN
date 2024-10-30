import express from "express"
import { createProductController, deleteProductController, getAllProductsController, getSingleProductController, relatedProductController, updateProductController } from "./product.controller.js"
import { verifyToken } from "../middlewares/user.middleware.js"
import { verifyAdmin } from "../middlewares/admin.middleware.js"

const router = express.Router()

router.route("/create-product").post(createProductController)
router.route("/all-products").get(getAllProductsController)
router.route("/:id").get(getSingleProductController)
router.route("/update-product/:id").patch(verifyToken,verifyAdmin,(updateProductController))
router.route("/delete-product/:id").delete((deleteProductController))
router.route("/related-product/:id").get((relatedProductController))

export default router