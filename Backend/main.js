import express from "express";
import http from "http";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "./Authentication/auth.routes.js";
import { connectDB } from "./models/Usermodel.js";
import cors from "cors";
import setupSocket from "./socketio.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = setupSocket(server);

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(router);

connectDB();

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
