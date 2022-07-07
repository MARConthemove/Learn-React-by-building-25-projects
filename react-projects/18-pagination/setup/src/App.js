import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

function App() {
  // full data from useFetch custom hook
  const { loading, data } = useFetch()

  // pageNumber and array for specific page
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])

  console.log(data)
  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : "Pagination GitHub Follower's"}</h1>
        <div className='underline'></div>
      </div>

      <section className='followers'>
        <div className='container'>
          {data.map((follower) => {
            return <Follower key={follower.id} {...follower} />
          })}
        </div>
      </section>
    </main>
  )
}

export default App
