import { Router } from "express"
import { errorHandler } from "../validations/error.handler.js";

const usersRouter = Router()

usersRouter.get("/", errorHandler);
usersRouter.post("/", errorHandler);
usersRouter.patch("/", errorHandler);
usersRouter.delete("/", errorHandler);

export { usersRouter }