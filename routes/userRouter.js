import express from "express";
import { login, register, logout, getUser } from "../controllers/userController.js";
import { isAuthorized } from "../middlewares/auth.js";
// import {login,register,logout } from "../controllers/userController.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthorized, logout);
// router.get("/logout",logout);
router.get("/getuser", isAuthorized, getUser);

export default router;