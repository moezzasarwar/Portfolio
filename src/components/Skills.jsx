import React from 'react'
import General from './General'
import Skillbar from './Skillbar'

const Skills = () => {
  return (
    <div id= "skills">
      <div className='skills'>
      <General heading="Skills"/>
      </div>
      <div className='hard-skills'>
        <Skillbar skill="HTML 5" level={90} />
        <Skillbar skill="CSS" level={80} />
        <Skillbar skill="JavaScript" level={75} />
        <Skillbar skill="React JS" level={70} />
        <Skillbar skill="Express JS" level={55} />
        <Skillbar skill="Node JS" level={50} />
        <Skillbar skill="MongoDB" level={45} />
        </div>
        </div>
  )
}

export default Skills
