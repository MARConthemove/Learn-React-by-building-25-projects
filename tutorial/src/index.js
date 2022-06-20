import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}

const author = 'Amelia Hepworth'
const Book = () => {
  const title = 'I love you to the Moon and Back'

  return (
    <article className='book'>
      <img
        src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSPtxH9mRAD-2H6LxkUIH-sfzPmnMjgl6XSJ7mnWMl4lcJXSZEXjeD3SWY5Gla_3kycT52L3b1_w4DA0TEeo3DBocU7ekit8xlDXwK6F4Z7&usqp=CAE'
        alt=''
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  )
}

export default BookList

ReactDom.render(<BookList />, document.getElementById('root'))
