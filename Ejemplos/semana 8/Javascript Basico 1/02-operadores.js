// ==========================================
// OPERADORES EN JAVASCRIPT
// ==========================================

// 1. OPERADORES ARITMÉTICOS
console.log("=== OPERADORES ARITMÉTICOS ===");

// Suma
let suma = 5 + 3; // 8
console.log("Suma:", suma);

// Resta
let resta = 10 - 4; // 6
console.log("Resta:", resta);

// Multiplicación
let multiplicacion = 4 * 3; // 12
console.log("Multiplicación:", multiplicacion);

// División
let division = 15 / 3; // 5
console.log("División:", division);

// Módulo (resto)
let modulo = 10 % 3; // 1
console.log("Módulo:", modulo);

// Incremento
let contador = 1;
contador++; // 2
console.log("Incremento:", contador);

// Decremento
contador--; // 1
console.log("Decremento:", contador);

// Potencia
let potencia = 2 ** 3; // 8
console.log("Potencia:", potencia);

// 2. OPERADORES DE ASIGNACIÓN
console.log("\n=== OPERADORES DE ASIGNACIÓN ===");

let x = 5;
x += 3; // x = x + 3
console.log("Suma y asignación:", x);

x -= 2; // x = x - 2
console.log("Resta y asignación:", x);

x *= 4; // x = x * 4
console.log("Multiplicación y asignación:", x);

x /= 2; // x = x / 2
console.log("División y asignación:", x);

// 3. OPERADORES DE COMPARACIÓN
console.log("\n=== OPERADORES DE COMPARACIÓN ===");

// Igualdad (==)
console.log("5 == '5':", 5 == '5'); // true (convierte tipos)

// Igualdad estricta (===)
console.log("5 === '5':", 5 === '5'); // false (compara tipos)

// Desigualdad (!=)
console.log("5 != '6':", 5 != '6'); // true

// Desigualdad estricta (!==)
console.log("5 !== '5':", 5 !== '5'); // true

// Mayor que (>)
console.log("5 > 3:", 5 > 3); // true

// Menor que (<)
console.log("3 < 5:", 3 < 5); // true

// Mayor o igual que (>=)
console.log("5 >= 5:", 5 >= 5); // true

// Menor o igual que (<=)
console.log("5 <= 5:", 5 <= 5); // true

// 4. OPERADORES LÓGICOS
console.log("\n=== OPERADORES LÓGICOS ===");

// AND (&&)
console.log("true && true:", true && true); // true
console.log("true && false:", true && false); // false

// OR (||)
console.log("true || false:", true || false); // true
console.log("false || false:", false || false); // false

// NOT (!)
console.log("!true:", !true); // false
console.log("!false:", !false); // true

// 5. OPERADOR TERNARIO
console.log("\n=== OPERADOR TERNARIO ===");
let edad = 18;
let puedeVotar = edad >= 18 ? "Puede votar" : "No puede votar";
console.log(puedeVotar);

// 6. OPERADOR DE COALESCENCIA NULA (??)
console.log("\n=== OPERADOR DE COALESCENCIA NULA ===");
let valor = null ?? "valor por defecto";
console.log(valor); // "valor por defecto"

// 7. OPERADOR DE ENCADENAMIENTO OPCIONAL (?.)
console.log("\n=== OPERADOR DE ENCADENAMIENTO OPCIONAL ===");
const usuario = {
    nombre: "Juan",
    direccion: {
        calle: "Calle Principal"
    }
};
console.log(usuario?.direccion?.calle); // "Calle Principal"
console.log(usuario?.telefono?.numero); // undefined 