import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

// Pages import 
const MainPage = lazy(() => import('presentation/pages/main'));
const IntroPage = lazy(() => import('presentation/pages/main/intro-main'));

// Content import 
const Landing = lazy(() => import('presentation/pages/main/modules/landing'));


const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<IntroPage/>} />
            <Route path="/main" element={<MainPage/>}>
                <Route index element={<Landing />} />
                <Route path='home' element={<Landing />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes
