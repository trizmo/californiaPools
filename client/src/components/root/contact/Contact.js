import React from 'react'

// CSS
import './contact.css'

export default function Contact() {
  return (
    <div className='contact-wrapper'>
      <div className='contact-info'>
        <p>
          We're currently servicing pools in your area. The best pool service is just a phone call away. Give us a call Today!
        </p>
        <p>
          Now Serving: Los Angeles County, Orange County, Inland Empire
        </p>
      </div>
      <div className='contactInfo-contacts'>
        <div className='contactInfo-contacts-email'>
          <p className='contactInfo-contacts-title'>Send Us An Emaial</p>
          <p className='contactInfo-contacts-text'>info@californiapools.com</p>
        </div>
        <div className='contactInfo-contacts-office'>
          <p className='contactInfo-contacts-title'>Stop By Our Office</p>
          <p className='contactInfo-contacts-text'>123 Real St</p>
          <p className='contactInfo-contacts-text'>Whittier, CA 90603</p>
        </div>
        <div className='contactInfo-contacts-phone'>
          <p className='contactInfo-contacts-title'>Give Us A Call</p>
          <p className='contactInfo-contacts-text'>(800) 555-4561</p>
        </div>
      </div>
    </div>
  )
}
