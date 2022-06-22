import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App

// Variant 2:
/*
function App() {
  const [people, setPeople] = useState(data)

  // console.log('people useState: ', people)

  const clearListHandler = () => {
    console.log('clear button pressed')
    setPeople([])
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          return <List key={person.id} {...person}></List>
        })}
        <button onClick={clearListHandler}>clear all</button>
      </section>
    </main>
  )
}

export default App
*/
