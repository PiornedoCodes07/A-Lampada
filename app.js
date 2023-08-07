var turnOn = document.getElementById('turnOn');
var turnOff = document.getElementById('turnOff');
var lamp = document.getElementById('lamp')


function islampBroken () {
    return lamp.src.indexOf ('quebrada') > 1;
}

function lampOn (){
     if ( !islampBroken()){
    lamp.src = "/src/imagens/lamp_acesa.jpg";
    }
}

function lampOff (){
    if ( !islampBroken()){
    lamp.src = "/src/imagens/lamp_apagada.jpg";
    }
}

function lampBroken(){
    lamp.src = "/src/imagens/lamp_quebrada.jpg"
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBroken);


