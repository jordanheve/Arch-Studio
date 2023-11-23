
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './navbar/Navbar'
import Home from './layout/home/Home'
import Footer from './footer/Footer'
import { Portfolio } from './layout/portfolio/Portfolio'
import About from './layout/about/About'
import Contact from './layout/contact/Contact'



function App() {


  return (
    <div className='px-10 max-w-[1100px] mx-auto'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App
