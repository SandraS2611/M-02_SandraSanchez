import express from "express";
import morgan from "morgan";
import cors from "cors";


const app = express();


//!MIDDLEWARE

//comunes
app.use(morgan("dev"));
app.use(cors());

//TODO PARA QUE FUNCIONE EL BODY
app.use(express.json());
app.use(express.static("public"));

//PARA QUE FUNCIONEN LOS FORMULARIOS DE HTML
app.use(express.urlencoded({ extended: false }));


  //!RENDERIZA
app.get("/", (req, res) => {
    res.sendFlie("index.html");
  });


  app.listen(3000)
console.log("Server on port 3000");