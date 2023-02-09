const { RESTDataSource } = require('apollo-datasource-rest');
const { toCamel } = require('snake-camel');

class MovieAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/movie/';
  }

  async getMoviesForHome(apiKey) {
    let data = await this.get(`popular?api_key=${apiKey}&language=en-US`);
 
    return data.results.map(toCamel);
  }
}

module.exports = MovieAPI;