// Esto sería el contenido de tu archivo, por ejemplo, 'calculadoraAhorro.js'

/**
 * Calcula el gasto en tabaco y el ahorro potencial.
 * @param {number} precioPaquete - El precio de un paquete de cigarrillos.
 * @param {number} cigarrillosPorPaquete - Cuántos cigarrillos vienen en un paquete.
 * @param {number} cigarrillosAlDia - Cuántos cigarrillos se fuman al día.
 * @returns {object|null} Un objeto con los gastos calculados o null si los inputs son inválidos.
 */
function calcularGastosTabaco(precioPaquete, cigarrillosPorPaquete, cigarrillosAlDia) {
    // Validación básica de entradas
    if (isNaN(precioPaquete) || precioPaquete <= 0 ||
        isNaN(cigarrillosPorPaquete) || cigarrillosPorPaquete <= 0 ||
        isNaN(cigarrillosAlDia) || cigarrillosAlDia < 0) {
        console.error("Entradas inválidas. Asegúrate de que todos los valores son números positivos y el consumo no es negativo.");
        return null; // O podrías lanzar un error: throw new Error("Entradas inválidas");
    }

    let gastoDiario;
    if (cigarrillosAlDia === 0) {
        gastoDiario = 0;
    } else {
        // Calculamos cuántos paquetes se consumen al día.
        // Si se fuman menos cigarrillos que los que trae un paquete, esto será una fracción.
        const paquetesAlDia = cigarrillosAlDia / cigarrillosPorPaquete;
        gastoDiario = paquetesAlDia * precioPaquete;
    }

    const gastoSemanal = gastoDiario * 7;

    // Para el promedio mensual y anual, usamos 365.25 días para mayor precisión.
    const diasEnUnAno = 365.25;
    const mesesEnUnAno = 12;
    const gastoMensualPromedio = gastoDiario * (diasEnUnAno / mesesEnUnAno);
    const gastoAnual = gastoDiario * diasEnUnAno;

    return {
        diario: parseFloat(gastoDiario.toFixed(2)),
        semanal: parseFloat(gastoSemanal.toFixed(2)),
        mensual: parseFloat(gastoMensualPromedio.toFixed(2)),
        anual: parseFloat(gastoAnual.toFixed(2)),
        // También podríamos devolver los cigarrillos consumidos para más información
        cigarrillosDiarios: cigarrillosAlDia,
        cigarrillosSemanales: cigarrillosAlDia * 7,
        cigarrillosMensuales: parseFloat((cigarrillosAlDia * (diasEnUnAno / mesesEnUnAno)).toFixed(2)),
        cigarrillosAnuales: parseFloat((cigarrillosAlDia * diasEnUnAno).toFixed(2))
    };
}

// --- Ejemplo de cómo usar esta función (esto NO iría en el .js si solo quieres la función,
// --- sino en la parte de tu HTML donde llames a la función, o en otro script de lógica de la UI) ---

/*
// Datos del usuario (esto vendría de los inputs del HTML)
const precioFortuna29 = 7.15;
const cigarrillosPaqueteFortuna29 = 29;
const consumoDiarioFortuna29 = 29; // 1 paquete al día

const resultadosFortuna = calcularGastosTabaco(precioFortuna29, cigarrillosPaqueteFortuna29, consumoDiarioFortuna29);

if (resultadosFortuna) {
    console.log("--- Ejemplo Fortuna (1 paquete/día) ---");
    console.log(`Gasto Diario: ${resultadosFortuna.diario} €`);
    console.log(`Gasto Semanal: ${resultadosFortuna.semanal} €`);
    console.log(`Gasto Mensual (promedio): ${resultadosFortuna.mensual} €`);
    console.log(`Gasto Anual: ${resultadosFortuna.anual} €`);
    console.log(`Cigarrillos al mes (promedio): ${resultadosFortuna.cigarrillosMensuales}`);
}

// Ejemplo si alguien fuma menos, digamos 10 cigarrillos al día del mismo paquete
const consumoReducido = 10;
const resultadosReducido = calcularGastosTabaco(precioFortuna29, cigarrillosPaqueteFortuna29, consumoReducido);

if (resultadosReducido) {
    console.log("\n--- Ejemplo Consumo Reducido (10 cigarrillos/día) ---");
    console.log(`Gasto Diario: ${resultadosReducido.diario} €`);
    console.log(`Gasto Semanal: ${resultadosReducido.semanal} €`);
    console.log(`Gasto Mensual (promedio): ${resultadosReducido.mensual} €`);
    console.log(`Gasto Anual: ${resultadosReducido.anual} €`);
}

// Ejemplo si se deja de fumar (0 cigarrillos al día)
const consumoCero = 0;
const resultadosCero = calcularGastosTabaco(precioFortuna29, cigarrillosPaqueteFortuna29, consumoCero);

if (resultadosCero) {
    console.log("\n--- Ejemplo Dejar de Fumar (0 cigarrillos/día) ---");
    console.log(`Gasto Diario: ${resultadosCero.diario} €`); // Debería ser 0
    console.log(`Gasto Semanal: ${resultadosCero.semanal} €`); // Debería ser 0
    console.log(`Gasto Mensual (promedio): ${resultadosCero.mensual} €`); // Debería ser 0
    console.log(`Gasto Anual: ${resultadosCero.anual} €`); // Debería ser 0
}

// Ejemplo con entrada inválida (precio negativo)
const resultadosInvalidos = calcularGastosTabaco(-5, 20, 10); // Debería mostrar error en consola y devolver null
if (!resultadosInvalidos) {
    console.log("\nPrueba con entrada inválida manejada correctamente.");
}
*/