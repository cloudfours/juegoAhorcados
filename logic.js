String.prototype.replaceAt = function(index, character) { return this.substr(0, index) + character + this.substr(index + character.length); }
let palabras = ['angel', 'moto', 'pedro', 'letra'];
let palabra = palabras[Math.floor(Math.random() * palabras.length)];
let palabrasConguion = palabra.replace(/./g, "_ ");


let mostrar = document.querySelector("#salida").innerHTML = palabrasConguion;
let botonAg = document.querySelector("#calcular");
botonAg.addEventListener('click', function(event) {
    event.preventDefault();
    let letra = document.querySelector("#text").value;
    let hasFallado = true;
    let contadorFallos = 0;

    for (const i in palabra) {
        if (letra == palabra[i]) {
            palabrasConguion = palabrasConguion.replaceAt(i * 2, letra);
            hasFallado = false;
        }



    }
    // if (hasFallado) {
    //     contadorFallos++;
    //     console.log(contadorFallos);
    //     if (contadorFallos == 1) {
    //         cabeza();

    //     }
    //     if (contadorFallos == 2) {
    //         cuerpo();
    //     }

    //     if (contadorFallos == 3) {

    //         brazoDerecho();
    //     }





    // if (hasFallado) {
    //     contadorFallos++;
    //     if (contadorFallos == 5) {
    //         alert("perdiste el juego");
    //     } else if (palabrasConguion.indexOf('_') < 0) {
    //         alert("ganaste  el juego");
    //     }


    mostrar = document.querySelector("#salida").innerHTML = palabrasConguion;
});

var pantalla = document.querySelector("#dibujo"); //recibira al canvas de html
var pincel = pantalla.getContext("2d");

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 1200, 800);
//soporte triangulo
pincel.beginPath(); //se mueve por toda la bandera
pincel.moveTo(100, 400); //se mueve al centro
pincel.lineTo(200, 400);
pincel.lineTo(200, 400);
pincel.lineTo(150, 350);
pincel.lineTo(100, 399); //se mueve a la parte inferior del color verdde
pincel.stroke();
//poste
pincel.beginPath(); //se mueve por toda la bandera
pincel.lineWidth = 2;
pincel.beginPath();
pincel.moveTo(100, 400); //se mueve al centro
pincel.lineTo(200, 400);
pincel.lineTo(200, 400);
pincel.lineTo(150, 350);
pincel.lineTo(150, 100);
pincel.stroke();
//soporte 
pincel.beginPath(); //se mueve por toda la bandera
pincel.lineWidth = 2;
pincel.beginPath();
pincel.moveTo(100, 400); //se mueve al centro
pincel.lineTo(200, 400);
pincel.lineTo(200, 400);
pincel.lineTo(150, 350);
pincel.lineTo(150, 100);
pincel.lineTo(340, 100);
pincel.stroke();
//sostener
pincel.moveTo(100, 400); //se mueve al centro
pincel.lineTo(200, 400);
pincel.lineTo(200, 400);
pincel.lineTo(150, 350);
pincel.lineTo(150, 100);
pincel.lineTo(340, 100);
pincel.lineTo(340, 100);
pincel.lineTo(340, 170);
pincel.stroke();
//cabeza
function cabeza() {
    pincel.lineWidth = 2;
    pincel.beginPath(); //se mueve por toda la bandera
    pincel.arc(340, 196, 25, 0, 2 * 3.14);
    pincel.stroke();
}
//cuerpo
function cuerpo() {
    pincel.lineWidth = 2;
    pincel.beginPath();
    pincel.moveTo(340, 221);
    pincel.lineTo(340, 290); //se mueve por toda la bandera
    pincel.stroke();
}

function brazoDerecho() {
    //brazo derecho
    pincel.lineWidth = 2
    pincel.moveTo(340, 230);
    pincel.lineTo(250, 198); //se mueve por toda la bandera
    pincel.stroke();
}
//brazo izquierdo
function brazoIzq() {
    pincel.lineWidth = 2
    pincel.moveTo(340, 230);
    pincel.lineTo(420, 198); //se mueve por toda la bandera
    pincel.stroke();
}
//pierna derecha
function piernaDer() {
    pincel.lineWidth = 2;
    pincel.moveTo(260, 339);
    pincel.lineTo(340, 290);
    pincel.stroke();
}
//pierna izquierda
function piernaIzq() {
    pincel.lineWidth = 2;
    pincel.moveTo(420, 339);
    pincel.lineTo(340, 290); //se mueve por toda la bandera
    pincel.stroke();
}