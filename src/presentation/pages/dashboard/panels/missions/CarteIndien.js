import React, { useEffect, useState } from 'react';
import styles from "./Mada.module.scss";
import OceanIndien from './OceanIndien';
// import Localisation from './components/Localisation';
import mesMission from './mission.json';
import Indication from './Indication';

// import SlideComponent from '../home/Slide';

export default function CarteIndien(){

    var mission = 0;

    const [rotation, setRotation] = useState(0);
	const [perspective, setPerspective] = useState(700);
	const [skewX, setSkewX] = useState(0);
	const [skewY, setSkewY] = useState(0);
	const [scale, setScale] = useState(1);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
    
    const [cameraPreview1, setCameraPreview1] = useState(0);
    const [missionTarget, setMissionTarget] = useState();
    const [missionList, setMissionList] = useState([]);
    const [missionListP, setMissionListP] = useState([]);
    var liste_kely = [];
    var camera_preview = 0;

    // var scale1 = 1;

    const getData = (data ) =>{
        // setMissionList(data.missions);
        setMissionListP(data.missions);

       

    }

    const getData2 = (data ) =>{
        /*setMissionList(data.missions);
        
        setRegion(data.place_name);*/
        // alert("miditra zoom farany")
         setRegion(data.place_name);
        setScale(data.camera.scale);
        setMissionList(missionListP);
  
    }

    const getIndication = (data) => {
        setRegion(data.country_name);
        setStat1(data.level)
        setMissionNumber(data.mission_number);
        setFailure(data.mission_failure);
        setAvailable(data.mission_available);
        // console.log(data.camera)
        camera_preview = data.camera;
        setCameraPreview1(data.camera);

        
        // setPerspective(data.camera.perspective);
        // setRotation(data.camera.rotation);
        // setSkewX(data.camera.skewX);
        // setSkewY(data.camera.skewY);
        // setScale(data.camera.scale);
        // setX(data.camera.x);
        // setY(data.camera.y);

        // scale1 = 2;

        
        // console.log(data)
        // console.log(stat1)
        // console.log(data.country_name);
    };

    function showMission(e, m){
        setDescriptionM(m.mission_description);
        // alert(m.mission_description)

        setStat4(m.level);
        setStat5(m.success_rate);
        setStat6(m.reward);

    }

    const getZoom = (data) => {
        isPlace = true;
        document.getElementById("box_lieu").style.display = "none";
        document.getElementById("box_lieu2").style.display = "none";
        document.getElementById("box_lieu3").style.display = "none";
        document.getElementById("box_mission").style.display = "block";
        document.getElementById("back_map").style.display = "block";

        setPerspective(cameraPreview1.perspective);
        setRotation(cameraPreview1.rotation);
        setSkewX(cameraPreview1.skewX);
        setSkewY(cameraPreview1.skewY);
        setScale(cameraPreview1.scale);
        setX(cameraPreview1.x);
        setY(cameraPreview1.y);

        
    };

    function toMap(e){
        isPlace = false;
        document.getElementById("box_lieu").style.display = "block";
        document.getElementById("box_lieu2").style.display = "block";
        document.getElementById("box_lieu3").style.display = "block";
        document.getElementById("box_mission").style.display = "none";
        document.getElementById("back_map").style.display = "none";

        setPerspective(700);
        setRotation(0);
        setSkewX(0);
        setSkewY(0);
        setScale(1);
        setX(0);
        setY(0);
    }



    useEffect(() => {
        setPerspective(camera_preview.perspective);
        setRotation(camera_preview.rotation);
        setSkewX(camera_preview.skewX);
        setSkewY(camera_preview.skewY);
        setScale(camera_preview.scale);
        setX(camera_preview.x);
        setY(camera_preview.y);
      }, [isPlace, x]); // Déclenche l'effet seulement si count change


    const [stat1, setStat1] = useState(50);
    const [stat2, setStat2] = useState(20);
    const [stat3, setStat3] = useState(80);

    const [stat4, setStat4] = useState(0);
    const [stat5, setStat5] = useState(0);
    const [stat6, setStat6] = useState(0);

    const [region, setRegion] = useState("");
    const [descriptionM, setDescriptionM] = useState("");
    const [missionNumber, setMissionNumber] = useState(0);
    const [failure, setFailure] = useState(0);
    const [available, setAvailable] = useState(0);

    

    const [missions, setMissions] = useState([]);
    
    var isPlace = false;

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
            // console.error('Error fetching data:', error);
            mission = mesMission;
            setMissions(mission);
          }
        };
    
        fetchData();
      }, []);
    
    return(
        <>
        {/* <Sidebar></Sidebar> */}

        {/* <button onClick={() => handleZoom(0.1)}>Zoom In</button>
        <button onClick={() => handleZoom(-0.1)}>Zoom Out</button> */}


         <div className={styles.mada_all}>
   
                <div  className={styles.mada_bigy}>
                    <div className={styles.mada_column1}>

                        {/* <MadaMap2 datamada={getData} data2={missions}></MadaMap2> */}
                        <div className={styles.back_map} id='back_map' onClick={(e) => toMap(e)}>X</div>
                        
                        <div style={{position: 'absolute'}}>
                            <OceanIndien missions={missions} information={getData} information2={getData2} rotation={rotation} perspective={perspective} skewX={skewX} skewY={skewY} scale={scale} x={x} y={y}/>

                        </div>
                        
                        {/* <div id='box_lieu2' style={{position: "absolute", width: "100%", height: "100%", backdropFilter: "blur(3px)"}}>                        </div> */}
                        <div id='box_lieu2'></div>
                        <div id='box_lieu3' style={{position: 'absolute'}}>
                            <Indication information={getIndication} isZooming={getZoom}/>
                        </div>
                        
                        
                        
                       
                    </div>
                    <div className={styles.mada_column2}>
                        <div className={styles.mada_card}>

                            <div id='box_lieu' className={styles.box_lieu}>
                                <h2>Lieu de Mission: <br></br> <div style={{color: "#80E611"}}>{region}</div></h2>
                                <p>
                                    Description de la mission
                                </p>

                                <div style={{width: "100%", height: "150px"}}>
                                    {/* <SlideComponent/> */}
                                </div>


                                <div style={{display: "flex", flexWrap: "wrap"}}>
                                    <div style={{flex: "1", textAlign: "center"}}>
                                        <h1>{missionNumber}</h1>
                                        <p>Nombre de mission</p>
                                    </div>
                                    <div style={{flex: "1", textAlign: "center"}}>
                                        <h1>{available}</h1>
                                        <p>Success</p>
                                    </div>
                                    <div style={{flex: "1", textAlign: "center"}}>
                                        <h1>{failure}</h1>
                                        <p>Echec</p>
                                    </div>
                                    
                                </div>
                                

                                <div>Level :
                                    <div className={styles.progress}>
                                        <div className={styles.progressBar}  style={{width: `${stat1}%`}}>{stat1}%</div>
                                    </div>
                                </div>
                                <div>Success rate :
                                    <div className={styles.progress}>
                                        <div className={styles.progressBar2} style={{width: `${stat2}%`}}>{stat2}%</div>
                                    </div>
                                </div>
                                <div>Reward :
                                    <div className={styles.progress}>
                                        <div className={styles.progressBar3} style={{width: `${stat3}%`}} >{stat3}%</div>
                                    </div>
                                </div>
                            </div>

                            <div id='box_mission' className={styles.box_mission}>
                                <h2>Mission à {region}</h2>
                                <p style={{height: "100px", marginBottom: "50px", fontSize: '18px'}}>
                                    Description de la mission <br></br>
                                    {descriptionM}
                                </p>
                                
                                <div className={styles.liste_mission}>
                                        {/* liste des missions */}
                                        {missionList.map((m, index) => (
                                                <div className={styles.mission_box} key={"li"+index} onMouseEnter={(e) => showMission(e, m)}>
                                                    <div className={styles.title}>
                                                        <h3>{m.mission_name} </h3>
                                                        {Array.from({ length: m.stars }, (_, starIndex) => (
                                                            <span key={starIndex}>⭐</span>
                                                            ))}
                                                                                                        
                                                    </div>
                                                </div>
                                        ))}
                                    

                                </div>
                                

                                <div>Level :
                                    <div className={styles.progress}>
                                        <div className={styles.progressBar}  style={{width: `${stat4}%`}}>{stat4}%</div>
                                    </div>
                                </div>
                                <div>Success rate :
                                    <div className={styles.progress}>
                                        <div className={styles.progressBar2} style={{width: `${stat5}%`}}>{stat5}%</div>
                                    </div>
                                </div>
                                <div>Reward :
                                    <div className={styles.progress}>
                                        <div className={styles.progressBar3} style={{width: `${stat6}%`}} >{stat6}%</div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        
                    </div>
                    
                </div>

            </div>

            
        </>
    );
}