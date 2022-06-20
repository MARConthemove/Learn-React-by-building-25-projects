import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img
      src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSPtxH9mRAD-2H6LxkUIH-sfzPmnMjgl6XSJ7mnWMl4lcJXSZEXjeD3SWY5Gla_3kycT52L3b1_w4DA0TEeo3DBocU7ekit8xlDXwK6F4Z7&usqp=CAE'
      alt=''
    />
  )
}

const Title = () => {
  return <h1>I love you to the Moon and Back</h1>
}

const Author = () => {
  return <h4>Amelia Hepworth</h4>
}

export default BookList

ReactDom.render(<BookList />, document.getElementById('root'))
