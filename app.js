import express from "express";

const app = express();

//TODO PARA QUE FUNCIONE EL BODY
app.use(express.json());
app.use(express.static("public"));

//PARA QUE FUNCIONEN LOS FORMULARIOS DE HTML
app.use(express.urlencoded({ extended: false }));

//! SERVIR UNA IMAGEN DESDE LA PAGINA
app.use(express.static("uploads")) 

// TODO ruta para subir archivos
app.post("/upload", async (req, res) => {
    const { image } = req.files;
    
    fs.mkdir(path.join(__dirname, "uploads"), { recursive: true });
    
    await image.mv(path.join(__dirname, "uploads", image.name));
    
    fs.rmdir(path.join(__dirname, "temp"), { recursive: true });
    
    res.send("upload");
  });

  //!RENDERIZA
app.get("/", (req, res) => {
    res.sendFlie("index.html");
  });

