'use strict'

const imagenes2 = [
    "./Imagenes/46.jpg",
    "./Imagenes/HRHSN5EKMBB3VD2MP55C7EP4SA.jpg",
    "./Imagenes/pure-de-papa-con-pollo-broaster-large-qlJiPE4lyS.jpeg"
]

const laImagen = document.querySelector('.imagen');
const btnIzq = document.querySelector('.btnIzq');
const btnDer = document.querySelector('.btnDer');

btnDer.addEventListener("click",adelante);

btnIzq.addEventListener("click",atras);

laImagen.src = imagenes2[0];

let pos = 0;

function adelante(){
    if(pos < imagenes2.length-1){
        pos++;
    }
    else{
        pos = 0;
    }
    laImagen.src = imagenes2[pos];
}

function atras(){
    if(pos > 0){
        pos--;
    }
    else{
        pos = imagenes2.length-1;
    }
    laImagen.src = imagenes2[pos];
}


