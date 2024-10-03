import React from 'react'
import './Hero.css'
import jeeva from '../../assets/jeeva.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src= {jeeva} alt="" />
      <h1><span>I'm Jeevitha Kannan,</span> Linux Developer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error qui nobis! Eum voluptate temporibus eveniet molestiae, tenetur quas laborum quaerat assumenda nulla odio suscipit pariatur quisquam modi voluptatum. Doloremque.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
