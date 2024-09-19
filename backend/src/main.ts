import express from "express";
import cookieParser from "cookie-parser";
import { authRouter } from "./routes/auth";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(authRouter);

app.listen(8000, () => console.log("Listening on port 8000"));
