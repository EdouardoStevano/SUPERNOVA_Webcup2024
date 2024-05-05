import React, { useEffect, useRef, useState } from 'react';
import './style.scss';

import runAnimation from "presentation/utils/animation/binaryanimation"

// Assets import
import LogoSpyctre from "presentation/assets/image/spyctre/Logo192.png";
import ImageIntro from "presentation/assets/image/branding/Intro_Image.png";

// Components import 
import ButtonSound from "../../components/ui/button/buttonSound/buttonSound";

const IntroPage = () => {

    
        return (
        <div className="intro-page-container">
            <div className="intro-page">
                <div className="intro-content"> 
                    <div className="head">
                        <img src={LogoSpyctre} alt="logo Spyctre" width={"70px"}/>
                    </div>

                    <div className="middle">
                        <h1 className="intro-title">Bienvenue sur Spyctre</h1>
                        <p className="intro-subtitle">Plongez dans une expérience immersive avec des écouteurs</p>
                        <p className="intro-text">
                        Bienvenue sur Spyctre ! Nous sommes ravis de vous accueillir dans notre univers clandestin en ligne. Avant de commencer à explorer nos missions confidentielles, nous aimerions vous inviter à utiliser des écouteurs pour une immersion totale dans le monde de l'espionnage.
                        </p>

                        <p className="intro-text last">
                        Les écouteurs ne sont pas seulement un accessoire, ils sont l'outil indispensable pour percevoir chaque détail, chaque son crucial dans votre mission d'agent double. Que ce soit pour écouter des instructions cryptées, des messages codés ou des informations vitales, des écouteurs de qualité sont essentiels pour rester discret et efficace.
                        </p>

                        <ButtonSound/>
                    </div> 

                    <div className="intro-footer">
                        <small>copyright &copy; 2024 Supernova, Webcup 2024</small>
                    </div> 
                    
                </div>

                <div className="image">
                    <img src={ImageIntro} alt="Image Intro" />
                </div>
            </div>
        </div>
        );
}

export default IntroPage;
