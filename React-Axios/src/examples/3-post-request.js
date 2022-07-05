import { useState } from 'react'
import axios from 'axios'
const url = 'https://course-api.com/axios-tutorial-post'

const PostRequest = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(url, { name: name, email: email })
      console.log('response', response)
      console.log('response.data', response.data)
    } catch (error) {
      console.log('error.response', error.response)
      const errorMessage = error.response.data.msg
      setError(errorMessage)
    }
  }

  return (
    <section>
      <h2 className='text-center'>post request</h2>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <h2>{error ? error : name}</h2>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  )
}
export default PostRequest

axios.post()
