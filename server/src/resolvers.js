require('dotenv').config();

const resolvers = {
  Query: {
    moviesForHome: (_, __, { dataSources }) => {
      return dataSources.movieAPI.getMoviesForHome(process.env.API_KEY);
    }
  }
}

module.exports = resolvers;