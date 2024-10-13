import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";

export interface ITeacher extends Document {
  _id: Types.ObjectId;
  username: string;
  password: string;
  email: string;
  class: Types.ObjectId;
  role: string;
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
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class"
  },
  role: {
    type: String,
    default: "teacher"
  }
});

export default mongoose.model<ITeacher>("Teacher", TeacherSchema);
