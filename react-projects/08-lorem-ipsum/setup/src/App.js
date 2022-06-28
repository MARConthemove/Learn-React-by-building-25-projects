import React, { useState } from 'react'
import data from './data'

function App() {
  const [paragraphs, setParagraphs] = useState(data)
  const [amount, setAmount] = useState('')
  const [displayed, setDisplayed] = useState([])

  console.log(paragraphs)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (amount) {
    }
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form action='' className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          id='amount'
          name='amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className='btn'>generate</button>
      </form>
      {paragraphs.map((paragraph) => {
        return (
          <article className='lorem-text'>
            <p>{paragraph}</p>
          </article>
        )
      })}
    </section>
  )
}

export default App
