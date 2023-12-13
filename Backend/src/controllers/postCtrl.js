import { PostModel } from "../models/postModel.js"
import { UserModel } from "../models/userModel.js";

export const ctrlListPosts = async (req, res) => {
  try {
    const posts = await PostModel.find({}).populate("user", [
      "username",
      "email",
    ]);

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const ctrlCreatePost = async (req, res) => {
  try {

    const user = await UserModel.findById(req.body.user);

    if (!user) return res.sendStatus(404);

    const newPost = new PostModel(req.body);

    await newPost.save();

    user.posts.push(newPost._id);

    await user.save();

    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const ctrlDeletePost = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await TaskModel.findById(postId);

    if (!post) return res.sendStatus(404);

    const user = await UserModel.findById(post.user);

    await post.deleteOne();

    await user.updateOne({ $pull: { posts: post._id } });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
