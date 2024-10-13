import { Router } from "express";

const teacherRoute = Router();

teacherRoute.post("/register", () => {})

teacherRoute.get("/students", () => {})

teacherRoute.post("/grades/:studentId", () => {})

teacherRoute.put("/grades/:studentId", () => {})

teacherRoute.get("average/:studentId", () => {})

teacherRoute.get("/classAverage", () => {})

teacherRoute.get("/grade/:studentId", () => {})

export default teacherRoute;