import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
// pages
import { connectDB } from "./src/config/dbConfig.js";
import { router as authRoute } from "./src/routes/authRoute.js";
import { router as userRoute } from "./src/routes/userRoute.js";
import { router as postRoute } from "./src/routes/postRoute.js";
// db config
connectDB();
const app = express();
const port = 3000;
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
