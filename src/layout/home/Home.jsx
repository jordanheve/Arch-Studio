import Slider from './Slider'
import AboutSection from './AboutSection'
import { Fade } from 'react-awesome-reveal'
import WelcomeSection from './WelcomeSection'
import FeaturedSection from './FeaturedSection'


export default function Home() {
  return (
    <main className='flex flex-col gap-48'>
      <Fade>
      <Slider/>
      <WelcomeSection/>
      <AboutSection/>
      <FeaturedSection/>
      </Fade>
    </main>
  )
}
