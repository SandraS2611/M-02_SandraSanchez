import { Router } from "express";
import { errorHandler } from "../middlewares/errorHandler.js";

const commentsRouter = Router()

commentsRouter.get("/comments", errorHandler);

commentsRouter.post("/comments");

commentsRouter.patch("/comments");

commentsRouter.put("/comments");

commentsRouter.delete("/comments");

export { commentsRouter }