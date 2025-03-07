import express from "express";
import dataRouter from "./routes/data.routes.js";

const app = express();
app.use(express.json());
app.use("/api/v1/data", dataRouter);
export default app;
