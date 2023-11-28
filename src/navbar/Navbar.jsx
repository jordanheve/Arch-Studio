import { NavLink, useLocation } from 'react-router-dom'
import PopoverNav from './PopoverNav'

export default function Navbar
() {
  const location = useLocation()

  const getCurrentPageText = () => {
    switch (location.pathname) {
      case '/Arch-Studio/portfolio':
        return 'portfolio';
      case '/Arch-Studio/about':
        return 'about us';
      case '/Arch-Studio/contact':
        return 'contact'
      default:
        return "home"
    }
  }
  
 const currentPageText = getCurrentPageText()
  return (
    <header className=' mx-auto flex items-center max-lg:justify-between max-lg:max-w-lg max-sm:max-w-sm  max-sm:px-2 gap-4 h-24 relative'>
        <NavLink title='Go to home page' className='mr-20' to='/Arch-Studio'>
            <img src="/Arch-Studio/logo.svg" alt="logo" />
        </NavLink>
        <nav className='flex gap-12 max-lg:hidden text-slate-500 font-semibold text-lg'>
            <NavLink to='/Arch-Studio/portfolio'>Portfolio</NavLink>
            <NavLink to='/Arch-Studio/about'>About Us</NavLink>
            <NavLink to='/Arch-Studio/contact'>Contact</NavLink>
        </nav>
        <PopoverNav/>

        <div className='absolute top-0 -left-20 max-md:hidden '>
          <div className=' flex flex-col items-center justify-center gap-8 '>
          <div className='bg-slate-400 h-20 w-[2px]'></div>
          <span 
           style={{ writingMode: 'vertical-rl' }}
          className='uppercase text-slate-400 text-3xl tracking-[1rem]   font-light'>
            {currentPageText}
          </span>
          </div>
        </div>
    </header>
  )
}
