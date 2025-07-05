import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage></HomePage>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
