const API_KEY = "9a1b2f911955ec5cfeba1005d86a3c31";

const requests = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  originals: `/discover/tv/?api_key=${API_KEY}&with_networks=213`,
  top_rated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  action: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;
