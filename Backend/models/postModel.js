export const postsList = [
  {
    id: Date.now(),
    place: "Santiago del Estero0",
    comments: "Mi Provincia",
    image: "www.sgo.com",
  }
];

const createNewPost = ({ place, comments, image }) => {

  if (!place) return null
  if (!comments) return null
  if (!image) return null

  const newPost = { id: Date.now(), place, comments, image }

postsList.push(newPost)

return newPost
}

const getAllPosts = () => {
  return [...postsList]
}

const getPostById = ({ id }) => {

const post = postsList.find((post) => post.id === id)

return post
}

const updatePostById = (id, newData) => {

  const post = getPostById({ id }) 

  if (!post) return null

  postsList = postsList.map((post) => {
if (post.id === id) {
  
if (newData.place) post.place = newData.place
if (newData.comments) post.comments = newData.comments
if (newData.image) post.image = newData.image

return post
}
return post
  })

  return {
    ...post,
    ...newData,
  }
}

const deletePost = ({ id }) => {
postsList = postsList.filter((post) => post.id !== id)
}

export const postModel = {
  findAll: getAllPosts,
  create: createNewPost,
  findOne: getPostById,
  update: updatePostById,
  destroy: deletePost
}
