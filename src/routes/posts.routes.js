import { Router } from "express";
import { ctrlCreatePost, ctrlGetAllPosts } from "../controllers/post.ctrls.js";
import { newPostValidation } from "../validations/new.post.validation.js";
import { errorHandler } from "../validations/error.handler.js";
import { applicateValidations } from "../middlewares/applicate.validations.js";

const postRouter = Router();

postRouter.get("/",errorHandler, ctrlGetAllPosts);
postRouter.post("/", newPostValidation, applicateValidations, ctrlCreatePost);
postRouter.patch("/");
postRouter.delete("/");

export { postRouter };
