import { postModel } from "../models/postModel.js";

export const cGetAllPosts = async (req, res, next) => {
  try {
    const posts = postModel.findAll();

    res.status(200).json(posts);
  } catch (error) {
    next("Post not finded");
  }
};

export const cCreatePost = (req, res, next) => {
  try {
    const { place, comments, image } = req.body;

    postModel.create({ place, comments, image });

    res.sendStatus(201);
  } catch (error) {
    next();
  }
};

export const cGetPostById = (req, res, next) => {
  try {
    const { postId } = req.params;

    const post = postModel.findOne({ id: postId });

    if (!post) {
      return res.sendStatus(404);
    }

    res.status(200).json(post);
  } catch (error) {
    next();
  }
};

export const cUpdatePost = (req, res, next) => {
  try {
    const { postId } = req.params;

    const { place, comments, image } = req.body;

    const updatedPost = postModel.update(postId, { place, comments, image });

    if (!updatedPost) return res.sendStatus(404);

    res.sendStatus(200);
  } catch (error) {
    next();
  }
};

export const cDeletePost = (req, res, next) => {
  try {
    const { postId } = req.params;

    postModel.destroy({ id: postId });

    res.sendStatus(200);
  } catch (error) {
    next();
  }
};
