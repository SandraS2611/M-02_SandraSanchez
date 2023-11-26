import { Router } from "express"
import { ctrlCreatePost, ctrlGetAllPosts } from "../controllers/post.ctrls.js";
import { errorHandler } from "../validations/error.handler.js";

const postRouter = Router()

postRouter.get("/posts", ctrlCreatePost, errorHandler);
postRouter.post("/posts", errorHandler);
postRouter.patch("/posts", errorHandler);
postRouter.delete("/posts", ctrlGetAllPosts, errorHandler);

export { postRouter }