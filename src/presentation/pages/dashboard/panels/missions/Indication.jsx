import React, { useEffect, useState } from "react";
import Country from "./Lieu.json";

function Indication(props) {

  const Zoom = (e) => {
    e.preventDefault();
    // alert("zoom")
	props.isZooming(true);
    // console.log(document.getElementById(e.target.id).classList[1]);
  };

  const Detail = (e, id) => {
	// e.preventDefault();
	// alert("voir detail");
	
	findPlace(id)

  }

  function findPlace(id){
    for (let i = 0; i < Country.length; i++) {
        if(id == Country[i].country_id){
            props.information(Country[i].data);
            break;
        }
    }
  }

  



  return (
    <>
    <>
  {/*?xml version="1.0" encoding="utf-8"?*/}
  {/* Generator: Adobe Illustrator 28.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
  <svg
    version="1.1"
    id="Calque_2"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1894.7 2401.5"
    style={{ enableBackground: "new 0 0 692.7 1355.6", height: "90vh", position: "relative"}}
    xmlSpace="preserve"
  >
    <style
      type="text/css"
      dangerouslySetInnerHTML={{
        __html:
          "\n\t.indication{fill:#d85dc1;stroke:#FFFFFF;stroke-miterlimit:10;}\n\t.st1{fill:none;}\n\t.st2{fill:#FFFFFF; cursor:pointer}\n\t.st3{}\n\t.st4{font-size:60px;}\n\t.indication{fill:#d85dc1;}\n\t .indication:hover{fill:#4EC95A;}\n\t .st2:hover  .indication{fill:#4EC95A;}\n"
      }}
    />
    <path
      className="indication"
      d="M804.8,262.6H395.1c-15.5,0-28-12.5-28-28V186c0-15.5,12.5-28,28-28h409.7c15.5,0,28,12.5,28,28v48.6
	C832.8,250.1,820.2,262.6,804.8,262.6z"
    />
    <rect x="409.5" y="166.1" className="st1" width={381} height="88.4" />
    <text transform="matrix(1 0 0 1 441.7227 232.1631)" className="st2 st3 st4" onClick={Zoom} onMouseEnter={(e) => Detail(e,1)}>
      Seychelles
    </text>
    <path
      className="indication"
      d="M1403.8,613.7H994.1c-15.5,0-28-12.5-28-28v-48.6c0-15.5,12.5-28,28-28h409.7c15.5,0,28,12.5,28,28v48.6
	C1431.8,601.2,1419.2,613.7,1403.8,613.7z"
    />
    <rect x="1008.4" y="517.2" className="st1" width={381} height="88.4" />
    <text transform="matrix(1 0 0 1 1081.0614 583.249)" className="st2 st3 st4" onClick={Zoom} onMouseEnter={(e) => Detail(e,2)}>
      Maurice
    </text >
    <path
      className="indication"
      d="M494.6,480.8H84.9c-15.5,0-28-12.5-28-28v-48.6c0-15.5,12.5-28,28-28h409.7c15.5,0,28,12.5,28,28v48.6
	C522.6,468.3,510,480.8,494.6,480.8z"
    />
    <rect x="99.2" y="384.3" className="st1" width={381} height="88.4" />
    <text transform="matrix(1 0 0 1 157.5143 450.3536)" className="st2 st3 st4" onClick={Zoom} onMouseEnter={(e) => Detail(e,3)}>
      Comores
    </text>
    <path
      className="indication"
      d="M718.4,867.8H308.7c-15.5,0-28-12.5-28-28v-48.6c0-15.5,12.5-28,28-28h409.7c15.5,0,28,12.5,28,28v48.6
	C746.4,855.3,733.9,867.8,718.4,867.8z"
    />
    <rect x="323.1" y="771.3" className="st1" width={381} height="88.4" />
    <text transform="matrix(1 0 0 1 381.0345 837.3184)" className="st2 st3 st4" onClick={Zoom} onMouseEnter={(e) => Detail(e,4)}>
      Mayottes
    </text>
    <path
      className="indication"
      d="M667.2,1829.7H257.5c-15.5,0-28-12.5-28-28v-48.6c0-15.5,12.5-28,28-28h409.7c15.5,0,28,12.5,28,28v48.6
	C695.2,1817.2,682.6,1829.7,667.2,1829.7z"
    />
    <rect x="271.8" y="1733.2" className="st1" width={381} height="88.4" />
    <text
      transform="matrix(1 0 0 1 281.3057 1799.2375)"
      className="st2 st3 st4"
	  onClick={Zoom} onMouseEnter={(e) => Detail(e,5)}
    >
      Madagascar
    </text>
    <g>
      <line className="st2" x1="807.8" y1="173.8" x2="1027.4" y2="173.8" />
      <polygon
        className="indication"
        points="807.8,170.8 1027.4,173.8 807.8,176.8 807.8,170.8 	"
      />
    </g>
    <g>
      <line className="st2" x1="1378.8" y1="1627.8" x2="1378.8" y2="613.7" />
      <polygon
        className="indication"
        points="1378.8,1627.8 1375.8,613.7 1381.8,613.7 1378.8,1627.8 	"
      />
    </g>
    <path
      className="indication"
      d="M1838.5,964.3h-409.7c-15.5,0-28-12.5-28-28v-48.6c0-15.5,12.5-28,28-28h409.7c15.5,0,28,12.5,28,28v48.6
	C1866.5,951.8,1854,964.3,1838.5,964.3z"
    />
    <rect x="1443.2" y="867.8" className="st1" width={381} height="88.4" />
    <text
      transform="matrix(1 0 0 1 1483.0272 933.8459)"
      className="st2 st3 st4"
	  onClick={Zoom} onMouseEnter={(e) => Detail(e,6)}
    >
      Rodrigues
    </text>
    <path
      className="indication"
      d="M1483.5,2170.4h-409.7c-15.5,0-28-12.5-28-28v-48.6c0-15.5,12.5-28,28-28h409.7c15.5,0,28,12.5,28,28v48.6
	C1511.5,2157.8,1498.9,2170.4,1483.5,2170.4z"
    />
    <rect x="1088.2" y="2073.9" className="st1" width={381} height="88.4" />
    <text
      transform="matrix(1 0 0 1 1115.1919 2139.9172)"
      className="st2 st3 st4"
	  onClick={Zoom} onMouseEnter={(e) => Detail(e,7)}
    >
      La Réunion
    </text>
    <g>
      <line className="st2" x1="1802.1" y1="1627.8" x2="1802.1" y2="964.3" />
      <polygon
        className="indication"
        points="1802.1,1627.8 1799.1,964.3 1805.1,964.3 1802.1,1627.8 	"
      />
    </g>
    <g>
      <line className="st2" x1="122.6" y1="1029.1" x2="122.6" y2="473.8" />
      <polygon
        className="indication"
        points="122.6,1029.1 119.6,473.8 125.6,473.8 122.6,1029.1 	"
      />
    </g>
    <g>
      <line className="st2" x1="319.2" y1="1120.8" x2="319.2" y2="843.1" />
      <polygon
        className="indication"
        points="319.2,1120.8 316.2,843.1 322.2,843.1 319.2,1120.8 	"
      />
    </g>
    <g>
      <line className="st2" x1="1198.9" y1="1808.7" x2="1198.9" y2="2081.2" />
      <polygon
        className="indication"
        points="1198.9,1808.7 1201.9,2081.2 1195.9,2081.2 1198.9,1808.7 	"
      />
    </g>
  </svg>
</>

    </>
  );
}

export default Indication;
