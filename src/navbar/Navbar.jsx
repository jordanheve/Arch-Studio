import { NavLink } from 'react-router-dom'
import PopoverNav from './PopoverNav'

export default function Navbar
() {
  return (
    <header className=' mx-auto flex items-center max-lg:justify-between max-lg:max-w-lg max-sm:max-w-sm  max-sm:px-2 gap-4 h-24'>
        <NavLink title='Go to home page' className='mr-20' to='/'>
            <img src="/logo.svg" alt="logo" />
        </NavLink>
        <nav className='flex gap-12 max-lg:hidden text-slate-500 font-semibold text-lg'>
            <NavLink to='/portfolio'>Portfolio</NavLink>
            <NavLink to='/about'>About Us</NavLink>
            <NavLink to='contact'>Contact</NavLink>
        </nav>
        <PopoverNav/>
    </header>
  )
}
