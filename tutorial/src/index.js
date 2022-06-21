import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

import { books } from './books'
import SpecificBook from './Book' // default export => doesnt have to be the same name!

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>
      })}
    </section>
  )
}

export default BookList

ReactDom.render(<BookList />, document.getElementById('root'))
