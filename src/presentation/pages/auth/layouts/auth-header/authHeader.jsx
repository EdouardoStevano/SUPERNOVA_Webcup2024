import React, { useState as state} from 'react'
import { Link } from 'react-router-dom'

// styles importation
import './authHeader.scss'

// assets importation
import Logo from 'presentation/assets/image/spyctre/Logo192.png'

function authHeader() {
  return (
    <div className='authHeader-container'>
        {/* <img src={Logo} alt="Spyctre Logo" /> */}
        <Link to={'/main'} className='authBack-btn'>retour</Link>
        <Link to={'/auth/faciale'} className='authBack-btn'>Par reconnaissance faciale</Link>
    </div>
  )
}

export default authHeader