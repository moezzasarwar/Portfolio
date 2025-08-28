import React from 'react'
import General from './General'

const Home = () => {

  const DownloadResume = ()=>{
    window.open("CV.pdf", "_blank");
  };
  const ViewProfile = ()=>{
    window.open("https://github.com/dashboard","_blank");
  };

  return (
    <div id= "home">
      <div className='home'>
      <General heading="My Portfolio" />
    </div>
    <div className='main'>
      <div className='left'>
        <General heading='Hi! I am'/>
        <General heading='Moezza Sarwar' className='white-text'/>
        <button onClick={ViewProfile}>View my Work</button>
        <button onClick={DownloadResume}>Download Resume</button>
        </div>
      <div className='right'>
        <img src="./image.jpg" alt="Pic" />
      </div>
    </div>
    </div>
  )
}

export default Home