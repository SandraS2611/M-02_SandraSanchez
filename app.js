import express from "express";

import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";


const app = express();

//! MIDDLEWARES se ejecutan antes de llegar a las rutas
//todo COMUNES
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

//* para el body
app.use(express.json());
app.use(express.static("public"));

//* para los formularios html
app.use(express.urlencoded({ extended: false }));

//todo PERSONALIZADO
app.use((req, res, next) => {
  if (req.url === "/posts" && req.method === "POST") {
    if (!req.body.place)
      return res.status(400).send("Failed because place is required");
    if (!req.body.comments)
      return res.status(400).send("Failed because are not comments ");
    if (!req.body.image)
      return res.status(400).send("Failed because the iamge is required");
  }
  next();
});

//todo ruta normal dirige a la pagina principal
app.get("/", (req, res) => {
  res.sendFile("index.html");
});




// !para que arranque el server
app.listen(4000);
console.log("Server on port 3000");
