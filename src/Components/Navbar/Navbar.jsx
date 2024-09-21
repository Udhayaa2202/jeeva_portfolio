import React, { useState } from 'react'
import './Navbar.CSS'
import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="" /> {/*this is a comment*/}
      <ul className='nav-menu'>
        <li><AnchorLink><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu=="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu=="services"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu=="work"?<img src={underline} alt=''/>:<></>}</li>
        <li><AnchorLink><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu=="contact"?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
