import {ArrowRightIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import useDeviceType from '../../hooks/useDeviceType'
export default function AboutSection() {
  const windowSize = useDeviceType()
  return (
    <section className='relative text-white mx-auto w-fit'>
        
        <div className='top-1/2 -translate-y-1/2 left-8 lg:left-48 absolute z-10 max-w-sm '>
    <h3 className='text-5xl sm:text-7xl font-bold mb-4'>Small team, <br/> big ideas</h3>
    <Link 
    className='bg-black flex items-center py-4 px-6 gap-4 hover:bg-zinc-800 active:bg-zinc-600  font-semibold w-fit'
    to='/about'>
    About Us
    <ArrowRightIcon className='h-8'/>
    </Link>
        </div>
    <div className='brightness-50'>
    <img src={`/home/${windowSize}/image-small-team.jpg`} alt="small team" />
    </div>
    </section>
  )
}
