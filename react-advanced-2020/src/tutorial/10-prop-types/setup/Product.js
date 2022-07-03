import React from 'react'

const Product = ({ name, image, price }) => {
  return (
    <article className='product'>
      <h4>{name}</h4>
      <p>${price}</p>
      <img src={image.url} alt={name} />
    </article>
  )
}

export default Product
