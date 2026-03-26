import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '@components/common/Navbar'
import Home from '@pages/Home'
import About from '@pages/About'
import Projects from '@pages/Projects'
import Contact from '@pages/Contact'
import Footer from './components/common/Footer'
import Project from './pages/Project'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-darker via-dark to-darker">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:title" element={<Project />} />
          <Route path="/projects?tag=:tag" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
