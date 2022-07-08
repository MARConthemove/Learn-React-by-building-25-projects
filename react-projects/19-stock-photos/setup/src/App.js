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

  const fetchImages = async () => {
    setLoading(true)
    // create fetch url
    let url
    url = `${mainUrl}${clientID}`

    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log('data: ', data)
      setPhotos(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.response)
    }
  }

  // effects
  useEffect(() => {
    fetchImages()
  }, [])

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
  }

  console.log('photos: ', photos)
  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input type='text' className='form-input' placeholder='search' />
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
