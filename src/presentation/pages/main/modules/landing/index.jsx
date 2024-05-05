import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

import './styles.scss'

import { Service } from './section/service'
import Banner from './section/bannerSection'
import { Instruction } from './section/instruction'
import Layout from '../../layouts/nav2/layout'
import Band from 'presentation/components/component/band/band';

const LandingPage = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: 'ease',
      offset: 100
    })
  },[])
  return (
    <div className='landing-container'>
      <Banner />
      <Band />
      <Service />
      {/* <Instruction /> */}
    </div>
  )
}

export default LandingPage