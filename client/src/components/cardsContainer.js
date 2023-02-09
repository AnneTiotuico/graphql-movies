import Card from './card'

export default function CardsContainer({ movies, onViewModal, onSelected }) {
  return (
    movies.map(movie => {
      let { id, title, overview, releaseDate, posterPath } = movie
      return (
        <Card 
          key={id}
          id={id}
          title={title} 
          overview={overview} 
          releaseDate={releaseDate}
          posterPath={posterPath}
          onViewModal={onViewModal}
          onSelected={onSelected}
        />
      )
    })
  )
}