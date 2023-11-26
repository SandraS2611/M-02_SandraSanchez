export const validationPost = (req, res, next) => {
    if (req.url === "/posts" && req.method === "POST") {
      if (!req.body.place)
        return res.status(400).send("Failed because place is required");
      if (!req.body.comments)
        return res.status(400).send("Failed because are not comments ");
      if (!req.body.image)
        return res.status(400).send("Failed because the iamge is required");
    }
    next();
  };
