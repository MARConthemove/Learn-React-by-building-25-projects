import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, removeTour }) => {
  console.log('tours', tours)

  return (
    <section>
      <div className='title'>
        <h2 style={{ textTransform: 'none' }}>MARConthemove Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}

export default Tours
