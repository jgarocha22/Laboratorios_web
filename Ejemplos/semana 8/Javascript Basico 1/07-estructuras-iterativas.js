// ==========================================
// ESTRUCTURAS ITERATIVAS EN JAVASCRIPT
// ==========================================

// 1. FOR TRADICIONAL
console.log("=== FOR TRADICIONAL ===");

for (let i = 0; i < 5; i++) {
    console.log(`Iteración ${i}`);
}

// For con múltiples variables
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}

// 2. FOR...OF (para iterar sobre valores iterables)
console.log("\n=== FOR...OF ===");

// Iterar sobre array
const frutas = ["manzana", "pera", "plátano"];
for (const fruta of frutas) {
    console.log(fruta);
}

// Iterar sobre string
const texto = "Hola";
for (const letra of texto) {
    console.log(letra);
}

// 3. FOR...IN (para iterar sobre propiedades de objetos)
console.log("\n=== FOR...IN ===");

const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

// 4. WHILE
console.log("\n=== WHILE ===");

let contador = 0;
while (contador < 3) {
    console.log(`Contador: ${contador}`);
    contador++;
}

// 5. DO...WHILE
console.log("\n=== DO...WHILE ===");

let numero = 0;
do {
    console.log(`Número: ${numero}`);
    numero++;
} while (numero < 3);

// 6. MÉTODOS DE ARRAY PARA ITERACIÓN
console.log("\n=== MÉTODOS DE ARRAY ===");

const numeros = [1, 2, 3, 4, 5];

// forEach
console.log("forEach:");
numeros.forEach((numero, indice) => {
    console.log(`Índice ${indice}: ${numero}`);
});

// map
console.log("\nmap:");
const duplicados = numeros.map(numero => numero * 2);
console.log(duplicados);

// filter
console.log("\nfilter:");
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);

// reduce
console.log("\nreduce:");
const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);
console.log(suma);

// 7. ITERACIÓN SOBRE SET
console.log("\n=== ITERACIÓN SOBRE SET ===");

const conjunto = new Set([1, 2, 3, 3, 4]);
for (const valor of conjunto) {
    console.log(valor);
}

// 8. ITERACIÓN SOBRE MAP
console.log("\n=== ITERACIÓN SOBRE MAP ===");

const mapa = new Map([
    ["clave1", "valor1"],
    ["clave2", "valor2"]
]);

// Iterar sobre entradas
for (const [clave, valor] of mapa) {
    console.log(`${clave}: ${valor}`);
}

// 9. ITERACIÓN CON BREAK Y CONTINUE
console.log("\n=== BREAK Y CONTINUE ===");

// Break
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(`Iteración ${i}`);
}

// Continue
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(`Iteración ${i}`);
}

// 10. ITERACIÓN SOBRE NODOS DOM
console.log("\n=== ITERACIÓN SOBRE NODOS DOM ===");

// Ejemplo de iteración sobre elementos HTML
const elementos = document.querySelectorAll('.clase');
for (const elemento of elementos) {
    console.log(elemento);
}