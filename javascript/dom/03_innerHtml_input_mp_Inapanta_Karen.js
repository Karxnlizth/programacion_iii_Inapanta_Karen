const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Aviso desde la Torre de Control";
saludo.innerHTML = `<h1>Bienvenido a Airport: Excelencia en cada vuelo</h1>`;

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
    <h1>Capitán Karen Carrera</h1>
    <p>Ruta asignada: UIO-GYE</p>
    <p>Rol: Pilota al mando</p>
    <p>Estado: En servicio</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function() {
    console.log("Ejecutando click", nombre.value);
    saludar.textContent = "Hola " + nombre.value;
});