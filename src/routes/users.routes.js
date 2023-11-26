import { Router } from "express"
import { errorHandler } from "../validations/error.handler.js";

const usersRouter = Router()

usersRouter.get("/users", errorHandler);
usersRouter.post("/users", errorHandler);
usersRouter.patch("/users", errorHandler);
usersRouter.delete("/users", errorHandler);

export { usersRouter }