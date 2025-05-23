// ==========================================
// ESTRUCTURAS CONDICIONALES EN JAVASCRIPT
// ==========================================

// 1. IF - ELSE BÁSICO
console.log("=== IF - ELSE BÁSICO ===");

let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// 2. IF - ELSE IF - ELSE
console.log("\n=== IF - ELSE IF - ELSE ===");

let calificacion = 85;

if (calificacion >= 90) {
    console.log("Calificación: A");
} else if (calificacion >= 80) {
    console.log("Calificación: B");
} else if (calificacion >= 70) {
    console.log("Calificación: C");
} else {
    console.log("Calificación: F");
}

// 3. OPERADOR TERNARIO
console.log("\n=== OPERADOR TERNARIO ===");

let esMayor = edad >= 18 ? "Sí es mayor" : "No es mayor";
console.log(esMayor);

// Operador ternario anidado
let mensaje = edad >= 18 
    ? "Eres mayor de edad" 
    : edad >= 16 
        ? "Eres adolescente" 
        : "Eres menor de edad";
console.log(mensaje);

// 4. SWITCH
console.log("\n=== SWITCH ===");

let dia = "Lunes";

switch (dia) {
    case "Lunes":
        console.log("Inicio de semana");
        break;
    case "Viernes":
        console.log("Fin de semana laboral");
        break;
    case "Sábado":
    case "Domingo":
        console.log("Fin de semana");
        break;
    default:
        console.log("Día laboral");
}

// 5. OPERADOR DE COALESCENCIA NULA (??)
console.log("\n=== OPERADOR DE COALESCENCIA NULA ===");

let nombre = null;
let nombreUsuario = nombre ?? "Usuario";
console.log(nombreUsuario);

// 6. OPERADOR LÓGICO OR (||)
console.log("\n=== OPERADOR LÓGICO OR ===");

let apellido = "";
let apellidoUsuario = apellido || "Sin apellido";
console.log(apellidoUsuario);

// 7. OPERADOR DE ENCADENAMIENTO OPCIONAL (?.)
console.log("\n=== OPERADOR DE ENCADENAMIENTO OPCIONAL ===");

const usuario = {
    nombre: "Juan",
    direccion: {
        calle: "Calle Principal"
    }
};

console.log(usuario?.direccion?.calle);
console.log(usuario?.telefono?.numero);

// 8. CONDICIONALES CON OPERADORES LÓGICOS
console.log("\n=== CONDICIONALES CON OPERADORES LÓGICOS ===");

let tienePermiso = true;
let esAdmin = false;

if (tienePermiso && esAdmin) {
    console.log("Acceso total");
} else if (tienePermiso || esAdmin) {
    console.log("Acceso parcial");
} else {
    console.log("Sin acceso");
}

// 9. CONDICIONALES CON COMPARACIONES MÚLTIPLES
console.log("\n=== CONDICIONALES CON COMPARACIONES MÚLTIPLES ===");

let numero = 5;

if (numero > 0 && numero < 10) {
    console.log("Número entre 0 y 10");
}

if (numero < 0 || numero > 10) {
    console.log("Número fuera de rango");
}

// 10. CONDICIONALES CON TIPOS
console.log("\n=== CONDICIONALES CON TIPOS ===");

function verificarTipo(valor) {
    if (typeof valor === "string") {
        console.log("Es una cadena de texto");
    } else if (typeof valor === "number") {
        console.log("Es un número");
    } else if (Array.isArray(valor)) {
        console.log("Es un array");
    } else if (typeof valor === "object" && valor !== null) {
        console.log("Es un objeto");
    }
}

verificarTipo("Hola");
verificarTipo(42);
verificarTipo([1, 2, 3]);
verificarTipo({ x: 1 });

// 11. CONDICIONALES CON INSTANCEOF
console.log("\n=== CONDICIONALES CON INSTANCEOF ===");

class Animal {}
class Perro extends Animal {}

const miPerro = new Perro();

if (miPerro instanceof Perro) {
    console.log("Es un perro");
}

if (miPerro instanceof Animal) {
    console.log("Es un animal");
}

// 12. CONDICIONALES CON IN
console.log("\n=== CONDICIONALES CON IN ===");

const persona = {
    nombre: "Juan",
    edad: 30
};

if ("nombre" in persona) {
    console.log("La persona tiene nombre");
}

if ("telefono" in persona) {
    console.log("La persona tiene teléfono");
} else {
    console.log("La persona no tiene teléfono");
} 