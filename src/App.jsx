
import { BrowserRouter, Route, Routes, useLocation} from 'react-router-dom'
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
   
    className='lg:max-w-[1100px] sm:max-w-[573px] max-w-[375px] mx-auto'>
          
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar/>
        <Routes>
          <Route path='/Arch-Studio' element={<Home/>}/>
          <Route path='/Arch-Studio/portfolio' element={<Portfolio/>}/>
          <Route path='/Arch-Studio/about' element={<About/>}/>
          <Route path='/Arch-Studio/contact' element={<Contact/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App
