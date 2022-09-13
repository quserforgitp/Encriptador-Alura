const input = document.querySelector("#input-text");
const output = document.querySelector("#output-text");
const btnCopiar = document.querySelector(".boton-copiar");
const avisoNoTexto = document.querySelector(".p-mensaje-no-encontrado");
const avisoIngresaTexto = document.querySelector(".p-ingresa-texto");

window.onload = init();

function init() {
    input.value = "";
    output.value = "";
    mostrarElementos();
}

function btnEncriptar() {

    if (input.value == "") {
        btnCopiar.style.display = "none";
        output.value = "";
        mostrarElementos();
    } else {
        const textoProcesado = encriptar(input.value);
        ocultarElementos();
        output.value = textoProcesado;
        input.value = "";
        btnCopiar.style.display = "block";
    }
}

function btnDesencriptar() {
    
    if (input.value == "") {
        btnCopiar.style.display = "none";
        output.value = "";
        mostrarElementos();
    } else {
        const textoProcesado = desencriptar(input.value);
        ocultarElementos();
        output.value = textoProcesado;
        input.value = "";
        btnCopiar.style.display = "block";
    }
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }                
    }
    return stringEncriptada;
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}

function ocultarElementos() {
    output.style.backgroundImage = "none";
    avisoNoTexto.style.display = "none";
    avisoIngresaTexto.style.display = "none";
}

function mostrarElementos() {
    output.style.backgroundImage = "url(src/img/muneco.svg)";
    avisoNoTexto.style.display = "block";
    avisoIngresaTexto.style.display = "block";
}

function copiar() {
    
    output.select();
    navigator.clipboard.writeText(output.value)
    output.value = "";
    mostrarElementos();
    btnCopiar.style.display = "none";
    alert("Texto Copiado");
}

