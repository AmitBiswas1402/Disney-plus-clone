import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Slider from './components/Slider'

function App() {
  const [first, setfirst] = useState(0)

  return (
    <h1 className="">
      <Header />
      <Slider />
    </h1>
  )
}

export default App
