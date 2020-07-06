import React from 'react'
import TheCarousel from '../../root/carousel/Carousel';
import BasicInfo from '../../root/basicInfo/BasicInfo';
import OurServices from '../../root/ourServices/OurServices';
import Contact from '../../root/contact/Contact';

export default function RootWrapper() {
  return (
    <div>
      <TheCarousel />
      <BasicInfo />
      <OurServices />
      <Contact />
    </div>
  )
}
