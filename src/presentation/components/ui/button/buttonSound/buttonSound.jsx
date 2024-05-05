import React, { useState } from 'react';
import hoverSound from 'presentation/assets/audio/clicked.wav';
import clickSound from 'presentation/assets/audio/clicked.wav';
import { useNavigate } from 'react-router-dom';

// Style import 
import './buttonSound.scss';

// Components import 
import MyModal from '../../../component/modal/myModal';


const FuturisticComponent = () => {
        const [hovered, setHovered] = useState(false);
        const [showSmallModal, setShowSmallModal] = useState(false);
        const [isPlaying, setIsPlaying] = useState(false);
        const nav = useNavigate();
        
        // For small modal
        const openSmallModal = () => {
            setShowSmallModal(true);
        };

        const closeSmallModal = () => {
            setShowSmallModal(false);
        };

    
        const playHoverSound = () => {
            const hoverAudio = new Audio(hoverSound);
            hoverAudio.play().catch(error => {
                console.error('Erreur lors de la lecture du son de survol :', error);
            });
        };
    
        const playClickSound = () => {
            const clickAudio = new Audio(clickSound);
            clickAudio.play().catch(error => {
                console.error('Erreur lors de la lecture du son de clic :', error);
            });
        };

        const handleClick = () => {
            const audioElement = document.getElementById('audio');
            if (isPlaying) {
            audioElement.pause();
            } else {
            audioElement.play();
            }
            setIsPlaying(!isPlaying);
            openSmallModal()
            nav('/main');
            playClickSound();
        };
    
        return (
            <>

                <div
                    onMouseEnter={() => {
                    setHovered(true);
                    playHoverSound();
                    }}
                    onMouseLeave={() => setHovered(false)}
                    onClick={handleClick}
                    className="futuristic-component"
                >
                    Explorer
                </div>
            </>
        );
    };

export default FuturisticComponent;
