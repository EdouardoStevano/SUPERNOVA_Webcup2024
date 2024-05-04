import { useRef } from "react"
import "./style.scss"

export function Instruction(){
    return(
        <>
            <div className="instruciton-container">
                <InstructImage />
                <InstructionInfo />
            </div>
        </>
    )
}

function InstructImage(){
    return(
        <div className="image-insctruct-container" data-aos="fade-right">
            <div className="image-up">
                <img src="/vcc.png" alt="" />
                <img src="/vcc.png" alt="" />
            </div>
            <div className="image-down">
                <img src="/vcc.png" alt="" />
                <img src="/vcc.png" alt="" />
            </div>
        </div>
    )
}

function InstructionInfo(){
    const audioRef = useRef(new Audio("/audio/clicked.wav"))
    const btnClicked = ()=>{
        const audio = audioRef.current
        audio.currentTime = 0
        audio.play()
    }
    return(
        <div className="info-instruct-container" data-aos="fade-left">
            <div className="title">
                <p>Instruction</p>
                <h1>See more instruction about</h1>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil beatae doloribus at voluptas reprehenderit blanditiis?</p>
            </div>
            <div className="btn-contain">
                <button onClick={btnClicked}>Get started</button>
            </div>
        </div>
    )
}