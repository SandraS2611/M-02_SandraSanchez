import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import { postsRouter } from "./routes/posts.Routes.js";
import { usersRouter } from "./routes/users.Routes.js";
import { commentsRouter } from "./routes/comments.Routes.js";

import { env } from "../settings/envs.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

app.use(express.json()); //*para el body
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); //!para los formularios

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.use("/posts", postsRouter);
app.use("/users", usersRouter);
app.use("/comments", commentsRouter);

app.listen(env.PORT, () => {
  console.log(`Server on port 3000 ${env.PORT}`);
});
