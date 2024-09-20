import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import jeeva from '../../assets/jeeva.jpg'

const About = () => {
  return (
    <div className='about'>
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, sequi? Cum ut rerum doloremque autem iusto veniam, nesciunt, eveniet sit distinctio voluptatem ducimus! Eligendi in repellendus enim dicta nihil soluta.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nesciunt accusamus iusto temporibus repellendus magnam, ullam error natus unde! Quo enim fuga hic accusamus aut ducimus molestiae autem molestias sapiente!</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"55%"}} /></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>Rust</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"60%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>3+</h1>
            <p>YEARS OF EXPERIENCE</p> {/*this is to be updated*/}
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
