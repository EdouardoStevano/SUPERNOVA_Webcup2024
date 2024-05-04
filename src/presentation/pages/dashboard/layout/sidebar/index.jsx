import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

// Importation du style
import './style.scss'

// Importation de ressources
// import HomeIcon from '../../../../assets/image/icon/png/fold.png'

function Sidebar() {
    return (
        <div className={"sidebar-content"}>
            <div className="top">
                <div className="logo">
                    Logo
                    {/* <img src={siriusLogo} alt="application logo" width={'50px'}/> */}
                    {/* <span>{config.projectName}</span> */}
                </div>

                <div className="menu">
                <h5>Menu principale</h5>
                <NavLink to={'home'} className="menu-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span>Accueil</span>
                </NavLink>

                <NavLink to={'home'} className="menu-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span>Missions</span>
                </NavLink>

                <NavLink to={'home'} className="menu-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span>Identités</span>
                </NavLink>

                <NavLink to={'home'} className="menu-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span>Inventaire</span>
                </NavLink>

                <NavLink to={'home'} className="menu-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span>Inventaire</span>
                </NavLink>
        {/* 
                <NavLink to={'quizz'} className="menu-btn">
                <img src={WebIcon} alt="home icon" width={'25px'}/>
                <span>Quizz</span>
                </NavLink>

                <NavLink to={'service'}  className="menu-btn">
                <img src={locationIcon} alt="home icon" width={'25px'}/>
                <span>Accueil</span>
                </NavLink>

                <NavLink to={'messages'}  className="menu-btn">
                <img src={MessageIcon} alt="home icon" width={'25px'}/>
                <span>Message</span>
                </NavLink> */}

                <h5>Paramètres</h5>

                {/* <NavLink to={'service'}  className="menu-btn">
                <img src={HomeIcon} alt="home icon" width={'25px'}/>
                <span>Paramètres</span>
                </NavLink>

                <NavLink to={'service'} className="menu-btn">
                <img src={HomeIcon} alt="home icon" width={'25px'}/>
                <span>Profile</span>
                </NavLink>*/}
                </div> 
            </div>

            <div className="bottom">
                <div className="menu-btn deconnet">
                    <Link to={'/'} onclick={()=>toast.error('Vous vous êtes deconnecté.')}>Deconnexion</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar