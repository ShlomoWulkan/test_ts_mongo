import mongoose, { Schema, Document, Types } from "mongoose";
import validator from 'validator';


export interface IStudent extends Document {
    username: string;
    password: string;
    email: string;
    grades: [{
    examName: {
        type: String,
    },
    score: {
        type: Number,
    }
    }],
    className: string;
    avg: number;
    role: string;
}

const StudentSchema = new Schema<IStudent>({
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
  grades: [{
    examName: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true
    }
  }],
  className: {
    type: String,
    ref: "Class",
    required: true
  },
  avg: {
    type: Number,
    default: 0
  },
  role: {
    type: String,
    default: "student"
  }
});

export default mongoose.model<IStudent>("Student", StudentSchema);