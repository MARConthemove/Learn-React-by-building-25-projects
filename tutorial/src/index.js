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

function Greeting() {
  return (
    <div>
      <h3>hello people</h3>
      <ul>
        <li>
          <a href='#'>hello world</a>
        </li>
        <img src='' alt='' />
        <input type='text' name='' id='' />
      </ul>
    </div>
  )
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
