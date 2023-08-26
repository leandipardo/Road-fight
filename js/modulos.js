import {streetFight,lineaIntervalos} from "./street_fight.js";
let d = document;
let $audio = d.getElementById("bg-music");
console.log($audio);
$audio.volume = 0.5;
d.addEventListener("mousedown",(e)=>{
    streetFight(e)
})
d.addEventListener("wheel", (e)=>{
    streetFight(e);
})
document.oncontextmenu = function(){return false};
lineaIntervalos();
