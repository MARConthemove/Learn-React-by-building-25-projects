import React from 'react'
import phoneImg from './images/phone.svg'

// context import
import { useGlobalContext } from './context'

const Hero = () => {
  const context = useGlobalContext()
  console.log('context: ', context)

  return <h2>hero component</h2>
}

export default Hero
