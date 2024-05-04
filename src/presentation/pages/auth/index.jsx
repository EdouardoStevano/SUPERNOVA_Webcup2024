import React from 'react'
import { Outlet } from 'react-router-dom'

// Style import
import './style.scss'

// Components import
import AuthHeader from './layouts/auth-header/authHeader'
import AuthFooter from './layouts/auth-footer/authFooter'


/*
* @desc: Authentification page
*/
const AuthPage = () => {
    return (
        <div className='auth-container container'>
            <div className="auth-content">
            <AuthHeader />
                <Outlet />
            <AuthFooter />
        </div>
        </div>
    )
}

export default AuthPage