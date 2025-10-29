import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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

  const regex = new RegExp(`(${palabra})`, "gi");
  const coincidencias = texto.match(regex);

  if (!coincidencias) {
    resultadoDiv.innerHTML = "<em>No se encontraron coincidencias.</em>";
    contadorSpan.textContent = 0;
    return;
  }

  const textoResaltado = texto.replace(regex, '<span class="highlight">$1</span>');
  resultadoDiv.innerHTML = textoResaltado;
  contadorSpan.textContent = coincidencias.length;
});

// 🟢 NUEVA FUNCIÓN: Reemplazar palabra
document.getElementById("btnReemplazar").addEventListener("click", () => {
  const texto = document.getElementById("texto").value;
  const palabra = document.getElementById("busqueda").value.trim();
  const reemplazo = document.getElementById("reemplazo").value.trim();
  const resultadoDiv = document.getElementById("resultado");

  if (palabra === "" || reemplazo === "") {
    resultadoDiv.innerHTML = "<em>Debes escribir la palabra a buscar y la nueva palabra.</em>";
    return;
  }

  const regex = new RegExp(palabra, "gi");
  const nuevoTexto = texto.replace(regex, reemplazo);

  document.getElementById("texto").value = nuevoTexto;
  resultadoDiv.innerHTML = nuevoTexto;
  document.getElementById("contador").textContent = 0;
});
