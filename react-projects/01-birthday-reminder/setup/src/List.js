import React from 'react'

const List = (props) => {
  console.log('propsList: ', props)

  return (
    <React.Fragment>
      <article className='person'>
        <img src={props.data[0].image} alt='test' />
        <div>
          <h4>{props.data[0].name}</h4>
          <p>26 years</p>
        </div>
      </article>
      <h2>test</h2>
    </React.Fragment>
  )
}

export default List
