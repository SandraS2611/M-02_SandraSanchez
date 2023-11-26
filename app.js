import express from "express"
import { ctrlGetAllPosts, ctrlCreatePost } from "./src/controllers/post.ctrl.js"
import { errorHandler } from "./src/validations/error.handler.js"



const app = express()


//! MIDDLEWARES se ejecutan antes de llegar a las rutas

//para el body
app.use(express.json())
app.use(express.static("public"))

//todo PERSONALIZADO
app.use((req, res, next) => {
if (req.url === '/posts' && req.method === "POST") {
if (!req.body.place) return res.status(400).send("Failed because place is required")
if (!req.body.comments) return res.status(400).send("Failed because are not comments ")
if (!req.body.image) return res.status(400).send("Failed because the iamge is required")
}
    next()
 })

//para los formularios html
app.use(express.urlencoded({ extended: false}))


//todo ruta normal dirige a la pagina principal
app.get('/', (req, res) => {
    res.sendFile('index.html')
})


// todo CREACIÓN DE RUTAS DE CONTROLADORES

app.get('/posts', ctrlGetAllPosts, errorHandler)
app.post('/posts', ctrlCreatePost, errorHandler)


// !para que arranque el server
app.listen(4000)
console.log("Server on port 3000");