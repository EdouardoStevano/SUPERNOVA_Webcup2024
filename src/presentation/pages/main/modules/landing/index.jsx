import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

import './styles.scss'

import { Service } from './section/service'
import Banner from './section/bannerSection'
import { Instruction } from './section/instruction'
import Layout from '../../layouts/nav2/layout'
import Band from 'presentation/components/component/band/band';
import SliderScroll from 'presentation/components/component/sliderScroll/ScrollSlider';
import About from './section/about/presentation';
import Partener from './section/partener';


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
      <About />
      <SliderScroll />
      {/* <Partener /> */}
      {/* <Service /> */}
      {/* <Instruction /> */}
    </div>
  )
}

export default LandingPage