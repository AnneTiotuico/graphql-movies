import { useQuery, gql } from '@apollo/client';
import CardsContainer from './components/cardsContainer';
import { useState } from 'react';
import Modal from './components/modal';

const LATEST_MOVIE = gql`
  query getMovies {
    moviesForHome {
      id
      title
      overview
      releaseDate
      posterPath
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(LATEST_MOVIE);
  const [ viewModal, setViewModal ] = useState(false);
  const [ selectedCard, setSelectedCard ] = useState({});

  if (loading) {
    return <p>loading</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  const handleViewModal = () => {
    setViewModal(!viewModal)
  }

  const handleSelected = (card) => {
    setSelectedCard(card);
  }

  return (
    <>
    {viewModal ? <Modal onViewModal={handleViewModal} selectedCard={selectedCard} /> : null}
      <div className="App">
        <CardsContainer 
          movies={data.moviesForHome}
          onViewModal={handleViewModal}
          onSelected={handleSelected}
        />
      </div>
    </>
  );
}

export default App;


// since we are already using useQuery, we just pass in data.moviesForHome