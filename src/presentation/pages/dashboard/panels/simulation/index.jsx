import React from 'react'

import "./style.scss"
import { useState } from 'react';

const Simulation = () => {

  const [formData, setFormData] = useState({
    missionName: '',
    targetName: '',
    missionType: 'Infiltration',
    successRate: '',
    suggestion: '',
    terrainSize: '',
    weather: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuer les calculs ou le traitement nécessaire pour obtenir le pourcentage de réussite et la suggestion
    const successRate = Math.random() * 100; // Calcul du pourcentage de réussite simulé
    const suggestion = successRate > 50 ? 'Mission réussie' : 'Mission risquée'; // Suggestion basée sur le pourcentage de réussite
    setFormData({ ...formData, successRate, suggestion });
  };

  return (
    <div className='simulation-container'>

      <div className='simulation-left'>
        <h1>Simulation</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reprehenderit exercitationem quo alias? Ab animi, repellendus, incidunt unde vel culpa sunt necessitatibus aperiam sit similique eum obcaecati saepe aut tempora!</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="missionName">Nom de la mission:</label>
            <input type="text" id="missionName" name="missionName" value={formData.missionName} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="targetName">Nombres de cibles:</label>
            <input type="number" id="targetName" name="targetName" value={formData.targetName} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="missionType">Type de mission:</label>
            <select id="missionType" name="missionType" value={formData.missionType} onChange={handleChange}>
              <option value="Infiltration">Infiltration</option>
              <option value="Récupération">Récupération</option>
              <option value="Élimination">Élimination</option>
              <option value="Surveillance">Surveillance</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="terrainSize">Superficie du terrain:</label>
            <input type="number" id="terrainSize" name="terrainSize" value={formData.terrainSize} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label htmlFor="weather">Météo:</label>
            <input type="text" id="weather" name="weather" value={formData.weather} onChange={handleChange} required/>
          </div>
          <button type="submit" className='btn-simuler'>Simuler</button>
        </form>
      </div>

      <div className='simulation-right'>


        <div className="left-content">
          <div class="demo">
            <div class="blur-loader">
              <span class="blur-loader__dot"></span>
                    <span class="blur-loader__dot"></span>
                    <span class="blur-loader__dot"></span>
                  </div>
              </div>
            </div>

            
      <div className="results">
          <h2>Résultats</h2>
          <p>Mission: {formData.missionName}</p>
          <p>Cible: {formData.targetName}</p>
          <p>Type de mission: {formData.missionType}</p>
          <p>Taux de réussite: {formData.successRate ? `${formData.successRate.toFixed(2)}%` : ''}</p>
          <p>Suggestion: {formData.suggestion}</p>
          <p>Superficie du terrain: {formData.terrainSize}</p>
          <p>Météo: {formData.weather}</p>
        </div>
      </div>

    </div>
  )
}

export default Simulation