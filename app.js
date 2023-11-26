import express from "express"
import { ctrlGetAllPosts, ctrlCreatePost } from "./mis-funciones.js"




const app = express()


//! MIDDLEWARES se ejecutan antes de llegar a las rutas

//para el body
app.use(express.json())

//todo PERSONALIZADO
app.use((req, res, next) => {
if (req.url === '/posts' && req.method === "POST") {
if (!req.body.posts) return res.status(400).send("Failed because posts is required")
if (!req.body.comments) return res.status(400).send("Failed because are not comments ")
if (!req.body.image) return res.status(400).send("Failed because the iamge is required")
}
    next()
 })

//para los formularios html
app.use(express.urlencoded({ extended: false}))


// todo CREACIÓN DE RUTAS DE CONTROLADORES

app.get('/posts', ctrlGetAllPosts)
app.post('/posts', ctrlCreatePost)


// !para que arranque el server
app.listen(3000)
console.log("Server on port 3000");