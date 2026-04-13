import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DevcontainerGuide from './pages/DevcontainerGuide'
import DockerGuide from './pages/DockerGuide'
import LinuxMacosGuide from './pages/LinuxMacosGuide'
import WindowsGuide from './pages/WindowsGuide'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/devcontainer" element={<DevcontainerGuide />} />
        <Route path="/docker" element={<DockerGuide />} />
        <Route path="/linux-macos" element={<LinuxMacosGuide />} />
        <Route path="/windows" element={<WindowsGuide />} />
      </Routes>
    </Router>
  )
}

export default App
