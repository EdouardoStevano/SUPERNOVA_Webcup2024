import React, { useEffect, useState } from 'react';
import MadaMap2 from "./CarteMada";
import styles from "./Mada.module.scss"
import OceanIndien from './OceanIndien';

export default function Madaff(){

    var mission = 0;

    const getData = (data ) =>{

        // setSolaire(data[0]);
        // setEolienne(data[1]);
        // setHydro(data[2]);
        setRegion(data.place_name);
        sol = data[0];
    }
    const [solaire, setSolaire] = useState(70);
    const [eolienne, setEolienne] = useState(20);
    const [hydro, setHydro] = useState(80);
    const [region, setRegion] = useState("Diana");

    const [missions, setMissions] = useState([]);

    // const [style1, set1] = useState();

    var sol = 0;



    const [zoomLevel, setZoomLevel] = useState(1);

    // Fonction pour gérer le zoom
    const handleZoom = (delta) => {
      // Modifier le niveau de zoom en fonction du delta
      setZoomLevel((prevZoom) => prevZoom + delta);
    };



    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("mission.json");
            const data = await response.json();
            mission = data;
            setMissions(mission);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    
    return(
        <>
        {/* <Sidebar></Sidebar> */}

        <button onClick={() => handleZoom(0.1)}>Zoom In</button>
        <button onClick={() => handleZoom(-0.1)}>Zoom Out</button>


         <div className={styles.mada_all}>
   
                <div  className={styles.mada_bigy}>
                    <div className={styles.mada_column1}>
                        {/* <MadaMap2 datamada={getData} data2={missions}></MadaMap2> */}
                        <OceanIndien missions={missions}/>
                    </div>
                    <div className={styles.mada_column2}>
                        <div className={styles.mada_card}>
                            <h1>Mission</h1>
                            <p>
                                Description de la mission
                            </p>

                            <div>Level :
                                <div className={styles.progress}>
                                    <div className={styles.progressBar}  style={{width: `${solaire}%`}}>{solaire}%</div>
                                </div>
                            </div>
                            <div>Success rate :
                                <div className={styles.progress}>
                                    <div className={styles.progressBar2} style={{width: `${eolienne}%`}}>{eolienne}%</div>
                                </div>
                            </div>
                            <div>Reward :
                                <div className={styles.progress}>
                                    <div className={styles.progressBar3} style={{width: `${hydro}%`}} >{hydro}%</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

            </div>

            
        </>
    );
}