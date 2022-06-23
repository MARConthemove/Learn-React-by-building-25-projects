import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  /*
  const fetchData = async () => {
    const response = await fetch(url)
    console.log('response: ', response)
    // console.log('typeof response: ', typeof response)

    const user = await response.json()
    console.log('user: ', user)
    // console.log('typeof user: ', typeof user)

    setUser(user)
  }
  */

  useEffect(() => {
    // setIsLoading(true) also possible here.
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          // error throwing:
          throw new Error(res.statusText)
        }
      })
      .then((user) => {
        const { login } = user
        setUser(login)

        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      })
      .catch((err) => console.log(err)) // with this catch we are only catching network errors! (-> axios for handling)
  }, [])

  if (isloading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <h1>Error!</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default MultipleReturns
