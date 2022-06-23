import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  // state
  const [show, setShow] = useState(false)
  console.log(show)
  return (
    <React.Fragment>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </React.Fragment>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])

  // useEffect(() => {
  //   window.addEventListener('resize', () => {
  //     setSize(window.innerWidth)
  //   })
  // }, [])

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>size : {size} px</h2>
    </div>
  )
}

export default ShowHide
