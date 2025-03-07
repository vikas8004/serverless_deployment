import { Router } from "express";
import { getAllData, getDataById } from "../controllers/data.controller.js";
const dataRouter = Router();

dataRouter.get("/", getAllData);
dataRouter.get("/:id", getDataById);
export default dataRouter;
