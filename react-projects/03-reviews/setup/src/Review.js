import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  // state
  const [index, setIndex] = useState(0)

  // console.log(people)

  // data destructuring
  const { id, image, job, name, text } = people[index]

  // random function
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    return setIndex(checkNumber(randomNumber))
  }

  // index validation
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  // onClick-handler
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      // console.log('newIndex: ', newIndex)
      return checkNumber(newIndex)
    })
  }

  // component rendering
  return (
    <article className='review' key={id}>
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
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        random
      </button>
    </article>
  )
}

export default Review
