
import TeamSection from './TeamSection'
import HeritageSection from './HeritageSection'
import LeadersSection from './LeadersSection'
import { Fade } from 'react-awesome-reveal'

export default function About() {
  return (
    <article className='flex gap-48 flex-col'>
      <Fade>
      <TeamSection/>
      <HeritageSection/>
      <LeadersSection/>
      </Fade>
    </article>
  )
}

