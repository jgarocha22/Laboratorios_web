// ==========================================
// CONVERSIÓN DE DATOS EN JAVASCRIPT
// ==========================================

// 1. CONVERSIÓN A STRING
console.log("=== CONVERSIÓN A STRING ===");

// Usando String()
console.log("Number a String:", String(42));
console.log("Boolean a String:", String(true));
console.log("Object a String:", String({ x: 1 }));
console.log("Array a String:", String([1, 2, 3]));

// Usando toString()
console.log("Number toString():", (42).toString());
console.log("Boolean toString():", true.toString());
console.log("Array toString():", [1, 2, 3].toString());

// Template literals (conversión implícita)
console.log(`Número a String: ${42}`);
console.log(`Boolean a String: ${true}`);

// 2. CONVERSIÓN A NUMBER
console.log("\n=== CONVERSIÓN A NUMBER ===");

// Usando Number()
console.log("String a Number:", Number("42"));
console.log("String decimal a Number:", Number("3.14"));
console.log("Boolean a Number:", Number(true));
console.log("Boolean a Number:", Number(false));
console.log("String inválido a Number:", Number("Hola")); // NaN

// Usando parseInt()
console.log("String a entero:", parseInt("42.9")); // 42
console.log("String hexadecimal a entero:", parseInt("0xFF", 16)); // 255

// Usando parseFloat()
console.log("String a decimal:", parseFloat("3.14"));

// 3. CONVERSIÓN A BOOLEAN
console.log("\n=== CONVERSIÓN A BOOLEAN ===");

// Usando Boolean()
console.log("String a Boolean:", Boolean("Hola")); // true
console.log("String vacío a Boolean:", Boolean("")); // false
console.log("Number a Boolean:", Boolean(42)); // true
console.log("Number 0 a Boolean:", Boolean(0)); // false
console.log("Object a Boolean:", Boolean({})); // true
console.log("Array a Boolean:", Boolean([])); // true
console.log("null a Boolean:", Boolean(null)); // false
console.log("undefined a Boolean:", Boolean(undefined)); // false

// Usando doble negación (!!)
console.log("String a Boolean con !!:", !!"Hola");
console.log("Number a Boolean con !!:", !!42);

// 4. CONVERSIÓN DE OBJETOS
console.log("\n=== CONVERSIÓN DE OBJETOS ===");

// Object a JSON
const objeto = {
    nombre: "Juan",
    edad: 30,
    hobbies: ["leer", "programar"]
};
console.log("Object a JSON:", JSON.stringify(objeto));

// JSON a Object
const jsonString = '{"nombre":"Juan","edad":30,"hobbies":["leer","programar"]}';
console.log("JSON a Object:", JSON.parse(jsonString));

// 5. CONVERSIÓN DE ARRAYS
console.log("\n=== CONVERSIÓN DE ARRAYS ===");

// Array a String
let arrayValue = [1, 2, 3];
console.log("Array a String:", arrayValue.toString());
console.log("Array a String con join:", arrayValue.join("-"));

// String a Array
const texto = "Hola mundo";
console.log("String a Array:", texto.split(""));

// 6. CONVERSIÓN DE FECHAS
console.log("\n=== CONVERSIÓN DE FECHAS ===");

// String a Date
const fechaString = "2024-03-15";
console.log("String a Date:", new Date(fechaString));

// Date a String
const fecha = new Date();
console.log("Date a String:", fecha.toString());
console.log("Date a ISO String:", fecha.toISOString());
console.log("Date a Locale String:", fecha.toLocaleString());

// 7. CONVERSIÓN IMPLÍCITA
console.log("\n=== CONVERSIÓN IMPLÍCITA ===");

// String + Number
console.log("'5' + 3:", '5' + 3); // "53"

// Number + String
console.log("3 + '5':", 3 + '5'); // "35"

// Boolean + Number
console.log("true + 1:", true + 1); // 2

// Boolean + String
console.log("true + 'Hola':", true + 'Hola'); // "trueHola"

// 8. CONVERSIÓN DE TIPOS ESPECIALES
console.log("\n=== CONVERSIÓN DE TIPOS ESPECIALES ===");

// BigInt a Number
const bigInt = 9007199254740991n;
console.log("BigInt a Number:", Number(bigInt));

// Symbol a String
const simbolo = Symbol("descripción");
console.log("Symbol a String:", simbolo.toString());

// 9. CONVERSIÓN CON OPERADORES
console.log("\n=== CONVERSIÓN CON OPERADORES ===");

// Operador de coalescencia nula (??)
console.log("null ?? 'default':", null ?? 'default');
console.log("undefined ?? 'default':", undefined ?? 'default');

// Operador de encadenamiento opcional (?.)
const usuario = {
    nombre: "Juan",
    direccion: {
        calle: "Calle Principal"
    }
};
console.log("Acceso seguro:", usuario?.direccion?.calle);
console.log("Acceso seguro a propiedad inexistente:", usuario?.telefono?.numero); 