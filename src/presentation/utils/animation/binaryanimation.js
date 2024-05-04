const audio = new Audio("/audio/clicked.wav")

const playSound = () => {
    audio.currentTime = 0;
    audio.play()
};

const binarizeText = (text)=>{
    let resdata = ""
    for(let i=0; i<text.length;i++){
        if (text[i]==" ") resdata+=`<span>${text[i]}</span>`
        else{
            let temp=""
            if (i%2==0) temp+="0"
            else temp+="1"
            resdata+=`<span>${temp}</span>`
        }
    }
    return resdata
}
const animBinary = (domObject, initVal, nbEnd, nbStart=0)=>{
    if (initVal==" "){
        domObject.innerText = initVal
    }
    else{
        if(nbStart<nbEnd){
            if(nbStart%2==0) domObject.innerText = "0"
            else domObject.innerText = "1"

            setTimeout(()=>{
                animBinary(domObject,initVal, nbEnd, nbStart+1)
            }, 100)
        }
        else{
            domObject.innerText = initVal
        }
    }
}

const runAnimation = (elem, initVal)=>{
    // playSound();
    elem.innerHTML  = binarizeText(elem.innerText)
    const children = elem.children
    const tempInitval = initVal.split("")
    for(let i=0; i<children.length;i++){
        animBinary(children[i],tempInitval[i], 20+i*2)
    }
}

export default runAnimation;
// export default binarizeText;