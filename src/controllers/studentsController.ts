import e, { Request, Response } from "express";
import Student from "../models/student";
import teacher from "../models/teacher";
import validator from "validator";
import bcrypt from "bcrypt";
import { Types } from "mongoose";

export const createStudent = async (
    req: Request, 
    res: Response
): Promise<void> => {

    const { username, password, email, className } = req.body;

    if (!username || !password || !email || !className) {
        res.status(400).json({ message: "All fields are required" });
        return;
    }
    if (!validator.isEmail(email)) {
        res.status(400).json({ message: "Invalid email format" });
        return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const student = new Student({
        username,
        password: hashedPassword,
        email,
        className
    });

     try {
        const findTheTeacher = await teacher.findOne({ className });

        if (!findTheTeacher) {
            res.status(404).json({ message: "Class not found" });
            return;
        }
        const savedStudent = await student.save();

        findTheTeacher.students.push(savedStudent._id as Types.ObjectId);
        await findTheTeacher.save();

        res.status(201).json(savedStudent);
        return;

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error });
    }
};