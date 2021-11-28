var bandera = false;
var turno = 0;
var tab = new Array();

function start() {
    bandera = !bandera;
    for(let i = 0; i < 9; i++){
        tab[i] = document.getElementById(`btn${i}`);
        tab[i].className = "boton"
        tab[i].value = "I";
    }
    turno = 1;

    var btn = document.getElementById("btnstart");
    if(bandera){
        btn.value = "Reiniciar juego";
        btn.className = "reiniciar";
    }
    else{
        btn.value = "Comenzar juego";
        btn.className = "iniciar";
    }
}
function ficha(boton){
    if(bandera){
        if(turno == 1 && boton.value == "I"){
            turno = 2;
            boton.value = "X";
            boton.className = "botonX";
        }
        else if(turno == 2 && boton.value == "I"){
            turno = 1;
            boton.value = "O";
            boton.className = "botonO";
        }
    }
    ganar();
}
function ganar(){
    if((tab[0].value === "X" && tab[1].value === "X" && tab[2].value === "X")
        || (tab[3].value === "X" && tab[4].value === "X" && tab[5].value === "X") 
        || (tab[6].value === "X" && tab[7].value === "X" && tab[8].value === "X")
        || (tab[0].value === "X" && tab[3].value === "X" && tab[6].value === "X")
        || (tab[1].value === "X" && tab[4].value === "X" && tab[7].value === "X")
        || (tab[2].value === "X" && tab[5].value === "X" && tab[8].value === "X")
        || (tab[0].value === "X" && tab[4].value === "X" && tab[8].value === "X")
        || (tab[2].value === "X" && tab[4].value === "X" && tab[6].value === "X"))
        {
        alert("Gana Jugador X");
        bandera = false;
    }
    if((tab[0].value === "O" && tab[1].value === "O" && tab[2].value === "O")
        || (tab[3].value === "O" && tab[4].value === "O" && tab[5].value === "O") 
        || (tab[6].value === "O" && tab[7].value === "O" && tab[8].value === "O")
        || (tab[0].value === "O" && tab[3].value === "O" && tab[6].value === "O")
        || (tab[1].value === "O" && tab[4].value === "O" && tab[7].value === "O")
        || (tab[2].value === "O" && tab[5].value === "O" && tab[8].value === "O")
        || (tab[0].value === "O" && tab[4].value === "O" && tab[8].value === "O")
        || (tab[2].value === "O" && tab[4].value === "O" && tab[6].value === "O"))
        {
        alert("Gana jugador O");
        bandera = false;
    }
}