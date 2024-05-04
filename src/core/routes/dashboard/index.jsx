import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';

// Pages import 
const DashboardPage = lazy(() => import('presentation/pages/dashboard'));
// Content import 
const DashboardHome = lazy(() => import('presentation/pages/dashboard/panels/home'));
const DashboardSettings = lazy(() => import('presentation/pages/dashboard/panels/settings'));

const DashboardRoutes = () => {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardPage/>}>
                <Route index element={<DashboardHome />} />
                <Route path='home' element={<DashboardHome />} />
                <Route path='settings' element={<DashboardSettings />} />
            </Route>
        </Routes>
    )
}

export default DashboardRoutes
