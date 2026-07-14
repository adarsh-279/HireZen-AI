import express from "express";
import authController from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const authRouter = express.Router()

/**
 * @route POST /api/auth/register
 * @description api to register a new user if it doesnot exists in the database
 * @access Public
 */

authRouter.post("/register", authController.registerUserController)

/**
 * @route POST /api/auth/login
 * @description api to login a user
 * @access Public
 */

authRouter.post("/login", authController.loginUserController)

/**
 * @route POST /api/auth/logout
 * @description api to logout a user
 * @access Public
 */

authRouter.post("/logout", authController.logoutUserController)

/**
 * @route GET /api/auth/get-me
 * @description api to get the current logged in user details
 * @access Private
 */

authRouter.get("/get-me", authMiddleware.authUser, authController.getMeController)

export default authRouter