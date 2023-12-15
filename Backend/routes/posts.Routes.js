import { Router } from "express";
import {
  cCreatePost,
  cDeletePost,
  cGetAllPosts,
  cGetPostById,
  cUpdatePost,
} from "../controllers/postsCtrl.js";
import { errorHandler } from "../middlewares/errorHandler.js";
import { updatePostValidations } from "../validations/updatePostValidations.js";
import { verificateValidations } from "../validations/verificateValidations.js";
import { createPostValidations } from "../validations/createPostValidations.js";
import { findPostValidations } from "../validations/findPostValidations.js";


const postsRouter = Router();

postsRouter.get("/", cGetAllPosts, errorHandler);
postsRouter.get(
  "/:postId",
  findPostValidations,
  verificateValidations,
  cGetPostById
);

postsRouter.post(
  "/",
  createPostValidations,
  verificateValidations,
  cCreatePost
);

postsRouter.patch("/:postId", updatePostValidations, verificateValidations, cUpdatePost);


postsRouter.delete("/:postId", findPostValidations, verificateValidations, cDeletePost);

export { postsRouter };
