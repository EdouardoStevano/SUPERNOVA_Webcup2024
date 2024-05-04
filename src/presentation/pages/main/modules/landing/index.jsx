import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

import { Service } from './section/service'
import { Instruction } from './section/instruction'
import Layout from '../../layouts/nav2/layout'

const LandingPage = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: 'ease',
      offset: 100
    })
  },[])
  return (
    <div>
      <Service />
      <Instruction />
    </div>
  )
}

export default LandingPage