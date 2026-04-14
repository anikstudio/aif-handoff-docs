import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import DevcontainerGuide from './pages/DevcontainerGuide'
import DockerGuide from './pages/DockerGuide'
import LinuxMacosGuide from './pages/LinuxMacosGuide'
import WindowsGuide from './pages/WindowsGuide'

function AnimatedRoutes() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [phase, setPhase] = useState('entered')

  useEffect(() => {
    if (location.pathname === displayLocation.pathname) return
    setPhase('leaving')
    const leave = setTimeout(() => {
      setDisplayLocation(location)
      window.scrollTo(0, 0)
      setPhase('entering')
      const enter = setTimeout(() => setPhase('entered'), 20)
      return () => clearTimeout(enter)
    }, 480)
    return () => clearTimeout(leave)
  }, [location, displayLocation])

  const cls =
    phase === 'entered'
      ? 'blur-none opacity-100'
      : 'blur-xl opacity-0'

  return (
    <div className={`transition-[filter,opacity] duration-300 ease-out ${cls}`}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/devcontainer" element={<DevcontainerGuide />} />
        <Route path="/docker" element={<DockerGuide />} />
        <Route path="/linux-macos" element={<LinuxMacosGuide />} />
        <Route path="/windows" element={<WindowsGuide />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

export default App
