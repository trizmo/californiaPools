import React from 'react'

// CSS
import './footer.css'

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className='footer-firstContainer'>
        <p className="footer-title">California Pools</p>
      </div>
      <div className='footer-secondContainer'>
        <a href="/services" className="footer-navLinks">Services</a>
        <a href="#" className="footer-navLinks">Our Company</a>
        <a href="/contact" className="footer-navLinks">Contact</a>
      </div>
      <div className='footer-thirdContainer'>
        <div className='footer-thirdContainer-text'>
          <p>Social</p>
        </div>
        <div className='footer-thirdContainer-links'>
          <a href="#" >Twitter</a>
          <a href="#" >Facebook</a>
          <a href="#" >Youtube</a>
        </div>
      </div>
    </div>
  )
}
