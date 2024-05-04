import React, { useState } from 'react';
import hoverSound from 'presentation/assets/audio/clicked.wav';
import clickSound from 'presentation/assets/audio/clicked.wav';

// Style import 
import './buttonSound.scss';

// Components import 
import MyModal from '../../../component/modal/myModal';


const FuturisticComponent = () => {
        const [hovered, setHovered] = useState(false);
        const [showSmallModal, setShowSmallModal] = useState(false);

        
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
            openSmallModal()
            playClickSound();
        };
    
        return (
            <>
            
                <MyModal isOpen={showSmallModal} onClose={closeSmallModal}>
                    <p>Contenu de la modal standard...</p>
                </MyModal>

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
