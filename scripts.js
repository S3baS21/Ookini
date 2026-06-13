function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}

//function puedeReservar(cantidad) {
//    return cantidad <= 2;
//}

function puedeReservar(tazasDisponibles) {
    return tazasDisponibles > 0;
}

// Función para mostrar una alerta flotante y elegante
function mostrarAlerta(mensaje) {
    const alerta = document.createElement("div");

    // Estilos inline para que se vea premium y combine con Ookini
    alerta.style.position = "fixed";
    alerta.style.bottom = "20px";
    alerta.style.right = "20px";
    alerta.style.backgroundColor = "#c06d01"; // El color dorado/marrón
    alerta.style.color = "#fcfff9"; // Blanco hueso
    alerta.style.padding = "1rem 1.5rem";
    alerta.style.borderRadius = "8px";
    alerta.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
    alerta.style.fontFamily = "Georgia, sans-serif";
    alerta.style.fontSize = "1rem";
    alerta.style.zIndex = "1000";
    alerta.style.transition = "all 0.5s ease";
    alerta.style.opacity = "0";
    alerta.style.transform = "translateY(20px)";

    alerta.textContent = mensaje;
    document.body.appendChild(alerta);

    // Animación de entrada
    setTimeout(() => {
        alerta.style.opacity = "1";
        alerta.style.transform = "translateY(0)";
    }, 50);

    // Animación de salida y eliminación
    setTimeout(() => {
        alerta.style.opacity = "0";
        alerta.style.transform = "translateY(-20px)";
        setTimeout(() => {
            alerta.remove();
        }, 500);
    }, 2500);
}

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("click", function () {
    const tazasActuales = Number(contadorTazas.textContent);

    if (puedeReservar(tazasActuales)) {
        // 1. Reducimos el contador de tazas
        const nuevasTazas = tazasActuales - 1;
        contadorTazas.textContent = nuevasTazas;

        // 2. Mostramos la alerta bonita y moderna
        mostrarAlerta("¡Reserva registrada con éxito! ☕");

        // 3. Si llega a cero, desactivamos el botón
        if (nuevasTazas === 0) {
            botonReservar.textContent = "No hay cupos";
            botonReservar.disabled = true;
        }
    } else {
        botonReservar.textContent = "No hay cupos";
        botonReservar.disabled = true;
    }
});
