import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AdoteAqui from './pages/AdoteAqui/AdoteAqui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AdoteAqui />
  )
}

export default App
