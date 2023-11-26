const posts = [
    {
        posts: "Argentina",
        comments: "Mendoza",
        image: "jhdfhjjdfg.com"
    }
]
    
//!CONTROLADORES DE POSTS

export const ctrlGetAllPosts = (req, res) => {
try {
    if (posts.length < 1) {
        return res.sendStatus(204)
    }
    res.status(200).json(posts)
} catch (error) {
    res.sendStatus(500)
}
}


export const ctrlCreatePost = (req, res) => {
    try {      
posts.push({
    posts: "Argentina",
    comments: "Mendoza",
    image: "jhdfhjjdfg.com"
})     
res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
    }


// app.patch('/posts', (req, res) => {
//     try {
//         if (posts.length < 1) {
//                 res.status(200).send("PATCH")  
//     }
//     res.status(200).json(posts)
// } catch (error) {
//     res.sendStatus(500)
// }
// })

// app.put('/posts', (req, res) => {
//     try {
//         if (posts.length < 1) {
//             res.status(200).send("PUT")                   
//         }
//         res.status(200).json(posts)
//     } catch (error) {
//         res.sendStatus(500)
//     }
// })

// app.delete('/posts', (req, res) => {
//     try {
//         if (posts.length < 1) {
//             res.status(200).send("DELETE")
//            }
//         res.status(200).json(posts)
//     } catch (error) {
//         res.sendStatus(500)
//     }
// })