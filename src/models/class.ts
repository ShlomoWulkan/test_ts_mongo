import mongoose, { Schema, Document, Types } from "mongoose";


const ClassSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: Types.ObjectId,
        ref: "Teacher"
    },
    students: [{
        type: Types.ObjectId,
        ref: "Student",
        default: []
    }]
});

export default mongoose.model("Class", ClassSchema);