import { Router } from "express";

const studentRoute = Router();


/**
 * @swagger
 * /student/register:
 *   post:
 *     summary: Register a new student
 *     tags: [Student]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       201:
 *         description: Student registered successfully
 *       400:
 *         description: Bad request
 */
studentRoute.post("/register", () => {});

/**
 * @swagger
 * /student/grade:
 *   get:
 *     summary: Get student's grades
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: Student's grades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Grade'
 *       404:
 *         description: Student not found
 */
studentRoute.get("/grade", () => {});

export default studentRoute;
