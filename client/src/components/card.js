function Card({ title, overview, posterPath }) {
  return (
    <div className="App">
      <h1>{title}</h1>
      <p>{overview}</p>
      {posterPath ? 
        <img src={`https://image.tmdb.org/t/p/original${posterPath}`} alt="movie-poster"></img>
        : null
      }
    </div>
  )
}

export default Card;