import React, { useState, useEffect } from "react";
import { t } from 'presentation/utils/translation/i18nHelper'

// Style importaion
import "./style.scss";

// Assets Importation
import PlayIcon from "presentation/assets/icons/icons8_play_120px.png";
import float3d from "presentation/assets/image/illustration/3DFloatRound.png";
// import roundArrow from "presentation/assets/image/illustration/roundArrow.png";
import botSolution from "presentation/assets/image/illustration/RobotSolution.png";
import epicRound from "presentation/assets/image/illustration/EpicRound1.png";

function Banner() {
  return (
    <div className='supernova-container banner'>
        <div className="supernova-content" id='banner'>
          <div className="title-content">
            <div
              style={{
                width: '100px',
                height: '100px',
                position: 'absolute',
                top: '-10%',
                right: '-0%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="roundText">
                <img src={PlayIcon} alt="play Icon" width={'30px'}/>
                </div>
            </div>
            <p>{t('banner.lTitle')}</p>
            <h1><span className='banner-title1'>{t('banner.bTitle1')}</span> <span className='banner-round1'><img src={float3d} alt="play Icon"/></span> <span className='banner-title2'> {t('banner.bTitle2')} <img src={epicRound} alt="play Icon" width={'55px'} className='epicRound'/>, {t('banner.bTitle3')}</span> <span className='banner-round2'><img src={botSolution} alt="play Icon" width={'90px'} /></span>  <span className='banner-title3'> {t('banner.bTitle4')}.</span></h1>
            <div className="banner-btn">
            </div>
          <div className="banner-btn">
          </div>
        </div>

        <div className="banner-description">
          <a href="#about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="scroll-down w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
              
          <p>
          {t('banner.sTitle')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;