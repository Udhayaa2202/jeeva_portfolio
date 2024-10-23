import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import jeeva from '../../assets/jeeva.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={jeeva} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an engineering student with a passion for technology and problem solving. I am a self driven individual who loves to work on new and challenging projects</p>
                <p>Learn More knowledge by solving errors. Error solving makes me to learn more things in depth.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>C</p><hr style={{width:"55%"}} /></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>Rust</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"60%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>6+</h1>
            <p>COMPETITIONS PARTICIPATED</p> {/*this is to be updated*/}
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>2+</h1>
            <p>COMPETITION WINNER</p>
        </div>
      </div>
    </div>
  )
}

export default About
