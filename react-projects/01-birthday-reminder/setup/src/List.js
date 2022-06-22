import React from 'react'

const List = (props) => {
  // console.log('props: ', props)
  const { image, name, age } = props

  return (
    <React.Fragment>
      <article className='person'>
        <img src={image} alt='user_picture' />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    </React.Fragment>
  )
}

export default List
