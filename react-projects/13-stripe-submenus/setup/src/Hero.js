import React from 'react'
import phoneImg from './images/phone.svg'

// context import
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>portfolio about myself::</h1>
          <p>
            just another coder. recently changed career to fullstack web
            development.
          </p>

          <button className='btn'>Start exploring now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' className='phone-img' />
        </article>
      </div>
    </section>
  )
}

export default Hero
