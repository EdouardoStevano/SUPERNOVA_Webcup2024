import React, { useState } from 'react';
import "./style.scss";
import { weaponData } from './dataWeapon';

const Inventory = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedGun, setSelectedGun] = useState(null);

  const weaponDatas = weaponData
  const dataCategorie = [
    {
      link : "/icon/axe.png"
    },
    {
      link : "/icon/cannon.png"
    },
    {
      link : "/icon/missil.png"
    },
    {
      link : "/icon/weapon.png"
    },
    {
      link : "/icon/weapon2.png"
    }
  ]



  const handleCategoryClick = (index) => {
    setActiveCategory(index);
  };

  const handleGunClick = (index) => {
    setSelectedGun(weaponDatas[index]);
  };

  return (
    <div className="inventory-container">
      <div className="info-inventor">
        <div className="webgl">
          <img src="/images/gun.webp" alt="" />
        </div>
        <div className="info-gun">
          <div className="title">
            <h1>Caracterisitque</h1>
          </div>
          <div className="caracteristique">
            {selectedGun && (
              <>
                <ContentCaracter name="Speed" value={selectedGun.speed} />
                <ContentCaracter name="Cadence" value={selectedGun.cadence} />
                <ContentCaracter name="Precision" value={selectedGun.precision} />
              </>
            )}
          </div>
        </div>
      </div>
      <div className="gun-container">
        <div className="categorie-container">
          {dataCategorie.map((data, index) => (
            <Categorie
              link={data.link}
              key={index}
              index={index}
              active={activeCategory === index}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
        <div className="gun-list">
          {weaponDatas.map((data, index) => (
            <Gun image={data.image} key={index} onClick={() => handleGunClick(index)} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Categorie({ link, index, active, onClick }) {
  return (
    <div
      className={`categorie ${active ? 'active' : ''}`}
      onClick={() => onClick(index)}
    >
      <img src={link} alt="" />
      {/* <p>Name</p> */}
    </div>
  )
}

function Gun({ image, onClick }) {
  return (
    <div className="gun" onClick={onClick}>
      <img src={image} alt="" />
    </div>
  )
}

function ContentCaracter({ name, value }) {
  const getColorValue = () => {
    if (value < 30) {
      return 'red';
    } else if (value < 70) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

  const valueStyle = {
    width: `${value}%`,
    backgroundColor: getColorValue(),
    borderRadius: '50px',
    height: '100%',
  };

  return (
    <>
      <p className='skill-name'>{name}</p>
      <div className="content-caracter">
        <div className="caracter-value" style={valueStyle}></div>
      </div>
    </>
  )
}

export default Inventory;
