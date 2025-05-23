// ==========================================
// DECLARACIÓN DE VARIABLES Y REGLAS GENERALES
// ==========================================

// 1. Declaración con var (no recomendado en JavaScript moderno)
var variableVar = "Soy una variable var";
// Las variables var tienen scope de función y pueden ser redeclaradas
var variableVar = "Puedo ser redeclarada";

// 2. Declaración con let (recomendado para variables que cambiarán)
let variableLet = "Soy una variable let";
// Las variables let tienen scope de bloque y no pueden ser redeclaradas
// let variableLet = "Esto causaría un error"; // Error: Identifier 'variableLet' has already been declared
variableLet = "Pero sí puedo ser reasignada";

// 3. Declaración con const (recomendado para valores que no cambiarán)
const variableConst = "Soy una constante";
// Las constantes no pueden ser reasignadas ni redeclaradas
// variableConst = "Esto causaría un error"; // Error: Assignment to constant variable

// 4. Reglas de nomenclatura
let nombreValido = "Puede contener letras, números y _";
let _variable = "Puede empezar con guion bajo";
let $variable = "Puede empezar con $";
// let 1variable = "No puede empezar con número"; // Error
// let mi-variable = "No puede contener guiones"; // Error

// 5. Casos especiales
let undefined; // Variable declarada sin valor inicial
console.log(undefined); // Imprime: undefined

// 6. Hoisting (elevación)
console.log(hoistedVar); // Imprime: undefined
var hoistedVar = "Soy una variable hoisted";

// 7. Buenas prácticas
const PI = 3.1416; // Constantes en mayúsculas
let contador = 0; // Variables descriptivas
let isActive = true; // Booleanos con prefijo 'is'
let firstName = "Juan"; // camelCase para variables 