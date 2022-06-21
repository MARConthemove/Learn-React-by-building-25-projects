import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

// setup vars
const books = [
  {
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSPtxH9mRAD-2H6LxkUIH-sfzPmnMjgl6XSJ7mnWMl4lcJXSZEXjeD3SWY5Gla_3kycT52L3b1_w4DA0TEeo3DBocU7ekit8xlDXwK6F4Z7&usqp=CAE',
    title: 'I love you to the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRzqRfvu42P8Wm_ZJhTupc9VOH1foYuAbY_dmw26_zWoDH_Qrwo3X-abfFKH35OsvR5cX6grcI7ad0_qjOt7sSIhfeagAvFElVgqJNm8oR1wT0x0OiLoUDYgg&usqp=CAE',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen',
  },
]

const names = ['john', 'peter', 'susan']
const newNames = names.map((name) => {
  return <h1>{name}</h1>
})
console.log(newNames)

function BookList() {
  return <section className='booklist'>{newNames}</section>
}

const Book = (props) => {
  console.log(props)
  // Object destructuring!
  // Either destructur in the body of the function or in the parameter directly!
  const { img, title, author } = props

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

export default BookList

ReactDom.render(<BookList />, document.getElementById('root'))
