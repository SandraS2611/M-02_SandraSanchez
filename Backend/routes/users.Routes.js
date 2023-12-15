import { Router } from "express";
import { errorHandler } from "../middlewares/errorHandler.js";

const usersRouter = Router()

usersRouter.get("/users", errorHandler);

usersRouter.post("/users");

usersRouter.patch("/users");

usersRouter.put("/users");

usersRouter.delete("/users");

export { usersRouter }