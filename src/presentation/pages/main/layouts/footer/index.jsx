// Footer.js
import React from 'react';
import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-link-group">
            <h3>Spyctre</h3>
            <p>La plateforme en ligne ultime pour les agents double zéros. Notre site offre un accès exclusif à un réseau mondial de missions d'espionnage hautement confidentielles, conçues pour les agents les plus habiles et les plus discrets.</p>
          </div>
          <div className="footer-link-group">
            <h3>Raccourcis</h3>
            <ul>
              <li><a href="/#about">Accueil</a></li>
              <li><a href="/#about">À Propos</a></li>
              <li><a href="/#blog">Blog</a></li>
              <li><a href="/#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-link-group">
            <h3>Mention Légale</h3>
            <ul>
              <li><a href="/#privacy-policy">Politique de Confidentialité</a></li>
              <li><a href="/#terms-of-service">Conditions d'Utilisation</a></li>
            </ul>
          </div>
          <div className="footer-link-group">
            <h3>Partenaires</h3>
            <ul>
              <li><a href="/partners">Nos Partenaires</a></li>
            <h3>Recrutement</h3>
              <li><a href="/sponsorship">Devenir agent doubles</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>copyright &copy; 2024 Supernova</p>
          <a href={"https://24h.webcup.fr/"} target='_blank'>Webcup 2024</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
