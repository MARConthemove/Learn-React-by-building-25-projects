import React, { useState } from 'react'

const UseStateBasics = () => {
  // HOOKS:
  // hooks start with use
  // component name must be uppercase
  // the hook must be in the function/component body
  // cannot call conditionally

  // useState return an Array (with 2 entrys)! thats why we destructuring into an Array
  console.log(useState('hello world'))

  // const value = useState()[0]
  // const handler = useState()[1]

  // console.log(value, handler)

  const [text, setText] = useState('random title')

  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world')
    } else {
      setText('random title')
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
