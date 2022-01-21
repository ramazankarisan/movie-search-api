export const requests = {
  fetchTrending: {
    title: "Trending",
    url: "https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>"
  },
  fetchTopRated: {
    title: "Top Rated",
    url: "ttps://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US"
  },
  fetchUpcoming: {
    title: "Upcoming",
    url: "https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US"
  },
  fetchRomance: {
    title: "Romance",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&with_genres=10749"
  },
  fetchAction: {
    title: "Action",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&with_genres=28"
  },
  fetchAnimation: {
    title: "Animation",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&with_genres=16"
  },
  fetchComedy: {
    title: "Comedy",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&with_genres=35"
  },
  fetchDrama: {
    title: "Drama",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&with_genres=18"
  },
  fetchScienceFiction: {
    title: "Science Fiction",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&with_genres=878"
  },
  fetchHorror: {
    title: "Horror",
    url: "https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&with_genres=27"
  },

};