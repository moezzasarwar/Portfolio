import React from 'react'
import General from './General'

const Projects = () => {
  const ViewProfile = ()=>{
    window.open("https://github.com/dashboard","_blank");
  };
  return (
    <div id= "projects">
      <div className='projects'>
    <General heading="Projects" />
    </div>
    <div className='links'>
      <ol>
          <li>Jewelry Website</li>   
          <a href="https://moezzasarwar.github.io/APP-JEWEJRY/#">wwww.Jewelry Website.com</a>   
          <li>Registration Page</li>
          <a href="https://moezzasarwar.github.io/Event-registration-pg/">wwww.Registration WebPage.com</a> 
          <li>Portfolio WebPage</li>   
          <a href="https://portfolio1-omega-one.vercel.app/">wwww.Portfolio.com</a>
      </ol>
      <button onClick={ViewProfile}>GitHub Profile</button>
    </div>
    </div>
  )
}

export default Projects
