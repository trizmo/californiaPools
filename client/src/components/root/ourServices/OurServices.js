import React from 'react'

// CSS
import './ourServices.css'

export default function OurServices() {
  return (
    <div className='ourServices-wrapper'>
      <div className='ourServices-offers'>
        <p className="ourServices-title">We Offer</p>
        <ul>
          <li>Weekly Pool Service</li>
          <li>Water Quality Consultation</li>
          <li>Equipment Repair and Installation</li>
          <li>Decades of Experience</li>
        </ul>
      </div>
      <div className='ourServices-info'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}
