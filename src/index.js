import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.getElementById("btnBuscar").addEventListener("click", () => {
    const texto = document.getElementById("texto").value;
    const palabra = document.getElementById("busqueda").value.trim();
    const resultadoDiv = document.getElementById("resultado");
    const contadorSpan = document.getElementById("contador");

    if (palabra === "") {
        resultadoDiv.innerHTML = "<em>Por favor, escribe una palabra para buscar.</em>";
        contadorSpan.textContent = 0;
        return;
    }

    // Expresión regular para buscar sin distinguir mayúsculas/minúsculas
    const regex = new RegExp(`(${palabra})`, "gi");
    const coincidencias = texto.match(regex);

    if (!coincidencias) {
        resultadoDiv.innerHTML = "<em>No se encontraron coincidencias.</em>";
        contadorSpan.textContent = 0;
        return;
    }

    // Reemplazar coincidencias por versión resaltada
    const textoResaltado = texto.replace(regex, '<span class="highlight">$1</span>');
    resultadoDiv.innerHTML = textoResaltado;
    contadorSpan.textContent = coincidencias.length;
});