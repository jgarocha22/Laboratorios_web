// ===== EJEMPLOS DE FUNCIONES BÁSICAS =====

// Función básica sin parámetros
function saludar() {
    return "¡Hola desde JavaScript!";
}

// Función con parámetros
function saludarPersona(nombre) {
    return `¡Hola ${nombre}!`;
}

// Función con múltiples parámetros
function sumar(a, b) {
    return a + b;
}

// Función flecha (arrow function) básica
const multiplicar = (a, b) => a * b;

// Función flecha con múltiples líneas
const calcularPromedio = (numeros) => {
    const suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
};

// Ejemplo de función con valores por defecto
function crearUsuario(nombre = "Invitado", edad = 18) {
    return {
        nombre: nombre,
        edad: edad,
        esMayorDeEdad: edad >= 18
    };
}

// Ejemplo de función que retorna otra función (función de orden superior)
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

// Inicialización de eventos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {

    // Ejemplo de uso de las funciones
    console.log("Ejemplo de saludarPersona:", saludarPersona("Juan"));
    console.log("Ejemplo de sumar:", sumar(5, 3));
    console.log("Ejemplo de multiplicar:", multiplicar(4, 2));
    console.log("Ejemplo de calcularPromedio:", calcularPromedio([1, 2, 3, 4, 5]));
    console.log("Ejemplo de crearUsuario:", crearUsuario("María", 25));
    
    // Ejemplo de función de orden superior
    const duplicar = crearMultiplicador(2);
    console.log("Ejemplo de duplicar:", duplicar(5));
    
    // Evento para el botón de saludo
    document.getElementById('btnSaludar').addEventListener('click', function() {
        const resultado = saludar();
        document.getElementById('resultadoSaludo').textContent = resultado;
    });
}); 