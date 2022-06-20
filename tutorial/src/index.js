'use strict'

import React from 'react'
import ReactDom from 'react-dom'

// stateless functional component (dumb component)
// always return JSX

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// Nested Components, React Tools

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>marc gaetcke</h2>
const Message = () => {
  return <p>this is my message</p>
}

// function Greeting() {
//   return <h4>hello world</h4>
// }

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   )
// }

export default Greeting

ReactDom.render(<Greeting />, document.getElementById('root'))
