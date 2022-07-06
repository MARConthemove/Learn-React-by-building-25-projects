import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'

const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {
  // state values
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState(null)
  const [title, setTitle] = useState('name')
  const [value, setValue] = useState('random person')

  //handler
  const handleValue = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label
      setTitle(newValue)
      setValue(person[newValue])
    }
  }

  // fetch function
  const getPerson = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      const person = data.results[0]

      // email, person
      const { phone, email } = person
      // syntax destructuring => take large property rename it in image!
      const { large: image } = person.picture
      // different way to destructure! how to get nesten property's out of the object
      const {
        login: { password },
      } = person
      // name => first, last
      const { first, last } = person.name
      // age
      const {
        dob: { age },
      } = person
      // street => streetName, streetNumber
      const {
        location: {
          street: { name: streetName, number: streetNumber },
        },
      } = person

      const newPerson = {
        image,
        phone,
        email,
        password,
        age,
        street: `${streetName} ${streetNumber}`,
        name: `${first} ${last}`,
      }

      setPerson(newPerson)
      setLoading(false)
      setTitle('name')
      setValue(newPerson.name)
    } catch (error) {
      console.log(error)
    }
  }

  // effects
  useEffect(() => {
    getPerson()
  }, [])

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={(person && person.image) || defaultImage}
            alt='random user'
            className='user-img'
          />
          <p className='user-title'>My {title} is</p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            <button
              className='icon'
              data-label='name'
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>

            <button
              className='icon'
              data-label='email'
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>

            <button className='icon' data-label='age' onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>

            <button
              className='icon'
              data-label='street'
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>

            <button
              className='icon'
              data-label='phone'
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>

            <button
              className='icon'
              data-label='password'
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className='btn' type='button' onClick={getPerson}>
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
