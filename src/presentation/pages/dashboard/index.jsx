import React from 'react'

// Style import
import './style.scss'

// layouts page
import Topbar from './layout/topbar'
import Sidebar from './layout/sidebar'
import { Outlet } from 'react-router-dom'

/*
* @desc: Dashboard Page
*/
const DashboardPage = () => {
    return (
        <div className='dashboard-container container'>
            <div className="dash-sidebar-container">
                <Sidebar/>
            </div>

            <div className="dashboard-content">
                <div className="dashboard-top">
                    <Topbar/>
                </div>

                <Outlet/>
            </div>
        </div>
    )
}

export default DashboardPage
