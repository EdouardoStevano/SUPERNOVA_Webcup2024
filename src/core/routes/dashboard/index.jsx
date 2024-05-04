import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';

// Pages import 
const DashboardPage = lazy(() => import('presentation/pages/dashboard'));
// Content import 
const DashboardHome = lazy(() => import('presentation/pages/dashboard/panels/home'));
const DashboardSettings = lazy(() => import('presentation/pages/dashboard/panels/settings'));
const DashboardMission = lazy(() => import('presentation/pages/dashboard/panels/missions'));
const DashboardInventory = lazy(() => import('presentation/pages/dashboard/panels/invetory'));
const DashboardContact = lazy(() => import('presentation/pages/dashboard/panels/contact'));
const DashboardIdentity = lazy(() => import('presentation/pages/dashboard/panels/identity'));
const DashboardSimulation = lazy(() => import('presentation/pages/dashboard/panels/simulation'));


const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardPage/>}>
                <Route index element={<DashboardHome />} />
                <Route path='home' element={<DashboardHome />} />
                <Route path='mission' element={<DashboardMission />} />
                <Route path='identity' element={<DashboardIdentity />} />
                <Route path='invetory' element={<DashboardInventory />} />
                <Route path='contact' element={<DashboardContact />} />
                <Route path='simmulation' element={<DashboardSimulation />} />
                <Route path='settings' element={<DashboardSettings />} />
            </Route>
        </Routes>
    )
}

export default DashboardRoutes
