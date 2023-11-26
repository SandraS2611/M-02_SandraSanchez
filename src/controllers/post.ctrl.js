const posts = [
    {
        posts: "Argentina",
        comments: "Mendoza",
        image: "jhdfhjjdfg.com"
    }
]
    
//!CONTROLADORES DE POSTS

export const ctrlGetAllPosts = (req, res, next) => {
try {
    if (posts.length < 1) {
        return res.sendStatus(204)
    }
    res.status(200).json(posts)
} catch (error) {
 next("No hay post") //todo para que vaya al manejador de errores antes
}
}


export const ctrlCreatePost = (req, res, next) => {
//     try {      
// posts.push({
//     posts: "Argentina",
//     comments: "Mendoza",
//     image: "jhdfhjjdfg.com"
// })     
// res.sendStatus(201)
//     } catch (error) {
//         next()
//     }
    }


// app.patch('/posts', (req, res) => {
//     try {
//         if (posts.length < 1) {
//                 res.status(200).send("PATCH")  
//     }
//     res.status(200).json(posts)
// } catch (error) {
//     next()
// }
// })


// app.put('/posts', (req, res) => {
//     try {
//         if (posts.length < 1) {
//             res.status(200).send("PUT")                   
//         }
//         res.status(200).json(posts)
//     } catch (error) {
//        next()
//     }
// })


// app.delete('/posts', (req, res) => {
//     try {
//         if (posts.length < 1) {
//             res.status(200).send("DELETE")
//            }
//         res.status(200).json(posts)
//     } catch (error) {
//        next()
//     }
// })