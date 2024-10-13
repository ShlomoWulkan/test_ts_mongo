import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

interface JwtPayload {
  username: string;
  role: string;
  id: string;
}

interface myRequestForPyload extends Request {
  user?: JwtPayload; 
}


const onlyTeachers = async (req: myRequestForPyload, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    const teacherData = jwt.verify(token, process.env.TOKEN_SECRET as string) as JwtPayload;

    if (teacherData.role !== "teacher") {
      return res.status(403).send("You do not have permission to access this resource.");
    }

    req.user = teacherData;
    next();
  } catch (err: any) {
    console.log(err);
    res.status(401).send(err.message);
  }
};

const onlyStudents = async (req: myRequestForPyload, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    const userData = jwt.verify(token, process.env.TOKEN_SECRET as string) as JwtPayload;

    req.user = userData;
    next();
  } catch (err: any) {
    console.log(err);
    res.status(401).send(err.message);
  }
};

export { onlyTeachers, onlyStudents };
