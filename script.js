function Enviar() {
    const nombre = document.getElementById(`nombre`).value;
    const edad = parseInt(document.getElementById(`edad`).value);
    const resultado = document.getElementById(`parrafo`);

    if (nombre && (edad >= 18)) {
        resultado.textContent = `hola ${nombre}, eres mayor de edad`;
        resultado.style.color = "green";
        
    } else if (edad < 18) {
        resultado.textContent = `hola ${nombre} eres menor de edad`;
        resultado.style.color = "orange"
    } else {
        resultado.textContent = `ingrese el nombre y edad`;
        resultado.style.color = "red"
    }

}


