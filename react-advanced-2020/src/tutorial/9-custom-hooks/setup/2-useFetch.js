import { useState, useEffect, useCallback } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // data container
  const [products, setProducts] = useState([])

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch(url)
      const products = await response.json()
      setProducts(products)
      setLoading(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }, [url])

  useEffect(() => {
    getProducts()
  }, [url, getProducts])

  return { loading, products, error }
}
d
