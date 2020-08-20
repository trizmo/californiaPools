import React from 'react'
import { GrFacebook, GrTwitter, GrYoutube } from 'react-icons/gr'

// CSS
import './footer.css'

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className='footer-firstContainer'>
        <p className="footer-title">California Pools</p>
      </div>
      <div className='footer-secondContainer'>
        <a href="#company" className="footer-navLinks">Our Company</a>
        <a href="#services" className="footer-navLinks">Services</a>
        <a href="#contact" className="footer-navLinks">Contact</a>
      </div>
      <div className='footer-thirdContainer'>
        <div className='footer-thirdContainer-text'>
          <p>Social</p>
        </div>
        <div className='footer-thirdContainer-links'>
          <a href="#" ><GrTwitter />	&nbsp;Twitter</a>
          <a href="#" ><GrFacebook />	&nbsp;Facebook</a>
          <a href="#" ><GrYoutube />	&nbsp;Youtube</a>
        </div>
      </div>
    </div>
  )
}
