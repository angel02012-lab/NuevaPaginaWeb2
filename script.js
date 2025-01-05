/*let is
let as
let media 

function asd() {
    is = 0
    for (let i = 0; i < arr.length; i++) {
        is =+ arr[i] 
    }
    media = is / arr.length
}    

arr = [10,20,30,40]
asd()
console.log(media) */

const { error, map } = require("jquery")

 
/*let array = [20,10,30]

function asd(a,b) {
    let val = 0
    if (a > b) {
        val = 1
    } else if (b < a) {
        val -1
    } 
    return val 
} 

let add = array.sort() 

console.log(add) */

/*let array = [20,10,30]

let add = array.sort((a,b) => a - b) 

console.log(add) */


/*let numero = Number(prompt("mete un numero"))

 numero > 70 && numero > 70 ? alert("ganaste") : alert ("perdiste") */

 /*function asd(a,b) {
    if(!Number.isInteger(a) || !Number.isInteger(b)) {
            return "no un number"
        }
            return a + b 
        }
    
 console.log(asd(5,10))  */

/*let nombres = ["angel", "javier", "robles", "cerritos"]

function Showmensaje(mensaje) {
    console.log(mensaje)
} 

nombres.forEach(Showmensaje) */

/*let num

try {
     num = 5
    num = a
    Error ("este es el error")
} catch (error) {
    console.log(`este es el error ${Error}`)
}

console.log(num) */

/*let add = (a,b) => a + b
console.log(add(10,5)) */

/*for (let i = 0; i < 21; i++) {
    console.log(`${i}`)
} */

/*let nombre = "angel"

let adds = nombre.split().reverse().join(" ")

console.log(adds)  */

const express = require('express'); // Usa comillas simples o dobles para importar
const port = 9000; // Define el puerto
const app = express(); // Crea la instancia de la aplicación

// Define una ruta para manejar solicitudes GET al inicio "/"
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando!'); // Responde al cliente con este mensaje
});

// Inicia el servidor en el puerto definido
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
