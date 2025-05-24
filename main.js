// Contenido para main.js

// Espera a que todo el contenido del DOM esté cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

    // Obtener referencias a los elementos del DOM
    const inputPrecioPaquete = document.getElementById('precioPaquete');
    const inputCigarrillosPorPaquete = document.getElementById('cigarrillosPorPaquete');
    const inputCigarrillosAlDia = document.getElementById('cigarrillosAlDia');
    const btnCalcular = document.getElementById('btnCalcular');

    const spanGastoDiario = document.getElementById('gastoDiario');
    const spanGastoSemanal = document.getElementById('gastoSemanal');
    const spanGastoMensual = document.getElementById('gastoMensual');
    const spanGastoAnual = document.getElementById('gastoAnual');
    const divErrorMensaje = document.getElementById('errorMensaje');

    // Añadir el event listener al botón
    btnCalcular.addEventListener('click', function() {
        // Limpiar mensajes de error previos
        divErrorMensaje.textContent = '';
        limpiarResultados();

        // Obtener los valores de los inputs
        const precioPaquete = parseFloat(inputPrecioPaquete.value);
        const cigarrillosPorPaquete = parseInt(inputCigarrillosPorPaquete.value, 10);
        const cigarrillosAlDia = parseInt(inputCigarrillosAlDia.value, 10);

        // Validar las entradas (aunque la función calcularGastosTabaco también valida)
        if (isNaN(precioPaquete) || precioPaquete <= 0 ||
            isNaN(cigarrillosPorPaquete) || cigarrillosPorPaquete <= 0 ||
            isNaN(cigarrillosAlDia) || cigarrillosAlDia < 0) {
            divErrorMensaje.textContent = 'Por favor, introduce valores válidos en todos los campos.';
            return;
        }

        // Llamar a la función de cálculo (definida en calculadoraAhorro.js)
        // Asegúrate de que calculadoraAhorro.js está cargado ANTES que este script en tu HTML.
        const resultados = calcularGastosTabaco(precioPaquete, cigarrillosPorPaquete, cigarrillosAlDia);

        if (resultados) {
            // Mostrar los resultados en la página
            spanGastoDiario.textContent = resultados.diario.toFixed(2);
            spanGastoSemanal.textContent = resultados.semanal.toFixed(2);
            spanGastoMensual.textContent = resultados.mensual.toFixed(2);
            spanGastoAnual.textContent = resultados.anual.toFixed(2);
        } else {
            // Esto podría ocurrir si calcularGastosTabaco devuelve null debido a una validación interna,
            // aunque nuestra validación previa debería cubrirlo.
            divErrorMensaje.textContent = 'Hubo un error al calcular. Revisa los datos ingresados.';
        }
    });

    function limpiarResultados() {
        spanGastoDiario.textContent = '-';
        spanGastoSemanal.textContent = '-';
        spanGastoMensual.textContent = '-';
        spanGastoAnual.textContent = '-';
    }

    // Opcional: Disparar el cálculo al cargar la página si hay valores por defecto
    // O si quieres guardar/cargar valores de localStorage
    // btnCalcular.click(); // Descomenta si quieres que se calcule al cargar con los valores por defecto
});