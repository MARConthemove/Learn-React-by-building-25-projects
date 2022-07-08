import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

// to access ENV(ironment) variables: process.env.XXX
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  // state
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')

  const fetchImages = async () => {
    setLoading(true)
    // create fetch url
    let url
    const urlPage = `&page=${page}`
    const urlQuery = `&query=${query}`

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    } else {
      url = `${mainUrl}${clientID}${urlPage}`
    }

    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log('data: ', data)

      // check if query or not
      setPhotos((oldPhotos) => {
        if (query) {
          return [...oldPhotos, ...data.results]
        } else {
          return [...oldPhotos, ...data]
        }
      })

      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.response)
    }
  }

  // effects
  useEffect(() => {
    fetchImages()
  }, [page])

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => oldPage + 1)
      }
    })
    return () => window.removeEventListener('scroll', event)
  }, [])

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchImages()
  }

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input
            type='text'
            className='form-input'
            placeholder='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>

      <section className='photos'>
        <div className='photos-center'>
          {photos.map((image) => {
            return <Photo key={image.id} {...image} />
          })}
        </div>
        {loading && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  )
}

export default App
