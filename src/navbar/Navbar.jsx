import React from 'react'
import { NavLink } from 'react-router-dom'

export default function 
() {
  return (
    <header className='flex items-center gap-4 h-24'>
        <NavLink className='mr-20' to='/'>
            <img src="/logo.svg" alt="logo" />
        </NavLink>
        <nav className='flex gap-12 text-slate-500 font-semibold text-lg'>
            <NavLink to='/portfolio'>Portfolio</NavLink>
            <NavLink to='contact'>Contact</NavLink>
            <NavLink to='/about'>About Us</NavLink>
        </nav>
    </header>
  )
}
