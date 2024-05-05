import React from 'react'
import { LineCharte } from './dash-chart/LineChart'
import { Radara } from './dash-chart/Radar'
import  './style.scss'

// import { Radar } from 'react-chartjs-2'

const HomeDashboard = () => {

  var card1 = (
    <>
      <div className={"card3_white_fr"}>
        <div className={"card3_left_fr"}>
          <div className={"card3_comp1_fr card3_green_fr"}>
            MISSION EFFECTUEE
          </div>
          <div className={"card3_comp2_fr card3_green_fr"}>50</div>
          <div className={"card3_comp3_fr"}>
            Date entre:
            <input type={"date"} />
            <input type={"date"} />
          </div>
        </div>
        <div className={"card3_right_fr"} style={{backgroundColor: "#313131"}}>
          <Radara />
        </div>
      </div>
    </>
  );
  var card11 = (
    <>
      <div className={"card3_white_fr"}>
        <div className={"card3_left_fr"}>
          <div className={"card3_comp1_fr card3_green_fr"}>
            MISSION EN COURS
          </div>
          <div className={"card3_comp2_fr card3_green_fr"}>10</div>
          <div className={"card3_comp3_fr"}>
            Date entre:
            <input type={"date"} />
            <input type={"date"} />
          </div>
        </div>
        <div className={"card3_right_fr"} style={{backgroundColor: "#313131"}}>
          <LineCharte />
        </div>
      </div>
    </>
  );

  
  var card2 = (
    <>
      <div className={"card_white2_fr"}>
        <div className={"tete_white2_fr"}>
          <div className={"c1_tete2_fr"}>
            <div className={"note2_fr"}>INFILTRATION DE BASE ENEMIE </div>
            <div className={"comm2_fr"}>
              Opération "Eclipse".
            </div>
          </div>
          <div className={"c2_tete2_fr"}>
            <div className={"jour2_fr"}>03/05/2024</div>
          </div>
        </div>
        <div className={"corps_white2_fr"}>
          Récupérer des plans stratégiques pour l'opération "Eclipse".
        </div>

        <div className={"pied_white2_fr"}>
          {/* <div className={"pied_left2_fr"}>Année Universiaire 2018-2019</div> */}
          <div className={"pied_right2_fr"}>
            <div className={"right22_fr"}>Rectifier</div>
          </div>
        </div>
      </div>
    </>
  );

  var card3 = (
    <>
      <div className={"card_white2_fr"}>
        <div className={"tete_white2_fr"}>
          <div className={"c1_tete2_fr"}>
            <div className={"note2_fr"}>EXTRACTION DE DONNEES</div>
            <div className={"comm2_fr"}>
              Cible: "Cerberus".
            </div>
          </div>
          <div className={"c2_tete2_fr"}>
            <div className={"jour2_fr"}>05/05/2024</div>
          </div>
        </div>
        <div className={"corps_white2_fr"}>
          Obtention des informations sur les activités de recherche et développement d'armes biologiques illicites.
        </div>

        <div className={"pied_white2_fr"}>
          {/* <div className={"pied_left2_fr"}>Année Universiaire 2018-2019</div> */}
          <div className={"pied_right2_fr"}>
            <div className={"right22_fr"}>Rectifier</div>
          </div>
        </div>
      </div>
    </>
  );

  var card12 = (
    <>
      <div className={"card3_white_fr"}>
        <div className={"card3_left_fr"}>
          <div className={"card3_comp1_fr card3_green_fr"}>
            EN COOPERATION
          </div>
          <div className={"card3_comp2_fr card3_green_fr"}>26</div>
          <div className={"card3_comp3_fr"}>
            Date entre:
            <input type={"date"} />
            <input type={"date"} />
          </div>
        </div>
        <div className={"card3_right_fr"} style={{backgroundColor: "#313131"}}>
          <Radara />
        </div>
      </div>
    </>
  );
  var card13 = (
    <>
      <div className={"card3_white_fr"}>
        <div className={"card3_left_fr"}>
          <div className={"card3_comp1_fr card3_green_fr"}>
            MISSION ECHOUEE
          </div>
          <div className={"card3_comp2_fr card3_green_fr"}>5</div>
          <div className={"card3_comp3_fr"}>
            Date entre:
            <input type={"date"} />
            <input type={"date"} />
          </div>
        </div>
        <div className={"card3_right_fr"} style={{backgroundColor: "#313131"}}>
          <LineCharte />
        </div>
      </div>
    </>
  );


  return (
    <div style={{width: "100%", height: "100%"}}>
      

      
      <div className={"col1_main3_fr"}>
            <div className={"body_col1_fr"}>
              <div className={"card3_cont_col1_fr"}>
                {card1}
                {card11}
                {card12}
                {card13}
              </div>
            </div>
          </div>

          <div className={"col2_main3_fr"}>
            <div className={"col22_main_fr"}>
              <div className={"title_21_fr"}>Dernier activités</div>
              <div className={"card2_cont_fr"}>
                {card2}
                {/* {card2} */}
                {/* {card3} */}
                {card3}
              </div>
            </div>
          </div>
      
    </div>
  )
}

export default HomeDashboard