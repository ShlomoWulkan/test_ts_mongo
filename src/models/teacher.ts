import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";

export interface ITeacher extends Document {
  _id: Types.ObjectId;
  username: string;
  password: string;
  email: string;
  className: string;
  role: string;
  students: Types.ObjectId[]
};



const TeacherSchema = new Schema<ITeacher>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email: string) => validator.isEmail(email), 
      message: "Invalid email format"
    }
  },
  className: {
     type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: "teacher"
  },
  students: [{
    type: Types.ObjectId,
    ref: "Student",
    default: []
  }]
});

export default mongoose.model<ITeacher>("Teacher", TeacherSchema);


