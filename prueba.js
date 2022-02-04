String.prototype.replaceAt = function(index, character) { return this.substr(0, index) + character + this.substr(index + character.length); }

let botonGre = document.querySelector("#enviar");
let palabras = ['perro', 'gato'];
botonGre.addEventListener('click', function(event) {
    event.preventDefault()
    let agregar = document.querySelector('#agregar').value;
    palabras.push(agregar);
    console.log(palabras);
});
let palabra = palabras[Math.floor(Math.random() * palabras.length)];
let palabrasConguion = palabra.replace(/./g, "_ ");
let contadorFallos = 0;
let mostrar = document.querySelector("#salida").innerHTML = palabrasConguion;
let botonAg = document.querySelector("#calcular");
let letra = document.querySelector("#text");
botonAg.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector("#salida").style.display = "flex";
    document.addEventListener('keypress', function(event) {

        letra = event.key;
        let hasFallado = true;
        for (const i in palabra) {
            if (letra == palabra[i]) {
                palabrasConguion = palabrasConguion.replaceAt(i * 2, letra);
                hasFallado = false;
            }



        }
        if (hasFallado) {
            contadorFallos++;
            ahorcar();

        } else {
            if (palabrasConguion.indexOf('_') < 0) {
                document.querySelector('#ganador').style.display = "flex";
            }
        }

        function ahorcar() {
            console.log(contadorFallos);
            if (contadorFallos == 1) {
                cabeza();
                console.log(contadorFallos);

            }
            if (contadorFallos == 2) {
                cuerpo();
                console.log(contadorFallos);
            }

            if (contadorFallos == 3) {

                brazoDerecho();
            }
            if (contadorFallos == 4) {
                brazoIzq();

            }
            if (contadorFallos == 5) {
                piernaDer();
            }
            if (contadorFallos == 6) {
                piernaIzq();
                document.querySelector('#perder').style.display = "flex";

            }


        }



        mostrar = document.querySelector("#salida").innerHTML = palabrasConguion;
    });


    var pantalla = document.querySelector("#dibujo"); //recibira al canvas de html
    var pincel = pantalla.getContext("2d");

    pincel.fillStyle = "white";

    //soporte triangulo
    pincel.beginPath();
    pincel.moveTo(100, 400);
    pincel.lineTo(200, 400);
    pincel.lineTo(200, 400);
    pincel.lineTo(150, 350);
    pincel.lineTo(100, 399);
    pincel.stroke();
    //poste
    pincel.beginPath();
    pincel.lineWidth = 2;
    pincel.beginPath();
    pincel.moveTo(100, 400);
    pincel.lineTo(200, 400);
    pincel.lineTo(200, 400);
    pincel.lineTo(150, 350);
    pincel.lineTo(150, 100);
    pincel.stroke();
    //soporte 
    pincel.beginPath();
    pincel.lineWidth = 2;
    pincel.beginPath();
    pincel.moveTo(100, 400);
    pincel.lineTo(200, 400);
    pincel.lineTo(200, 400);
    pincel.lineTo(150, 350);
    pincel.lineTo(150, 100);
    pincel.lineTo(340, 100);
    pincel.stroke();
    //sostener
    pincel.moveTo(100, 400);
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
        pincel.beginPath();
        pincel.arc(340, 196, 25, 0, 2 * 3.14);
        pincel.stroke();
    }
    //cuerpo
    function cuerpo() {
        pincel.lineWidth = 2;
        pincel.beginPath();
        pincel.moveTo(340, 221);
        pincel.lineTo(340, 290);
        pincel.stroke();
    }

    function brazoDerecho() {
        //brazo derecho
        pincel.lineWidth = 2
        pincel.moveTo(340, 230);
        pincel.lineTo(250, 198);
        pincel.stroke();
    }
    //brazo izquierdo
    function brazoIzq() {
        pincel.lineWidth = 2
        pincel.moveTo(340, 230);
        pincel.lineTo(420, 198);
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
        pincel.lineTo(340, 290);
        pincel.stroke();
    }
});