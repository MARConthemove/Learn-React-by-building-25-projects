// Import React Router:
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import pages:
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error'

function App() {
  return (
    <BrowserRouter>
      <nav>our navbar</nav>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          {/* Error Handling: */}
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      <footer>our footer</footer>
    </BrowserRouter>
  )
}

export default App
