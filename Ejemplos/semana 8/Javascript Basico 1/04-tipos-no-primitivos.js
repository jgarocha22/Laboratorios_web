// ==========================================
// TIPOS DE DATOS NO PRIMITIVOS EN JAVASCRIPT
// ==========================================

// 1. OBJECT (Objeto)
console.log("=== TIPO OBJECT ===");

// Creación de objeto literal
const persona = {
    nombre: "Juan",
    edad: 30,
    esEstudiante: true,
    direccion: {
        calle: "Calle Principal",
        numero: 123
    },
    saludar: function() {
        return `Hola, mi nombre es ${this.nombre}`;
    }
};

console.log("Objeto persona:", persona);
console.log("Acceso a propiedades:", persona.nombre);
console.log("Acceso a método:", persona.saludar());

// 2. ARRAY (Arreglo)
console.log("\n=== TIPO ARRAY ===");

// Creación de array
const numeros = [1, 2, 3, 4, 5];
const mezclado = [1, "dos", true, { x: 10 }];

console.log("Array de números:", numeros);
console.log("Array mezclado:", mezclado);

// Métodos de array
console.log("Push:", numeros.push(6)); // Añade al final
console.log("Pop:", numeros.pop()); // Elimina el último
console.log("Unshift:", numeros.unshift(0)); // Añade al inicio
console.log("Shift:", numeros.shift()); // Elimina el primero

// 3. DATE (Fecha)
console.log("\n=== TIPO DATE ===");

// Creación de fechas
const fechaActual = new Date();
const fechaEspecifica = new Date("2024-03-15");
const fechaConParametros = new Date(2024, 2, 15); // Mes 0-11

console.log("Fecha actual:", fechaActual);
console.log("Fecha específica:", fechaEspecifica);
console.log("Fecha con parámetros:", fechaConParametros);

// Métodos de fecha
console.log("Año:", fechaActual.getFullYear());
console.log("Mes:", fechaActual.getMonth());
console.log("Día:", fechaActual.getDate());

// 4. REGEXP (Expresión Regular)
console.log("\n=== TIPO REGEXP ===");

// Creación de expresiones regulares
const regex1 = /patrón/;
const regex2 = new RegExp("patrón");

// Ejemplo de uso
const texto = "Hola mundo";
const regexHola = /Hola/;
console.log("¿Contiene 'Hola'?:", regexHola.test(texto));

// 5. MAP
console.log("\n=== TIPO MAP ===");

const mapa = new Map();
mapa.set("clave1", "valor1");
mapa.set(42, "valor2");
mapa.set({ x: 1 }, "valor3");

console.log("Map:", mapa);
console.log("Obtener valor:", mapa.get("clave1"));
console.log("¿Tiene clave?:", mapa.has(42));

// 6. SET
console.log("\n=== TIPO SET ===");

const conjunto = new Set([1, 2, 3, 3, 4, 4]);
console.log("Set:", conjunto);
conjunto.add(5);
console.log("Después de añadir:", conjunto);
console.log("¿Contiene 3?:", conjunto.has(3));

// 7. WEAKMAP
console.log("\n=== TIPO WEAKMAP ===");

const weakMap = new WeakMap();
const obj = { id: 1 };
weakMap.set(obj, "datos privados");
console.log("WeakMap get:", weakMap.get(obj));

// 8. WEAKSET
console.log("\n=== TIPO WEAKSET ===");

const weakSet = new WeakSet();
const obj2 = { id: 2 };
weakSet.add(obj2);
console.log("WeakSet has:", weakSet.has(obj2));

// 9. Ejemplos de manipulación de objetos
console.log("\n=== MANIPULACIÓN DE OBJETOS ===");

// Desestructuración
const { nombre, edad } = persona;
console.log("Desestructuración:", nombre, edad);

// Spread operator
const nuevaPersona = { ...persona, ocupacion: "Desarrollador" };
console.log("Spread operator:", nuevaPersona);

// 10. Ejemplos de manipulación de arrays
console.log("\n=== MANIPULACIÓN DE ARRAYS ===");

// Map
const duplicados = numeros.map(n => n * 2);
console.log("Map:", duplicados);

// Filter
const pares = numeros.filter(n => n % 2 === 0);
console.log("Filter:", pares);

// Reduce
const suma = numeros.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce:", suma); 