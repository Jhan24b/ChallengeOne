const texto = document.querySelector(".texto");
const encriptado = document.querySelector(".encriptado");
const copia = document.querySelector(".copiar");
// copia.style.display = "none";
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
const key = 'QWERTYUIOPASDFGHJKLZXCVBNM ';

function validarTexto(){
    let textoEscrito = document.querySelector(".texto").value;
    let validador = textoEscrito.match(/^[a-z\s]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}



function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encryptText(texto.value)
        encriptado.value = textoEncriptado
        encriptado.style.backgroundImage = "none"
        texto.value = "";
        copia.style.display = "block"
    }
}

function btnDesencriptar(){
    const textoEncriptado = decryptText(texto.value)
    encriptado.value = textoEncriptado
    texto.value = "";
}

function copiar(){
    encriptado.select();
    navigator.clipboard.writeText(encriptado.value)
    encriptado.value = "";
    alert("Texto Copiado")
}

function encryptText(text) {
    const encryptedText = [];

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toUpperCase();
        const index = alphabet.indexOf(char);

        if (index !== -1) {
            // Obtener el carácter cifrado según la clave de sustitución
            const encryptedChar = key[index];
            encryptedText.push(encryptedChar);
        } else {
            // Si el carácter no está en el alfabeto, mantenerlo sin cambios
            encryptedText.push(char);
        }
    }

    return encryptedText.join('').toLowerCase();
}


function decryptText(encryptedText) {
    const decryptedText = [];

    for (let i = 0; i < encryptedText.length; i++) {
        const char = encryptedText[i].toUpperCase();
        const index = key.indexOf(char);

        if (index !== -1) {
            // Obtener el carácter original según la clave de sustitución
            const decryptedChar = alphabet[index];
            decryptedText.push(decryptedChar);
        } else {
            // Si el carácter no está en la clave de sustitución, mantenerlo sin cambios
            decryptedText.push(char);
        }
    }

    return decryptedText.join('').toLowerCase();
}

