import { getSingleElementValue } from '@testing-library/jest-dom/dist/utils'
import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  // calls useEffect everytime the component rerenders
  useEffect(() => {
    console.log('call useEffect')
    if (value >= 1) {
      document.title = `New(${value})`
    }
  }, [value])

  useEffect(() => {
    console.log('+++HELLO WORLD+++')
  }, [])

  console.log('render component')

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  )
}

export default UseEffectBasics
