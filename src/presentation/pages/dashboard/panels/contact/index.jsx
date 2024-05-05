import React, { useState } from 'react';
import "./style.scss";
import { contact } from 'data/datasource/faker/contact'; // Importez la liste de contacts
import { toast } from 'react-toastify';

const Contact = () => {
  // State pour gérer le filtre de catégorie
  const [categoryFilter, setCategoryFilter] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [contacts, setContacts] = useState(contact); 
  const [newContact, setNewContact] = useState({
    nom: '',
    phone: '',
    type: 'Indique', // Valeur par défaut
  });
  
  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifiez si tous les champs sont remplis
    if (newContact.nom && newContact.phone && newContact.type) {
      const newContactWithId = { ...newContact, id: contacts.length + 1 };
      setContacts([...contacts, newContactWithId]);
      setNewContact({ nom: '', phone: '', type: 'Indique' });
      closeModal();
    } else {
      // Affichez un message d'erreur si tous les champs ne sont pas remplis
      toast.info("Veuillez remplir tous les champs");
    }
  };

  // Fonction pour ouvrir le modal
  const openModal = () => {
    setShowModal(true);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setShowModal(false);
  };

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
    <div className='dash-contact-container swipe'>

      {/* Modal d'ajout de contact */}
      {showModal && (
        <div className="diana-modal">
          <div className="diana-modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Ajouter un nouveau contact</h2>
            {/* Formulaire d'ajout de contact */}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nom">Nom:</label>
                <input type="text" id="nom" value={newContact.nom} onChange={(e) => setNewContact({...newContact, nom: e.target.value})} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Téléphone:</label>
                <input type="text" id="phone" value={newContact.phone} onChange={(e) => setNewContact({...newContact, phone: e.target.value})} required />
              </div>
              <div className="form-group">
                <label htmlFor="type">Type:</label>
                <select id="type" value={newContact.type} onChange={(e) => setNewContact({...newContact, type: e.target.value})}>
                  <option value="Indique">Indique</option>
                  <option value="Fournisseur d'armes">Fournisseur d'armes</option>
                  <option value="Gouvernement">Gouvernement</option>
                  <option value="Agence">Agence</option>
                </select>
              </div>
              <button type="submit">Ajouter</button>
            </form>
          </div>
        </div>
      )}

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

        <button className='add-contact' onClick={openModal}>Ajouter</button>
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
