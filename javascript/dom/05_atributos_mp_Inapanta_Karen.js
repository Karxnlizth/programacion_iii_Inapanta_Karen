const aeronave = document.getElementById("aeronave");
const cambiar = document.getElementById("cambiar");
const verRuta = document.getElementById("verRuta");
const ruta = document.getElementById("ruta");

cambiar.addEventListener("click", function() {
    if (aeronave.getAttribute("title") == "Aeronave Principal") {
        aeronave.setAttribute("src", "aeronave_secundaria.jpeg");
        aeronave.setAttribute("title", "Aeronave de Respaldo");
        aeronave.dataset.ruta = "UIO-CUE";
    } else {
        aeronave.setAttribute("src", "aeronave.jpeg");
        aeronave.setAttribute("title", "Aeronave Principal");
        aeronave.dataset.ruta = "UIO-GYE";
    }
});

verRuta.addEventListener("click", function() {
    ruta.textContent = aeronave.dataset.ruta;
});

const puertaEmbarque = document.getElementById("puertaEmbarque");
const activarPuerta = document.getElementById("activarPuerta");

activarPuerta.addEventListener("click", function() {
    if (puertaEmbarque.textContent == "Puerta de Embarque Inactiva") {
        puertaEmbarque.style.backgroundColor = "green";
        puertaEmbarque.style.color = "white";
        puertaEmbarque.textContent = "Puerta de Embarque Activa";
    } else {
        puertaEmbarque.style.backgroundColor = "red";
        puertaEmbarque.style.color = "white";
        puertaEmbarque.textContent = "Puerta de Embarque Inactiva";
    }
});