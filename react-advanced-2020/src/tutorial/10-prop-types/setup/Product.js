import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ name, image, price }) => {
  const url = image && image.url
  console.log(name, image, price)
  return (
    <article className='product'>
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
      <img src={url || defaultImage} alt={name} />
    </article>
  )
}

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

// Variant2:
/* Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: defaultImage,
} */

export default Product
