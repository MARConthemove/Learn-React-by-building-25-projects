import React, { useState, useEffect } from 'react'

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({ show: false, msg: '' })
  const [movies, setMovies] = useState([])

  const fetchMovies = async (urlParams) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log('data: ', data)

      // errorHandling:
      if (data.Response === 'True') {
        setMovies(data.Search)
        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: data.Error })
      }

      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])

  return {}
}

export default useFetch
