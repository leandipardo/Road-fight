let d=document,
direccion=0,
animacionLineas=0.9,
ejeX=0,
ejeY=0,
kmh=0,
$car = d.querySelector(".car"),
$street = d.querySelector(".street"),
$linea = d.querySelector(".street-line-conteiner"),
$clickIzqImg = d.querySelector(".click-izquierdo"),
$clickDerImg = d.querySelector(".click-derecho"),
$scrollBtn = d.querySelector(".scroll-button");
//click derecho e izquierdo, velocidad, animacion de la calle.
d.addEventListener("mousedown",(e)=>{
    e.preventDefault();
    setInterval(() => {
    if(e.buttons===1){
            ejeY++;

    }
    if(e.buttons===2){
            ejeY--;
    }
},100);
if(e.buttons===1){
    $clickIzqImg.style.opacity = "100%";
    kmh=kmh-50;
    animacionLineas=animacionLineas+(animacionLineas / 10);
    
}
if(e.buttons===2){
    $clickDerImg.style.opacity = "100%";
    kmh=kmh+50;
    animacionLineas=animacionLineas-(animacionLineas / 10);
}
})





//movimiento rueda de mouse.
export function streetFight(e){
    if(e.deltaY === 100){
        ejeX=ejeX+30;
        direccion=direccion+15;
    }
    if(e.deltaY === -100){
        ejeX=ejeX-30;
        direccion=direccion-15;
    }
}



//linea de tiempo y correccion de direccion.
export function lineaIntervalos(){
    setInterval(() => {
        $car.style.transform =`translatex(${ejeX}px)translatey(${ejeY*2}px)rotateZ(${direccion}deg)`
    }, 16);
    setInterval(() => {
        direccion=0;
        console.log(`VELOCIDAD = [${150 + kmh}KM/H] // VELOCIDAD ESTABLE = 150KM/H`)
        $linea.style.animationDuration=`${animacionLineas}s`;
        console.log(animacionLineas);
    }, 250);
    setInterval(()=>{
        $clickIzqImg.style.opacity = "0%";
        $clickDerImg.style.opacity = "0%";
    },500)
    $clickIzqImg.style.opacity = "0";
}

