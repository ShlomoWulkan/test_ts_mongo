import TeacherModel from '../models/teacher';
import StudentModel from '../models/student';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = async (userName: string, password: string): Promise<string> => {
  try {
    const dbUser = await TeacherModel.findOne({ username: userName }) || 
                   await StudentModel.findOne({ username: userName });

    if (!dbUser) {
      throw new Error("User not found");
    }

    const isPasswordCorrect = await bcrypt.compare(password, dbUser.password);
    if (!isPasswordCorrect) {
      throw new Error("Wrong password");
    }

    const token = jwt.sign(
      {
        user_name: dbUser.username,
        role: dbUser.role,
        id: dbUser._id,
      },
      process.env.TOKEN_SECRET as string,
      { expiresIn: "5m" } 
    );

    return token;
  } catch (err) {
    console.error(err);
    throw new Error("Authentication failed");
  }
};

export default { login };
