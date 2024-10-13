import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
 
export default app;
