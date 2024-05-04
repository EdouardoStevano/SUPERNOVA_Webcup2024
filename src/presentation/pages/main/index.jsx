import React from 'react'

// Style import
import './style.scss'

// layouts page
import Footer from './layouts/footer'
import Navbar from './layouts/navbar'

/*
* @desc: Main Page  
*/
const MainPage = () => {
    return (
        <div className='main-container container'>
            <Navbar/>
            <div className="main-content main-test">
                Test
            </div>
            <Footer/>
        </div>
    )
}

export default MainPage