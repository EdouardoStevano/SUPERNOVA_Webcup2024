import React from 'react'

import { identites } from 'data/datasource/faker/identities'; 

import './style.scss'
import { useState } from 'react';

const Identity = () => {

  const [categoryFilter, setCategoryFilter] = useState('');

  const handleCategoryFilterChange = (category) => {
    setCategoryFilter(category);
  };

  const filteredIdentities = categoryFilter
    ? identites.filter((identity) => identity.categorie === categoryFilter)
    : identites;


  return (
    <div className='identity-container swipe'>
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


        <button type="submit">Demander</button>
      </div>

      <div className="identity-list">
        {/* Afficher les identités filtrées */}
        {filteredIdentities.map((identity, index) => (
          <div className={`identity-card ${identity.categorie}`} key={index}>
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