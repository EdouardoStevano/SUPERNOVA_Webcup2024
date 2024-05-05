import React, { useState } from 'react';
import "./style.scss";
import { contact } from 'data/datasource/faker/contact'; // Importez la liste de contacts
import { toast } from 'react-toastify';

const Contact = () => {
  // State pour gérer le filtre de catégorie
  const [categoryFilter, setCategoryFilter] = useState('');

  // Fonction de gestion du changement de filtre de catégorie
  const handleCategoryFilterChange = (category) => {
    setCategoryFilter(category);
  };

  // Filtrer les contacts en fonction de la catégorie sélectionnée
  const filteredContacts = categoryFilter
    ? contact.filter((contact) => contact.type === categoryFilter)
    : contact;

    
    const handleSendSOS = () => {
      // Afficher la notification que l'SOS va être envoyé
      toast.info("SOS sera envoyé dans 10 secondes...", { autoClose: 10000 });
    
      // Créer une promesse pour simuler l'envoi de SOS pendant 10 secondes
      const sendSOS = new Promise((resolve) => {
        setTimeout(() => {
          // Afficher la notification que l'SOS a été envoyé avec succès
          toast.success("SOS envoyé avec succès !");
          resolve(); // Résoudre la promesse après 10 secondes
        }, 10000);
      });
    
      return sendSOS;
    };

  return (
    <div className='dash-contact-container'>
      <div className="dash-contact-top">
        <div className="filter">
          <span>Catégorie:</span>
          <select onChange={(e) => handleCategoryFilterChange(e.target.value)}>
            <option value="">Tous</option>
            {/* Utilisez Set pour obtenir des catégories uniques */}
            {[...new Set(contact.map((contact) => contact.type))].map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <button className='add-contact'>Ajouter</button>
      </div>

      <div className="dash-contact-list">
        {/* Afficher les contacts filtrés */}
        {filteredContacts.map((contact, index) => (
          <div className="card-contact" key={index}>
            <h2>Nom: {contact.nom}</h2>
            <p>Téléphone: {contact.phone}</p>
            <p>Type: {contact.type}</p>
            {contact.niveau_confiance && <p className='confiance'>Niveau de confiance: {contact.niveau_confiance}</p>}

            <div className="btn-contact-group">
              <a href='tel:{contact.phone}'>Contacter</a>
              <button onClick={handleSendSOS}>SOS</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
