import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Skills from './pages/Skills'


function App() {

  return (
    <Router>

      <Container fluid>

        <Navigation />

        <div>
          <Header />

          <Routes className=''>
            <Route path='/' element={<Home />} />
            <Route path='/about-me' element={<AboutMe />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/education' element={<Education />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>

          <Footer />
        </div>
      </Container>

    </Router>
  )
}

export default App
