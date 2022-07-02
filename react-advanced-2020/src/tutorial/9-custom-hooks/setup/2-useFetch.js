import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // data container
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const response = await fetch(url)
      const products = await response.json()
      setProducts(products)
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [url])

  return { loading, products, error }
}
