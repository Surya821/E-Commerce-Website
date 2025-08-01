import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import instagram_icon from '../Assests/instagram_icon.png'
import linkedin_icon from '../Assests/InBug-Black.png'
import github_icon from '../Assests/github-mark.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icon-container">
                <a href="https://www.instagram.com/__surya.pratap.singh__?utm_source=qr&igsh=MXUzcnVqaHNsdW1wcA==" target="_blank"><img src={instagram_icon} alt="" /> </a>
            </div>
            <div className="footer-icon-container" id="linkedin_icon" >
                <a href="https://www.linkedin.com/in/surya-pratap-singh1/" target="_blank"><img src={linkedin_icon} alt="" height="31"  /></a>
            </div>
            <div className="footer-icon-container" id='github_icon' >
                <a href="https://github.com/Surya821" target="_blank"><img src={github_icon} alt="" height="31" /></a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - All Rights Reserved</p>
        </div>
    </div>
  )
}
