// import::react
import React from 'react'

// import::components
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {
  return (
    <React.Fragment>
      <Home />
      <Modal />
      <Sidebar />
    </React.Fragment>
  )
}

export default App
