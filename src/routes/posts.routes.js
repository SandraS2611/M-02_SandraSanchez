import { Router } from "express"
import { ctrlCreatePost, ctrlGetAllPosts } from "../controllers/post.ctrls.js";
import { errorHandler } from "../validations/error.handler.js";

const postRouter = Router()

postRouter.get("/", ctrlGetAllPosts, errorHandler);
postRouter.post("/", ctrlCreatePost, errorHandler);
postRouter.patch("/", errorHandler);
postRouter.delete("/", errorHandler);

export { postRouter }