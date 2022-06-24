import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-tours-project'

function App() {
  // state
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  // handler
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id
    })
    setTours(newTours)
  }

  // async data-fetching
  const fetchTours = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(url)
      const tours = await response.json()

      setIsLoading(false)
      setTours(tours)
    } catch (err) {
      setIsLoading(false)
      console.log(err)
    }
  }

  // effects
  useEffect(() => {
    setTimeout(() => {
      fetchTours()
    }, 1000)
  }, [])

  // conditional-rendering
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h3>No TOURS are left, wait or reload</h3>
          <button
            className='btn'
            onClick={() => {
              fetchTours()
            }}
          >
            refresh page
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App
