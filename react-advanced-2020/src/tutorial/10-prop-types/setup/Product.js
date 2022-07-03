import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ name, image, price }) => {
  console.log(name, image, price)
  return (
    <article className='product'>
      <h4>{name}</h4>
      <p>${price}</p>
      <img src={image.url} alt={name} />
    </article>
  )
}

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: defaultImage,
}

export default Product
