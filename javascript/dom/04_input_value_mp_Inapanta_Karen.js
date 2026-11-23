const combustible = document.getElementById("combustible");
const rendimiento = document.getElementById("rendimiento");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", function() {
    if (combustible.value.trim() === "" || rendimiento.value.trim() === "") {
        resultado.textContent = "Completa ambos campos";
        return;
    }

    const cantidad = Number(combustible.value);
    const rendimientoNumber = Number(rendimiento.value);

    if (!Number.isFinite(cantidad) || !Number.isFinite(rendimientoNumber)) {
        resultado.textContent = "Ingrese valores válidos";
        return;
    }

    const total = cantidad * rendimientoNumber;
    resultado.textContent = "Combustible total: " + total;
});