import Card from './card'

export default function CardsContainer({ movies }) {
  return (
    movies.map(movie => {
      let { title, overview, releaseDate, posterPath } = movie
      return (
        <Card 
          key={title}
          title={title} 
          overview={overview} 
          releaseDate={releaseDate}
          posterPath={posterPath}
        />
      )
    })
  )
}