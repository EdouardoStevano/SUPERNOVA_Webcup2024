import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { t } from 'presentation/utils/translation/i18nHelper'

// Style importation
import './style.scss';

// Components importation
// import LanguagesSelector from 'presentation/components/component/languagesSelection/langSelection';
import Modal from "presentation/components/component/modal/myModalLarge"
import SwitchMode from 'presentation/components/component/switchMode/switchMode';

// Assests importation
import LogoIcon from 'presentation/assets/image/spyctre/Logo192.png';

function Navbar() {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [appIcon, setAppIcon] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [menuVisible, setMenuVisible] = useState(false);
  const [isChecked, setIsChecked] = useState('');
  const [isFixed, setIsFixed] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [siriusModal, setSiriusModal] = useState(false);


  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

   const openSiriusModal = () => {
    setSiriusModal(true);
  };

  const closeSiriusModal = () => {
    setSiriusModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsFixed(scrollPosition > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const switchMode = () => {
    if (localStorage.getItem('SiriusMode') === "true") {
      localStorage.setItem('supermode', "false");
      document.body.classList.remove('darkTheme');
      setIsThemeDark(false);
      setIsChecked(null);
      setAppIcon('usericon');
    } else {
      localStorage.setItem('supermode', "true");
      document.body.classList.add('darkTheme');
      setIsThemeDark(true);
      setIsChecked('true');
      setAppIcon('moon_icon');
    }
  };

  return (
    <div className={isFixed ? 'navbar-container fixed-nav' : 'navbar-container'}>
      <nav className="navbar">
        <div className='left-navbar'>
          <div className="logo" onClick={() => openSiriusModal()}>
            <img src={LogoIcon} alt="logo" className='marge-right-px10'/>
            <span>Spyctre.</span>
          </div>
          <div className={`menu ${menuVisible ? 'active' : ''}`}>
            <div className='menu-content'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="exit-menu w-6 h-6" onClick={toggleMenu}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div className='btn' onClick={toggleMenu}><a href="#banner" className='menu-btn' onClick={toggleMenu}>{t('navbar.home')}</a></div>
              <div className='btn' onClick={toggleMenu}><a href="#about" className='menu-btn'>{t('navbar.about')}</a></div>
              <div className='btn' onClick={toggleMenu}><a href="#solution" className='menu-btn' onClick={toggleMenu}>{t('navbar.solution')}</a></div>
              <div className='btn' onClick={toggleMenu}><a href="#school" className='menu-btn'>{t('navbar.school')}</a></div>            
              <div className='btn' onClick={toggleMenu}><a href="#contact" className='menu-btn'>{t('navbar.contact')}</a></div>
              <div className="btn-connet-mobile">
                <Link to={'/auth'} className="login-button">{t('navbar.signIn')}</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons">
          <Link to={'/auth'} className="login-button">{t('navbar.signIn')}</Link>
          <div className="mode-btn">
            <SwitchMode  />
            {/* <LanguagesSelector /> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="menu-button w-6 h-6" onClick={toggleMenu}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

