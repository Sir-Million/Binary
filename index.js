const entrada = document.getElementById('entrada');
const binario = document.getElementById('Binario');
const octal = document.getElementById('Octal');
const salida = document.getElementById('salida');

let numeroDecimal, divisor, resultadoBinario, cociente, residuo;

binario.addEventListener('click',()=>{
    validarEntrada();
    resultadoBinario = convertirDecimalABinario();
    salida.value = invertirCadena(resultadoBinario);
})

octal.addEventListener('click',()=>{
    validarEntrada();
    resultadoOctal = convertirDecimalAOctal();
    salida.value = invertirCadena(resultadoOctal);
})

const validarEntrada = () => {
    (entrada.value === "") ? alert('Porfavor, ingresa un numero decimal para poder convertirlo a uno binario o octal.') : console.log('Todo bien');
}

const convertirDecimalABinario = () => {
    numeroDecimal = entrada.value;
    divisor = 2
    let numeroSalida = "";
    while (numeroDecimal >= 2) {
        cociente = Math.trunc(numeroDecimal / divisor);
        residuo = numeroDecimal % divisor;
        numeroSalida += residuo.toString();
        numeroDecimal = cociente;
    }

    let auxiliar = numeroDecimal.toString();
    numeroSalida += auxiliar;
    return numeroSalida;
}

const convertirDecimalAOctal = () => {
    numeroDecimal = entrada.value;
    divisor = 8
    let numeroSalida = "";
    while (numeroDecimal >= 8) {
        cociente = Math.trunc(numeroDecimal / divisor);
        residuo = numeroDecimal % divisor;
        numeroSalida += residuo.toString();
        numeroDecimal = cociente;
    }

    let auxiliar = numeroDecimal.toString();
    numeroSalida += auxiliar;
    return numeroSalida;
}

const invertirCadena = (cadenaTexto) => {
    return cadenaTexto.split("").reverse().join("");
    
}