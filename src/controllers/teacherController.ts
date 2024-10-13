import { Request, Response } from "express";
import Teacher  from "../models/teacher";
import validator from "validator";
import bcrypt from "bcrypt"; 


export const createTeacher = async (
    req: Request, 
    res: Response
): Promise<void> => {
    const { username, password, email, className } = req.body;

    if (!username || !password || !email || !className) {
        res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
        res.status(400).json({ message: "Invalid email format" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const teacher = new Teacher({
        username,
        password: hashedPassword,
        email,
        className
    });
    try {
        const savedTeacher = await teacher.save();
        res.status(201).json(savedTeacher);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
};
