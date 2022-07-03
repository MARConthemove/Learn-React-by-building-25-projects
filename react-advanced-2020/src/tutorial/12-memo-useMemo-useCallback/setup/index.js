import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  console.log('hello world')
  return (
    data.reduce((total, item) => {
      const price = item.fields.price
      if (price >= total) {
        total = price
      }
      return total
    }, 0) / 100
  )
}

const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  // if the rerender comes from props (not state change) we can use the useCallback hook by
  // simply wrappring our function with it, and giving a depencie array
  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])

  // console.log('products:', products)
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}>cart: {cart}</h1>
      <h1>Most Expensive: ${calculateMostExpensive(products)}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  )
}

// React.memo (memo Function) is checking if "products" changes, and if not it will not rerender if any other
// part of the application triggers a rerender like useState changes.
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('big list called')
  })

  // console.log('products next:', products)
  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        )
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count('single item called')
  })

  // console.log('fields:', fields)
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>add to cart</button>
    </article>
  )
}
export default Index
