import { postModel} from "../models/post.model.js"

//!CONTROLADORES DE POST

export const ctrlGetAllPosts = (req, res) => {
  try {
  const placesPosts = postModel.findAll()
  res.json(placesPosts)
  } catch (error) {
    next("No hay post"); //todo para que vaya al manejador de errores antes
  }
};

export const ctrlCreatePost = (req, rest) => {
  try {
    const { place, comments, image } = req.body;  
    postModel.create({ place, comments, image });
    res.sendStatus(201);
  } catch (error) {
    next("No hay post"); 
  }
};

 export const ctrlOnePlaceById = (req, res) => {
const { postId } = req.params 
const post = postModel.findOne({ id: postId })
if (!post) {
  return res.sendStatus(404)
}
res.send(200).json(post)
 }
//     try {
//         if (posts.length < 1) {
//                 res.status(200).send("PATCH")
//     }
//     res.status(200).json(posts)
//  catch (error) {
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
