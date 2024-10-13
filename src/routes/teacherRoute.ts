import { Router } from "express";
import { 
    createTeacher
} from "../controllers/teacherController";


const teacherRoute = Router();

/**
 * @swagger
 * /teacher/register:
 *   post:
 *     summary: Register a new teacher
 *     tags: [Teacher]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Teacher'
 *     responses:
 *       201:
 *         description: Teacher registered successfully
 *       400:
 *         description: Bad request
 */
teacherRoute.post("/register", createTeacher);

/**
 * @swagger
 * /teacher/students:
 *   get:
 *     summary: Get all students
 *     tags: [Teacher]
 *     responses:
 *       200:
 *         description: A list of students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       500:
 *         description: Server error
 */
teacherRoute.get("/students", () => {});

/**
 * @swagger
 * /teacher/grades/{studentId}:
 *   post:
 *     summary: Add grades for a student
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               grades:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Grade'
 *     responses:
 *       200:
 *         description: Grades added successfully
 *       404:
 *         description: Student not found
 */
teacherRoute.post("/grades/:studentId", () => {});

/**
 * @swagger
 * /teacher/grades/{studentId}:
 *   put:
 *     summary: Update grades for a student
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               grades:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Grade'
 *     responses:
 *       200:
 *         description: Grades updated successfully
 *       404:
 *         description: Student not found
 */
teacherRoute.put("/grades/:studentId", () => {});

/**
 * @swagger
 * /teacher/average/{studentId}:
 *   get:
 *     summary: Get the average grade for a student
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the student
 *     responses:
 *       200:
 *         description: Student average grade
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 avg:
 *                   type: number
 *                   description: The average grade
 *       404:
 *         description: Student not found
 */
teacherRoute.get("/average/:studentId", () => {});

/**
 * @swagger
 * /teacher/classAverage:
 *   get:
 *     summary: Get the average grade for the class
 *     tags: [Teacher]
 *     responses:
 *       200:
 *         description: Class average grade
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 classAvg:
 *                   type: number
 *                   description: The average grade of the class
 */
teacherRoute.get("/classAverage", () => {});

/**
 * @swagger
 * /teacher/grade/{studentId}:
 *   get:
 *     summary: Get grades for a student
 *     tags: [Teacher]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the student
 *     responses:
 *       200:
 *         description: Student grades
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: Student not found
 */
teacherRoute.get("/grade/:studentId", () => {});

export default teacherRoute;
