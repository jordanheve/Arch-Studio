import React from 'react'
import { Fade } from 'react-awesome-reveal'
import {ArrowRightIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
export default function AboutSection() {
  return (
      <Fade>
    <section className='relative text-white'>
        
        <div className='top-1/2 -translate-y-1/2 left-48 absolute z-10 max-w-sm'>
    <h3 className='text-6xl font-bold mb-4'>Small team, big ideas</h3>
    <Link 
    className='bg-black flex items-center py-4 px-6 gap-4  font-semibold w-fit'
    to='/about'>
    About Us
    <ArrowRightIcon className='h-8'/>
    </Link>
        </div>
    <div className='brightness-50'>
    <img src="" alt="" />
    <img src="/home/desktop/image-small-team.jpg" alt="small team" />
    </div>
    </section>
      </Fade>
  )
}
