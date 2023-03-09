import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10'>
      {technologies.map((tech, i) => (
        <div className='w-28 h-28' key={i}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");