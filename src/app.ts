import express from "express";
import cors from "cors";
import { createServer } from "http";
import { authRouter } from "./modules/auth/routes/auth.route";

const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use("/auth", authRouter);

const httpServer = createServer(app);

export { httpServer };
