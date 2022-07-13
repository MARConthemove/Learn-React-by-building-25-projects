import React from 'react'
import { useParams, Link } from 'react-router-dom'

import useFetch from './useFetch'

const SingleMovie = () => {
  const { id } = useParams()

  const { isLoading, error, data: movie } = useFetch(`&i=${id}`)
  console.log(movie)
  if (isLoading) {
    return <div className='loading'></div>
  }

  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    )
  }

  const {
    Poster: poster,
    Title: title,
    Plot: plot,
    Year: year,
    Writer: writer,
    Actors: actors,
    imdbRating,
    imdbVotes,
    Director,
    Genre,
  } = movie

  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>
          <span>Year:</span>
          {year}
        </h4>
        <h6>
          <span>Writer:</span>
          {writer}
        </h6>
        <h6>
          <span>Director:</span>
          {Director}
        </h6>
        <h6>
          <span>Actors:</span>
          {actors}
        </h6>
        <h6>
          <span>Genre:</span>
          {Genre}
        </h6>
        <h6>
          <span className='imdb-vote'>IMDB rating:</span>
          {imdbRating}
        </h6>
        <h6>
          <span className='imdb-vote'>IMDB votes:</span>
          {imdbVotes}
        </h6>

        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
