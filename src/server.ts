import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import teacherRoute from "./routes/teacherRoute";
import studentRoute from "./routes/studentRoute";
import authRoute from "./routes/authRoute";
import { swaggerDocs, swaggerUi } from "./swagger";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;

connectDB();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('teacher', teacherRoute);
app.use('student', studentRoute);
app.use('auth', authRoute);

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
 
export default app;
