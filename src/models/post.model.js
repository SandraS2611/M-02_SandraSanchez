export const placesPosts = [
  {
    id: Date.now(),
    place: "Argentina",
    comments: "Mendoza",
    image: "jhdfhjjdfg.com",
  },
];

export const postPlace = ({ place, comments, image }) => {
  if (!place) return null;
  const newPostOfPlace = { id: Date.now(), place, comments, image };
  placesPosts.push(newPostOfPlace);
  return newPostOfPlace;
};


export const getAllPostsOfPlaces = () => {
  return [...placesPosts]
}
