

//document.getElementById("cabecera").innerHTML = "Hola Marte!!!!";


//document.getElementById("cabecera").innerHTML = "Hola Marte!!!!";

let tavlero = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let turno = true ;

let ganador = 0

function mousePorEncima (a) {
    if (tavlero[a] == 0 ){
        document.getElementById(a).src = "img/vacio2.png";
        
    }
    else if (tavlero[a] == 1 ){
        document.getElementById(a).src = "img/cruz2.png";
        
    }
    else if (tavlero[a] == 2 ){
        document.getElementById(a).src = "img/circulo2.png";
        
    }

    
}


function mousePorFuera (a) {
    if (tavlero[a] == 0 ){
        document.getElementById(a).src = "img/vacio1.png";
        
    }
    else if (tavlero[a] == 1 ){
        document.getElementById(a).src = "img/cruz1.png";
        
    }
    else if (tavlero[a] == 2 ){
        document.getElementById(a).src = "img/circulo1.png";
        
    }
}

function clickMouse (a) {
    if (tavlero[a] == 0){
        if (turno == true){
            tavlero[a] = 1;
            turno = false;
        }
        else {
            tavlero[a] = 2;
            turno = true;
        }
        determinar_ganador();
        
    }
    mostrarGanador();
}


function mostrarGanador (){
    if (ganador == 1){
        document.getElementById("gana").innerHTML = "ganan cruzes"
    }
    else if (ganador == 2){
        document.getElementById("gana").innerHTML = "ganan circulos"
    }
    else if (turno == true){
        document.getElementById("gana").innerHTML = "sigen cruzes"
    }
    else if (turno == false){
        document.getElementById("gana").innerHTML = "sigen circulos"
    }

}

function aux_det_gan (x, y){
    let tablero2 = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    for (let i = 0; i < 9; i++){
        for (let a = 0; a < 3; a++){
            for (let b = 0; b < 3; b++){
                tablero2[a][b]  = tavlero[i]
            }
        }
    }
    return tablero2[x][y];
}



function determinar_ganador (){
    let f = 0;
    loop1:
    for (let i = 0; i < 3; i++){
        loop2:
        f = aux_det_gan(i, 0)
        for (let a = 1; a < 3; a++){
            if(f != aux_det_gan(i, a)){
                f = 0
                break ; 
            }
            else if (a === 2){
                ganador = f
            }
        }
        loop3:
        f = aux_det_gan(0, i)
        for (let a = 1; a < 3; a++){
            if(f != aux_det_gan(a, i)){
                f = 0
                break ; 
            }
            else if (a === 2){
                ganador = f
            }
        }
        
    }
    mostrarGanador()
}