import { Router } from "express"
import { errorHandler } from "../validations/error.handler.js";

const commentsRouter = Router()

commentsRouter.get("/comments", errorHandler);
commentsRouter.post("/comments", errorHandler);
commentsRouter.patch("/comments", errorHandler);
commentsRouter.delete("/comments", errorHandler);


export { commentsRouter }