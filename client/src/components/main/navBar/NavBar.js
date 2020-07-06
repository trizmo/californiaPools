import React, { Component } from 'react'
import { FaBars } from 'react-icons/fa'


// CSS
import './navBar.css'

export default class Navbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  mobileNavLinks = () => {
    return (
      <div className='navbar-mobileContainer-links'>
        <a href="/services" className="navbar-mobile-navlink">Services</a>
        {/* <a href="#" className="navbar-mobile-navlink"></a> */}
        <a href="/company" className="navbar-mobile-navlink">Our Company</a>
        <a href="/contact" className="navbar-mobile-navlink">Contact</a>
      </div>
    )
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <div className='navbar-logo'><a href="/">California Pools</a ></div>
        <div className='navbar-links-desktop'>
          <div className='navbar-links-desktop-upper'>
            <a href="/" className="navbar-desktop-navlink-phone">(800) 555 4561</a>
          </div>
          <div className='navbar-links-desktop-lower'>
            <a href="/services" className="navbar-desktop-navlink">Services</a>
            {/* <a href="#" className="navbar-desktop-navlink">Projects</a> */}
            <a href="/company" className="navbar-desktop-navlink">Our Company</a>
            <a href="/contact" className="navbar-desktop-navlink">Contact</a>
          </div>
        </div>
        <div className='navbar-mobileContainer'>
          <div className='navbar-mobile-bars'>
            <FaBars onClick={this.toggle} />
          </div>
          {this.state.isOpen ? (this.mobileNavLinks()) : (null)}

        </div>
      </div>
    )
  }
}
