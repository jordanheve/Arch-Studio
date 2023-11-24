
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'
import './App.css'
import Navbar from './navbar/Navbar'
import Home from './layout/home/Home'
import Footer from './footer/Footer'
import { Portfolio } from './layout/portfolio/Portfolio'
import About from './layout/about/About'
import Contact from './layout/contact/Contact'
import { useEffect } from 'react'

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  
  

  return (
    <div 
   
    className='max-w-[1100px] mx-auto'>
          
      <BrowserRouter>
      <ScrollToTop/>
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
