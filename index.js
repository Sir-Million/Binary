const entrada = document.getElementById('entrada');
const binario = document.getElementById('Binario');
const binario2 = document.getElementById('Binario2');
const octal = document.getElementById('Octal');
const octal2 = document.getElementById('Octal2');
const salida = document.getElementById('salida');

let numeroDecimal, divisor, resultadoBinario, cociente, residuo;

binario.addEventListener('click',()=>{
    validarEntrada1();
})

octal.addEventListener('click',()=>{
    validarEntrada2();
})

binario2.addEventListener('click',()=>{
    validarEntrada3();
})

octal2.addEventListener('click',()=>{
    validarEntrada4();
})

const validarEntrada1 = () => {
    if (!isNaN(entrada.value) === false || entrada.value === "") {
        alert('Error: asegurate de que el numero de entrada este bien definido y sea un caracter numerico');
        return console.log("numero no definido");
    } else {
        console.log('success');
    }
    resultadoBinario = convertirDecimalABinario();
    salida.value = invertirCadena(resultadoBinario);
}

const validarEntrada2 = () => {
    if (!isNaN(entrada.value) === false || entrada.value === "") {
        alert('Error: asegurate de que el numero de entrada este bien definido y sea un caracter numerico');
        return console.log("numero no definido");
    } else {
        console.log('success');
        resultadoOctal = convertirDecimalAOctal();
        salida.value = invertirCadena(resultadoOctal);
    }
}

const validarEntrada3 = () => {
    if (!isNaN(entrada.value) === false || entrada.value === "") {
        alert('Error: asegurate de que el numero de entrada este bien definido y sea un caracter numerico');
        return console.log("numero no definido");
    } else {
        console.log('success');
        resultadoBinario2 = convertirBiniarioADecimal(entrada.value);
        salida.value = resultadoBinario2;
    }
}

function convertirBiniarioADecimal(binarioval) {
    if (binarioval.constructor != String) {
        return null;
    }

    binarioval = binarioval.replace(/[^01]/gi, '');

    return Number.parseInt(binarioval, 2);
}

const validarEntrada4 = () => {
    if (!isNaN(entrada.value) === false || entrada.value === "") {
        alert('Error: asegurate de que el numero de entrada este bien definido y sea un caracter numerico');
        return console.log("numero no definido");
    } else {
        console.log('success');
        resultadoOctal2 = convertirOctalADecimal(entrada.value);
        salida.value = resultadoOctal2;
    }
}

function convertirOctalADecimal(octalval) {
    if (octalval.constructor != String) {
        return null;
    }

    octalval = octalval.replace(/[^01234567]/gi, '');

    return Number.parseInt(octalval, 8);
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