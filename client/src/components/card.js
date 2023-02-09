function Card({ title, overview, releaseDate, posterPath }) {

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{overview}</p>
      <p>{releaseDate}</p>
      {posterPath ? 
        <img src={`https://image.tmdb.org/t/p/original${posterPath}`} alt="movie-poster"></img>
        : <img src={`https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg`} alt="movie-poster"></img>
      }
    </div>
  )
}

export default Card;