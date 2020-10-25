import axios from "axios";

// base URL for making the requests to the movie db
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3"
});

// this will work something like this
// suppose I'll make a request to /movies
// instance.get('/movies');
// the url will become like https://api.themoviedb.org/3/movies
// so basically this will append the endpoints with the base url

export default instance;
