import React from 'react'
import General from './General'

const About = () => {
    const DownloadResume = ()=>{
    window.open("CV.pdf", "_blank");
  };

  return (
    <div id= "about">
      <div className='about'>
        <General heading="About Me" />
      </div>
        <div className='details'>
        <General heading='Simple & Professional' para='A passionate Software Engineering student specializing in Web Development & Programming.I love building creative, user-friendly, and efficient solutions.'/>
        <General heading='Creative & Friendly' para='Enjoys turning ideas into interactive web applications. Always curious, learning and coding.'/>         
        <General heading='Skill-Focused' para='My focus is on React.js, Java, and database systems, and I enjoy creating responsive websites and problem-solving through code.'/>  
        <General heading='Goal-Oriented' para='Currently pursuing BS in Software Engineering. My goal is to grow as a full-stack developer and contribute to innovative projects that make a difference'/>
        <button onClick={DownloadResume}>Download Resume</button>
      </div>
    </div>

  )
}

export default About

