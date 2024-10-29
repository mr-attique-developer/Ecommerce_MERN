import express from "express"
import { deleteUserController, editAndUpdateUserController, getAllUsersController, loginUserController, logoutController, registerUserController, updateUserController } from "./user.controller.js"
import { verifyToken } from "../middlewares/user.middleware.js"

const router = express.Router()

router.route("/register").post(registerUserController)
router.route("/login").post(loginUserController)
// router.get("/users",verifyToken,async(req,res)=>{
//     res.send("Hello")
// })

router.route("/logout").post(logoutController)

router.route("/users/:id").delete(deleteUserController)

router.route("/users").get(getAllUsersController)
router.route("/updateUser/:id").put(updateUserController)
router.route("/editUserProfile").patch(editAndUpdateUserController)
export default router