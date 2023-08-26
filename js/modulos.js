import {streetFight,lineaIntervalos} from "./street_fight.js";
let d = document;

d.addEventListener("mousedown",(e)=>{
    streetFight(e)
})
d.addEventListener("wheel", (e)=>{
    streetFight(e);
})
document.oncontextmenu = function(){return false};
lineaIntervalos();
