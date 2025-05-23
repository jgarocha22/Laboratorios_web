// ==========================================
// TIPOS DE DATOS PRIMITIVOS EN JAVASCRIPT
// ==========================================

// 1. NUMBER (Número)
console.log("=== TIPO NUMBER ===");

// Enteros
let entero = 42;
console.log("Entero:", entero, typeof entero);

// Decimales
let decimal = 3.14159;
console.log("Decimal:", decimal, typeof decimal);

// Notación científica
let cientifico = 2.998e8;
console.log("Notación científica:", cientifico, typeof cientifico);

// Valores especiales
console.log("Infinito:", Infinity, typeof Infinity);
console.log("No es un número:", NaN, typeof NaN);

// 2. STRING (Cadena de texto)
console.log("\n=== TIPO STRING ===");

// Comillas simples
let stringSimple = 'Hola mundo';
console.log("String con comillas simples:", stringSimple, typeof stringSimple);

// Comillas dobles
let stringDoble = "Hola mundo";
console.log("String con comillas dobles:", stringDoble, typeof stringDoble);

// Template literals (backticks)
let nombre = "Juan";
let templateLiteral = `Hola ${nombre}`;
console.log("Template literal:", templateLiteral, typeof templateLiteral);

// Caracteres especiales
let caracteresEspeciales = "Primera línea\nSegunda línea\tCon tabulación";
console.log("Caracteres especiales:", caracteresEspeciales);

// 3. BOOLEAN (Booleano)
console.log("\n=== TIPO BOOLEAN ===");

let verdadero = true;
let falso = false;
console.log("Verdadero:", verdadero, typeof verdadero);
console.log("Falso:", falso, typeof falso);

// 4. NULL
console.log("\n=== TIPO NULL ===");

let nulo = null;
console.log("Null:", nulo, typeof nulo); // typeof null retorna "object" (es un error histórico de JavaScript)

// 5. UNDEFINED
console.log("\n=== TIPO UNDEFINED ===");

let indefinido;
console.log("Undefined:", indefinido, typeof indefinido);

// 6. SYMBOL
console.log("\n=== TIPO SYMBOL ===");

let simbolo = Symbol("descripción");
let otroSimbolo = Symbol("descripción");
console.log("Symbol:", simbolo, typeof simbolo);
console.log("Symbols son únicos:", simbolo === otroSimbolo); // false

// 7. BIGINT
console.log("\n=== TIPO BIGINT ===");

let bigInt = 9007199254740991n;
console.log("BigInt:", bigInt, typeof bigInt);

// Operaciones con BigInt
let sumaBigInt = bigInt + 1n;
console.log("Suma con BigInt:", sumaBigInt);

// 8. Ejemplos de conversión implícita
console.log("\n=== CONVERSIÓN IMPLÍCITA ===");

// String a Number
console.log("'5' + 3:", '5' + 3); // "53" (concatenación)
console.log("'5' - 3:", '5' - 3); // 2 (conversión a número)

// Boolean a Number
console.log("true + 1:", true + 1); // 2
console.log("false + 1:", false + 1); // 1

// 9. Verificación de tipos
console.log("\n=== VERIFICACIÓN DE TIPOS ===");

function verificarTipo(valor) {
    console.log(`Valor: ${valor}, Tipo: ${typeof valor}`);
}

verificarTipo(42);        // number
verificarTipo("Hola");    // string
verificarTipo(true);      // boolean
verificarTipo(null);      // object
verificarTipo(undefined); // undefined
verificarTipo(Symbol());  // symbol
verificarTipo(42n);       // bigint 