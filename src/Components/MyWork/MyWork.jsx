import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="mywork-item">
              <img src={work.w_img} alt={work.w_name} />
              <div className="mywork-overlay">
                <a href={work.link} target="_blank" rel="noopener noreferrer">
                  <p>{work.w_name}</p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default MyWork
