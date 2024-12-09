import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/lostgame' />} />
        <Route path='/lostgame' element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
