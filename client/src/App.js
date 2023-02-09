import { useQuery, gql } from '@apollo/client';
import CardsContainer from './components/cardsContainer';

const LATEST_MOVIE = gql`
  query getMovies {
    moviesForHome {
      title
      overview
      releaseDate
      posterPath
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(LATEST_MOVIE);

  if (loading) {
    return <p>loading</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <div className="App">
      <CardsContainer 
        movies={data.moviesForHome}
      />
    </div>
  );
}

export default App;


// since we are already using useQuery, we just pass in data.moviesForHome