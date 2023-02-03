const { RESTDataSource } = require('apollo-datasource-rest');

class MovieAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/movie/';
  }

  async getMoviesForHome(apiKey) {
    return this.get(`latest?api_key=${apiKey}&language=en-US`);
  }
}

module.exports = MovieAPI;
