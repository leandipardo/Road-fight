let d=document,
direccion=0,
animacionLineas=.7,
ejeX=0,
ejeY=0,
kmh=0,
$speed = d.querySelector(".speed-aguja"),
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
    kmh=kmh-25;
    animacionLineas=animacionLineas+(animacionLineas / 10);
    
}
if(e.buttons===2){
    $clickDerImg.style.opacity = "100%";
    kmh=kmh+25;
    animacionLineas=animacionLineas-(animacionLineas / 10);
}
})





//movimiento rueda de mouse.
export function streetFight(e){
    let posC = $car.getBoundingClientRect();
    let posS = $street.getBoundingClientRect();
    if(e.deltaY === 100){
        ejeX=ejeX+30;
        direccion=direccion+15;
    }
    if (e.deltaY === -100) {
      ejeX = ejeX - 30;
      direccion = direccion - 15;
    }
}



//linea de tiempo y correccion de direccion.
export function lineaIntervalos(){
    setInterval(() => {
        $car.style.transform =`translatex(${ejeX}px)translatey(${ejeY*2}px)rotateZ(${direccion}deg)`
    }, 16);
    setInterval(() => {
        direccion=0;
        $speed.style.transform = `rotateZ(${kmh}deg)`;
        $linea.style.animationDuration=`${animacionLineas}s`;
    }, 250);
    setInterval(()=>{
        $clickIzqImg.style.opacity = "0%";
        $clickDerImg.style.opacity = "0%";
    },500)
    $clickIzqImg.style.opacity = "0";
}

