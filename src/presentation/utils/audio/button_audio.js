export function btnAudio(){
    const audio = new Audio("./clicked.wav")
    console.log(audio)
    audio.currentTime = 0
    audio.play()
}