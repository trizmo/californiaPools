import React from 'react'

// CSS
import './basicInfo.css'

export default function BasicInfo() {
  return (
    <div className='basicInfo-wrapper' id="company">
      <div className='basicInfo-content'>

        <div className='basicInfo-content-text'>
          <h1>Our Company</h1>
          <p>
            California Pools has been servicing southern California customers for nearly 20 years. We serve Los Angeles County, Orange County, and Inland Empire. Our family base company can make sure your pool is serviced, your chemicals are balanced, and your equipment is running optimally. If you're looking to upgrade equipment or take your pool to the next level, we will be the prime choice.
          </p>
        </div>

        <div className="basicInfo-content-image">
          <h1>Family Owned</h1>
        </div>

      </div>
    </div>
  )
}
