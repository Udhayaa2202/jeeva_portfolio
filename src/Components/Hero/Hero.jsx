import React from 'react'
import './Hero.css'
import jeeva from '../../assets/jeeva.jpg'
import resume from '../../assets/myresume/resume.pdf' 

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={jeeva} alt="" />
      <h1><span>I'm Jeevitha Kannan,</span> Linux Developer</h1>
      <p>Hey Welcome... This is Jeevitha Kannan from abcd Technologies. Professional App Developer & Backend Developer. I am a quick learner that makes me to survive in all environments</p>
      <div className="hero-action">
        <div className="hero-connect">
          <a
            className='anchor-link'
            href='https://www.linkedin.com/in/jeevitha-kannan-k-s-60a971267/'
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => console.log('Link clicked!')}
          >
            Connect With Me
          </a>
        </div>
        <div className="hero-resume">
          <a href={resume} target="_blank" rel="noopener noreferrer">My Resume</a>
          </div>
      </div>
    </div>
  )
}

export default Hero
