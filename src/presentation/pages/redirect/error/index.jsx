import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Importer useParams depuis react-router-dom

// Style import
import './style.scss';


const ErrorComponent = () => {
    const { error } = useParams(); // Récupérer le paramètre d'erreur de l'URL
    const [errorDescription, setErrorDescription] = useState('');

    useEffect(() => {
        // Générer la description de l'erreur en fonction du paramètre
        let description = '';
        switch (error) {
            case '200':
                description = 'La requête a abouti avec succès.';
                break;
            case '204':
                description = 'La requête a abouti mais il n\'y a pas de contenu à renvoyer.';
                break;
            case '400':
                description = 'La requête est incorrecte ou mal formée.';
                break;
            case '401':
                description = 'L\'utilisateur n\'est pas authentifié pour accéder à la ressource.';
                break;
            case '403':
                description = 'L\'accès à la ressource est interdit.';
                break;
            case '404':
                description = 'La ressource demandée est introuvable.';
                break;
            case '500':
                description = 'Une erreur interne du serveur s\'est produite.';
                break;
            default:
                description = 'Une erreur inconnue s\'est produite.';
        }

        // Mettre à jour l'état de la description de l'erreur
        setErrorDescription(description);
    }, [error]); // S'assurer que la description est mise à jour lorsque le paramètre d'erreur change

    return (
        <div className='error-page-container'>
            <h1>Gestion des erreurs HTTP avec React</h1>
            {error && (
                <div>
                    <h2>{error}</h2>
                    <p>{errorDescription}</p>
                </div>
            )}
        </div>
    );
};

export default ErrorComponent;
