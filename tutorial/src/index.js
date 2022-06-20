import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

// setup vars
const firstBook = {
  img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSPtxH9mRAD-2H6LxkUIH-sfzPmnMjgl6XSJ7mnWMl4lcJXSZEXjeD3SWY5Gla_3kycT52L3b1_w4DA0TEeo3DBocU7ekit8xlDXwK6F4Z7&usqp=CAE',
  title: 'I love you to the Moon and Back',
  author: 'Amelia Hepworth',
}
const secondBook = {
  img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRzqRfvu42P8Wm_ZJhTupc9VOH1foYuAbY_dmw26_zWoDH_Qrwo3X-abfFKH35OsvR5cX6grcI7ad0_qjOt7sSIhfeagAvFElVgqJNm8oR1wT0x0OiLoUDYgg&usqp=CAE',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen',
}

function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus quae commodi blanditiis laborum excepturi quisquam
          atque modi nemo mollitia omnis, amet voluptatem quibusdam, eveniet qui
          eos accusantium repudiandae, cumque dolorum?
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  // Object destructuring!
  // Either destructur in the body of the function or in the parameter directly!
  const { img, title, author } = props

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  )
}

export default BookList

ReactDom.render(<BookList />, document.getElementById('root'))
