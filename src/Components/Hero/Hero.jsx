import React from 'react'
import './Hero.css'
import jeeva from '../../assets/jeeva.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src= {jeeva} alt="" />
      <h1><span>I'm Jeevitha Kannan,</span> linux developer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error qui nobis! Eum voluptate temporibus eveniet molestiae, tenetur quas laborum quaerat assumenda nulla odio suscipit pariatur quisquam modi voluptatum. Doloremque.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
