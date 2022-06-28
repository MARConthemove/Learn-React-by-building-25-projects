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
      const newParagraphs = paragraphs.slice(0, amount)

      setDisplayed(newParagraphs)
      setAmount('')
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
      <article className='lorem-text'>
        {displayed.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>
        })}
      </article>
    </section>
  )
}

export default App
