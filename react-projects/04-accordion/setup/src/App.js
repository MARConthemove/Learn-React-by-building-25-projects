import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

function App() {
  console.log(data)
  return (
    <div className='container'>
      <h3>FAQs</h3>
      <section className='info'>
        {data.map((person) => {
          return <SingleQuestion {...person} key={person.id} />
        })}
      </section>
    </div>
  )
}

export default App
