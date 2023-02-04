
import { useQuery, gql } from '@apollo/client';

const LATEST_MOVIE = gql`
  query getMovies {
    moviesForHome {
      title
    }
  }
`;

// const Movies = () => {
//   const { loading, error, data } = useQuery(LATEST_MOVIE);

//   return (data)
// }

function App() {
  const { loading, error, data } = useQuery(LATEST_MOVIE);

  

  if (loading) {
    return <p>loading</p>
  }

  console.log(data.moviesForHome.title)

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <div className="App">
      {data.moviesForHome.title}
    </div>
  );
}

export default App;
