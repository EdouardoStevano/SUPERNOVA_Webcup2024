import React from 'react';

// import {PartenerInfo} from 'data/constants/dataList'

import "./style.scss"

import Image from "../../../../../../assets/image/branding/partner/webcup.png"

const PartenerInfo = {
    "event": "TEAM",
    "partener": [
		{
			"name": "Webcup Association",
			"profileImage": "../../../../../../assets/image/branding/partner/webcup.png",
			"link": "https://www.webcup.fr/"
		},
		{
			"name": "Avana Hub",
			"profileImage": "../../presentation/assets/image/branding/partner/avanahub.png",
			"link": "https://www.linkedin.com/company/avana-hub/?trk=similar-pages"
		},
		{
			"name": "Bocasay",
			"profileImage": "../../presentation/assets/image/branding/partner/bocasay.png",
			"link": "https://www.bocasay.com/fr/madagascar-fr/"
		},
		{
			"name": "Full Digit",
			"profileImage": "../../presentation/assets/image/branding/partner/fulldigit.png",
			"link": "https://www.fulldigits.com/"
		},
		{
			"name": "Hodi-Balance",
			"profileImage": "../../presentation/assets/image/branding/partner/hodi-blance.png",
			"link": "https://hodi.host/re/"
		},
		{
			"name": "Inclusiv academy",
			"profileImage": "../../presentation/assets/image/branding/partner/ia.png",
			"link": "https://www.fulldigits.com/"
		},
		{
			"name": "Ibonia",
			"profileImage": "../../presentation/assets/image/branding/partner/ibonia.png",
			"link": "https://www.ibonia.com/"
		},
		{
			"name": "Ingenosia",
			"profileImage": "../../presentation/assets/image/branding/partner/ingenosya.png",
			"link": "https://www.ingenosya.com/"
		},
		{
			"name": "MNDPT",
			"profileImage": "../../presentation/assets/image/branding/partner/mndpt.png",
			"link": "https://www.mndpt.gov.mg/"
		},
		{
			"name": "Nexources",
			"profileImage": "../../presentation/assets/image/branding/partner/nexources.png",
			"link": "https://www.nexources.com/"
		},
		{
			"name": "NextA",
			"profileImage": "../../presentation/assets/image/branding/partner/nexta.png",
			"link": "https://www.nexta.mg/"
		},
		{
			"name": "Novity",
			"profileImage": "../../presentation/assets/image/branding/partner/novity.png",
			"link": "https://web.facebook.com/NovityMadagascar/?_rdc=1&_rdr"
		},
		{
			"name": "p4h",
			"profileImage": "../../presentation/assets/image/branding/partner/p4h.png",
			"link": "https://www.passion4humanity.com/"
		},
		{
			"name": "Pulse",
			"profileImage": "../../presentation/assets/image/branding/partner/pulse.png",
			"link": "https://www.pulse.mg/"
		},
		{
			"name": "RiseTafa",
			"profileImage": "../../presentation/assets/image/branding/partner/RiseTafa.png",
			"link": "#"
		},
		{
			"name": "Studio Kalanoor",
			"profileImage": "../../presentation/assets/image/branding/partner/StudioKalanoor.png",
			"link": "https://www.studiokalanoor.com/"
		},
	]
}

const PartnerCard = ({ name, profileImage, link }) => (
  <div className="partner-card">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={} alt={name} />
      <h3>{name}</h3>
    </a>
  </div>
);

const PartnerSection = () => (
  <div className="partner-section">
    {PartenerInfo.partener.map((partner, index) => (
      <PartnerCard
        key={index}
        name={partner.name}
        link={partner.link}
      />
    ))}
  </div>
);

export default PartnerSection;
