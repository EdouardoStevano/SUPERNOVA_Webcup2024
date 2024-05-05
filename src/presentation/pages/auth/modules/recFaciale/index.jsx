import React from 'react'

import "./style.scss"
import { Link } from 'react-router-dom'
import FaceDetection from './components/FaceDetection'

const RecFaciale = () => {
  return (
    <div className="faciale MiddleContent">
        <div className="faciale-content">
            <h1>Reconnaissance Faciale</h1>

            <div className="camera">
              <FaceDetection/>
            </div>

            {/* <Link className='backfromfacial' to={"/auth"}>Retour à l'authetification</Link> */}
        </div>
    </div>
  )
}

export default RecFaciale