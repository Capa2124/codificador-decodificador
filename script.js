function codificar() {
    var ingreso = document.querySelector("#ingresar-texto").value;
    var resultado = "";
    var diccionario_vocales = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" }
    for (let index = 0; index < ingreso.length; index++) {
        if (ingreso[index] in diccionario_vocales) {
            resultado += diccionario_vocales[ingreso[index]];
        }
        else {
            resultado += ingreso[index];
        }
    }
    ocultar_escribir(resultado);
    return resultado;
}

function decodificar() {
    var ingreso = document.querySelector("#ingresar-texto").value;
    var resultado = "";
    var diccionario_vocales = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" }
    for (let index = 0; index < ingreso.length; index++) {
        if (ingreso[index] in diccionario_vocales) {
            resultado += ingreso[index]
            index += (diccionario_vocales[ingreso[index]].length - 1)
        }
        else {
            resultado += ingreso[index];
        }
    }
    ocultar_escribir(resultado);
    return resultado;
}

function ocultar_escribir(resultado) {
    var cambiar = document.querySelector("#ocultar");
    cambiar.setAttribute("hidden", "true");
    var nuevo = document.querySelector("#texto-nuevo");
    nuevo.removeAttribute("hidden");
    nuevo.textContent = resultado;
    var Copiar = document.querySelector("#boton-copiar");
    Copiar.removeAttribute("hidden");
}

function copyFun() {
    var parrafo = document.querySelector("#texto-nuevo").textContent;
    navigator.clipboard.writeText(parrafo);
    var texto = document.querySelector("#ingresar-texto")
    texto.value = "";
}

var bCodificar = document.querySelector("#encriptar");
var bDecodificar = document.querySelector("#desencriptar");
var bCopiar = document.querySelector("#boton-copiar");
bCodificar.onclick = codificar;
bDecodificar.onclick = decodificar;
bCopiar.onclick = copyFun;