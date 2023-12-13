import { Router } from "express";
import {
  ctrlCreatePost,
  ctrlDeletePost,
  ctrlListPosts,
} from "../controllers/postCtrl.js";

const postRouter = Router();

postRouter.get("/", ctrlListPosts);
postRouter.post("/", ctrlCreatePost);

postRouter.delete("/:postId", ctrlDeletePost);

export { postRouter };