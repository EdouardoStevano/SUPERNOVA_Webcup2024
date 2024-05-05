import React from 'react'
import { useNavigate } from 'react-router-dom';

import { identites } from 'data/datasource/faker/identities'; 

import './style.scss'
import { useState } from 'react';
import { toast } from 'react-toastify';

const Identity = () => {

  const [categoryFilter, setCategoryFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const navigate = useNavigate();

  const handleCategoryFilterChange = (category) => {
    setCategoryFilter(category);
  };

  const handleAutoDestructClick = () => {
    // Ouvrir le modal
    setShowModal(true);
    // Initialiser le compte à rebours
    setCountdown(40); // Décompte de 10 secondes
    // Démarrez le compte à rebours
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000); // Actualisez toutes les secondes

    // Après 10 secondes, effacez les données ou effectuez une autre action
    setTimeout(() => {
      // Effacez les données ou effectuez une autre action ici
      toast.info("Votre identité a été rayé de la carte")
      navigate('/');
      clearInterval(timer); // Arrêtez le compte à rebours
      setShowModal(false); // Fermez le modal
    }, 10000);
  };

  const filteredIdentities = categoryFilter
    ? identites.filter((identity) => identity.categorie === categoryFilter)
    : identites;


  return (
    <div className='identity-container swipe'>

       {/* Modal d'auto-destruction */}
       {showModal && (
        <div className="diana-modal">
          <div className="diana-modal-content">
            {/* <span className="close" onClick={() => setShowModal(false)}>&times;</span> */}
            <div className='destruction'>
              <h2>Auto-destruction en cours...</h2>
              <p>Les données seront détruites dans {countdown} secondes.</p>
              </div>
          </div>
        </div>
      )}

      <div className="card-identity">
        <h1>Gerer vos autres identités</h1>
        <p>Cette page vous permet de gérer et d'accéder à toutes les identités enregistrées dans notre système. Que ce soit des passeports, des cartes d'identité nationale (CIN), des cartes d'étudiant ou d'autres types d'identités, vous pouvez facilement les consulter, les mettre à jour ou en ajouter de nouvelles.</p>
      </div>

      <div className="filter">
        <div>
          <span>Catégorie:</span>
          <select onChange={(e) => handleCategoryFilterChange(e.target.value)}>
            <option value="">Tous</option>
            {/* Utilisez Set pour obtenir des catégories uniques */}
            {[...new Set(identites.map((identity) => identity.categorie))].map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="btn-group">
          <button type="submit">Demander</button>
          <button type="submit" className='auto-destruction' onClick={handleAutoDestructClick}>Auto-destruction</button>
        </div>

      </div>

      <div className="identity-list">
        {/* Afficher les identités filtrées */}
        {filteredIdentities.map((identity, index) => (
          <div className={`identity-card ${identity.image}`} key={index}>
            <img src={identity.image} alt={identity.nom} />
            <h2>{identity.nom}</h2>
            <p>{identity.categorie}</p>
            <p>{identity.numero}</p>
            {/* Afficher d'autres détails spécifiques en fonction de la catégorie */}
            {identity.categorie === 'CIN' && (
              <div>
                <p>Date de naissance: {identity.date_naissance}</p>
                <p>Adresse: {identity.adresse}</p>
                <p>Sexe: {identity.sexe}</p>
              </div>
            )}
            {identity.categorie === 'Carte d\'étudiant' && (
              <div>
                <p>Université: {identity.universite}</p>
                <p>Filière: {identity.filiere}</p>
                <p>Année: {identity.annee}</p>
              </div>
            )}
            {identity.categorie === 'passport' && (
              <div>
                <p>Nationalité: {identity.nationalite}</p>
                <p>Date d'expiration: {identity.date_expiration}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Identity