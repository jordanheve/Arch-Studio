import useDeviceType from '../../hooks/useDeviceType'
import { portfolioData } from './data'
import { Fade } from 'react-awesome-reveal'
export const Portfolio = () => {
  const windowSize = useDeviceType()
  return (
    <article className="grid grid-cols-3 gap-6">
    <Fade>
    {portfolioData.map(
      item => (
        <div 
        className='relative'
        key={item.id}>
          <div className='bg-gradient-to-t from-black opacity-50 to-45% h-full w-full absolute'>
          </div>
          <img src={"/portfolio/"+windowSize+"/"+item.image} alt={item.name+" image"}/>
          <div className='absolute bottom-8 left-8 z-20 text-white'>
          <h4 className='text-2xl font-semibold '>{item.name}</h4>
          <p className='text-slate-200'>{item.date}</p>
          </div>
        </div>
      )
    )}
    </Fade>
    </article>
  )
}
