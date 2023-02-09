// import { useState } from 'react'

function Card({ id, title, overview, releaseDate, posterPath, onViewModal, onSelected }) {
  // when card clicked, modal opens for that card
  // const [ clicked, setClicked ] = useState(false)

  const handleClick = () => {
    onSelected({id, title, overview, releaseDate, posterPath})
    onViewModal();
  }

  // modal style
  return (
    <div className="card" onClick={handleClick}>
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