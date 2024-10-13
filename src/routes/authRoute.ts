import { Router } from "express";
import { login, logout } from "../controllers/authController";


const authRouter = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       401:
 *         description: Invalid credentials
 */
authRouter.post("/login", login);

/**
 * @swagger
 * /auth/logout:
 *   delete:
 *     summary: User logout
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Successful logout
 *       401:
 *         description: Not authenticated
 */
authRouter.delete("/logout", logout);

export default authRouter;
