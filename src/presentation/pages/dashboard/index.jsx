import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Speak from "presentation/hooks/useSpeak";

// Style import
import './style.scss'

// layouts page
import Topbar from './layout/topbar'
import Sidebar from './layout/sidebar'

/*
* @desc: Dashboard Page
*/
const DashboardPage = () => {

    const [userInfo, setUserInfo] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Vérifier si 'newconnect' est défini sur true dans le stockage local
        const isNewConnect = localStorage.getItem('newconnect') === 'true';
        if (isNewConnect) {
            // Speak(
            //     "Bienvenue sur notre plateforme ! Je m'appelle Nebulah, Si vous avez des questions ou besoin d'aide, n'hésitez pas à me les demander. Je suis  là pour vous aider à chaque étape de votre missions."
            // );        
            // Si 'newconnect' est true, afficher le modal
            setShowModal(true);
        }

        const storedUserInfo = localStorage.getItem('config');
        if (storedUserInfo) {
            const parsedUserInfo = JSON.parse(storedUserInfo);
            setUserInfo(parsedUserInfo);
        }
    }, []);

 
    const closeModal = () => {
        // Fermer le modal et définir 'newconnect' à false dans le stockage local
        setShowModal(false);
        localStorage.setItem('newconnect', 'false');
    };

    return (
        <div className="dashboard-main">
     
            {/* Afficher le modal s'il est défini sur true */}
            {showModal && (
                <div className="diana-modal">
                    <div className="diana-modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className="content-ct">
                            <div className="left-content">
                                <div class="demo">
                                    <div class="blur-loader">
                                        <span class="blur-loader__dot"></span>
                                        <span class="blur-loader__dot"></span>
                                        <span class="blur-loader__dot"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="right-content">
                                <h1>
                                    <span className="typewriter">Bonjour à vous {userInfo.nom}</span>
                                </h1>
                                <p>
                                    <span>Bienvenue sur notre plateforme ! Je m'appelle Nebula, Si vous avez des questions ou besoin d'aide, n'hésitez pas à me les demander. Je suis  là pour vous aider à chaque étape de votre missions.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            <div className='dashboard-container container'>
                <div className="dash-sidebar-container">
                    <Sidebar/>
                </div>

                <div className="dashboard-content">
                    <div className="dashboard-top">
                        <Topbar/>
                    </div>

                    <div className="dashboard-outlet">
                        <Outlet/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashboardPage
