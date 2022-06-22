import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [people, setPeople] = useState({ data })

  console.log(people.data)

  return (
    <main>
      <section className='container'>
        <h3>0 birthdays today</h3>
        <List key={people.id} {...people} />
        <button onClick={() => console.log('you clicked me')}>clear all</button>
      </section>
    </main>
  )
}

export default App
