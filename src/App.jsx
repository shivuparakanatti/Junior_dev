import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Hero from './components/Hero'
import { Slice } from 'lucide-react'
import Sliders from './components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Sliders/> 
    </>
  )
}

export default App
