import React from 'react'

export const ErrorExample = () => {
  let title = 'random title'

  const handleClick = () => {
    title = 'Hello People'
    console.log(title)
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
}
