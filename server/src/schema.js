const { gql } = require('apollo-server');

const typeDefs = gql`
  """
  a movie type has title, duration, year, and movie poster path fields
  """
  type Query {
    moviesForHome: [Movie!]!
  }

  type Movie {
    id: ID!
    title: String!
    duration: String
    releaseDate: String
    overview: String
    posterPath: String
  }
`;

module.exports = typeDefs;