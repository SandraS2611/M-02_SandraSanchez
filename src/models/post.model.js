export const placesPosts = [
  {
    id: Date.now(),
    place: "Argentina",
    comments: "Mendoza",
    image: "jhdfhjjdfg.com",
  },
];

const postPlace = ({ place, comments, image }) => {
  if (!place) return null;
  const newPostOfPlace = { id: Date.now(), place, comments, image };
  placesPosts.push(newPostOfPlace);
  return newPostOfPlace;
};

const getAllPostsOfPlaces = () => {
  return [...placesPosts];
};

const getOnePlaceById = ({ id }) => {
  const post = placesPosts.find((post) => post.id === id);
  return post;
};

const actualizePostOfPlace = (id, newData) => {
  const post = getOnePlaceById({ id });
  if (!post) return null;

  //postPlace = postPlace.map((post) => { //!LO COMENTE PORQ NO ME DEJA CONTINUAR
  if (post.id === id) {
    return Object.assign(post, newData)
    };
    return post;
  //})
  return {
    ...post,
    ...newData,
  };
 }


const erasePostOfPlace = ({ id }) => {
  const postPlace = postPlace.filter((post) => post.id !== id);
};

export const postModel = {
  findAll: getAllPostsOfPlaces,
  create: postPlace,
  findOne: getOnePlaceById,
  update: actualizePostOfPlace,
  destry: erasePostOfPlace,
};
