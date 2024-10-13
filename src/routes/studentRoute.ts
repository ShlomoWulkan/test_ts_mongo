import { Router } from "express";
import { createStudent } from "../controllers/studentsController";
import { onlyStudents } from "../middlewares/authMiddlewares";

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
studentRoute.post("/register", createStudent);

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
studentRoute.get("/grade", onlyStudents, () => {});

export default studentRoute;
