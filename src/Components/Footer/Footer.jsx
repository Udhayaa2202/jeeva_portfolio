import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import angle_up_solid_1 from '../../assets/angle_up_solid_1.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptate animi delectus deleniti officia obcaecati nobis esse sunt praesentium est enim, id quos voluptatibus iure temporibus debitis eveniet sequi impedit.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>&copy; 2024 Udhayaa. All Rights Reserved</p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                    <div class="footer-iconTop" onClick={() => window.scrollTo({top: 0, behavior:'smooth'})}>
                        <img src={angle_up_solid_1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
