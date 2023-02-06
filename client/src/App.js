import { useQuery, gql } from '@apollo/client';
import Card from './components/card'

const LATEST_MOVIE = gql`
  query getMovies {
    moviesForHome {
      title
      overview
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
      <Card 
        title={data.moviesForHome.title} 
        overview={data.moviesForHome.overview} 
        posterPath={data.moviesForHome.posterPath}
      />
    </div>
  );
}

export default App;
