export const fetchFotos = searchedValue => {
 return fetch(
    `https://pixabay.com/api/?key=45483609-d3ae590ff20ddbd4abc31de80&q=${searchedValue}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
