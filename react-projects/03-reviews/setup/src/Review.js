import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  // state
  const [index, setIndex] = useState(0)

  console.log(people)

  // data destructuring
  const { id, image, job, name, text } = people[index]

  return (
    <article className='review'>
      <div className='img-container'>
        <img className='person-img' src={image} alt={name} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button
          className='prev-btn'
          onClick={() => {
            if (index === 0) return
            setIndex(index - 1)
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className='next-btn'
          onClick={() => {
            if (index === index.length) return
            setIndex(index + 1)
          }}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn'>random</button>
    </article>
  )
}

export default Review
