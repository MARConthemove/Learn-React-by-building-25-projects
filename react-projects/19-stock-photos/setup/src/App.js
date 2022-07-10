import React, { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'

//testing here
// to access ENV(ironment) variables: process.env.XXX
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

// TODO:
// remove current scroll code
// set default page to 1
// setup two useEffects
// don't run second on initial render
// check for query value
// if page 1 fetches images
// otherwise setPage(1)
// fix scroll functionality

function App() {
  // state:
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [newImages, setNewImages] = useState(false)
  const mounted = useRef(false)

  // fetchData function:
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
      // console.log('data: ', data)

      // check if query or not
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results
        } else if (query) {
          return [...oldPhotos, ...data.results]
        } else {
          return [...oldPhotos, ...data]
        }
      })
      setNewImages(false)
      setLoading(false)
    } catch (error) {
      setNewImages(false)
      setLoading(false)
      console.log(error)
    }
  }

  // effects
  useEffect(() => {
    fetchImages()
    // eslint-disable-next-line
  }, [page])

  // This effect should only render with the 2, 3, ... page and not initially -> useRef()
  useEffect(() => {
    // not running on the initial render
    if (!mounted.current) {
      mounted.current = true
      return
    }
    if (!newImages) return
    if (loading) return
    setPage((oldPage) => oldPage + 1)
  }, [newImages])

  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setNewImages(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', event)
    return () => {
      window.removeEventListener('scroll', event)
    }
  }, [])

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query) return
    if (page === 1) {
      fetchImages()
      return
    }
    setPage(1)
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

// old code :

// Old useEffect, buggy because loading was always false
/*   useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => oldPage + 1)
      }
    })
    return () => window.removeEventListener('scroll', event)
    // eslint-disable-next-line
  }, []) */
