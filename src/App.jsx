import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import { Routes, Route } from "react-router-dom"
import NotPageFound from './pages/PageNotFound'
import WeatherCard from './components/WeatherCard'




function App() {
  const [value, setValue] = useState(new Date());

  useEffect(() => { const interval = setInterval(() => setValue(new Date()), 1000); 
    
  return () => { clearInterval(interval); 
  }; 
}, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotPageFound />} />
      </Routes>
    </div >
  )
}

export default App
