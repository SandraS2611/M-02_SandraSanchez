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
  return [...placesPosts]
}

const getOnePlaceById = ({ id }) => {
const post = placesPosts.find((post) => post.id === id)
return post
}

export const postModel = {
  findAll: getAllPostsOfPlaces,
  create: postPlace,
  findOne: getOnePlaceById
} 