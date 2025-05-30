// ===== EJEMPLOS DE CONTROL DE FLUJO =====

document.addEventListener('DOMContentLoaded', function() {
    // ===== CONDICIONALES =====
    
    // 1. if/else básico
    function evaluarNumero(numero) {
        if (isNaN(numero)) {
            return 'Por favor ingrese un número válido';
        } else if (numero < 0) {
            return 'El número es negativo';
        } else if (numero === 0) {
            return 'El número es cero';
        } else {
            return 'El número es positivo';
        }
    }

    // 2. switch
    function evaluarDiaSemana(dia) {
        switch (dia.toLowerCase()) {
            case 'lunes':
                return 'Inicio de la semana';
            case 'viernes':
                return 'Fin de la semana laboral';
            case 'sábado':
            case 'domingo':
                return 'Fin de semana';
            default:
                return 'Día de la semana';
        }
    }

    // 3. Operador ternario
    const esMayorDeEdad = (edad) => edad >= 18 ? 'Es mayor de edad' : 'Es menor de edad';

    // ===== BUCLES =====
    
    // 1. for clásico
    function generarTablaMultiplicar(numero) {
        let resultado = `<h4>Tabla de multiplicar del ${numero}</h4>`;
        for (let i = 1; i <= 10; i++) {
            resultado += `<p>${numero} x ${i} = ${numero * i}</p>`;
        }
        return resultado;
    }

    // 2. for...of (para iterar sobre arrays)
    function sumarArray(numeros) {
        let suma = 0;
        for (const numero of numeros) {
            suma += numero;
        }
        return suma;
    }

    // 3. for...in (para iterar sobre propiedades de objetos)
    function listarPropiedades(objeto) {
        let resultado = '<ul>';
        for (const propiedad in objeto) {
            resultado += `<li>${propiedad}: ${objeto[propiedad]}</li>`;
        }
        resultado += '</ul>';
        return resultado;
    }

    // 4. while
    function contarHasta(numero) {
        let contador = 1;
        let resultado = '<p>Contando:</p><ul>';
        while (contador <= numero) {
            resultado += `<li>${contador}</li>`;
            contador++;
        }
        resultado += '</ul>';
        return resultado;
    }

    // 5. do...while
    function generarNumerosAleatorios(cantidad) {
        let numeros = [];
        let contador = 0;
        do {
            numeros.push(Math.floor(Math.random() * 100));
            contador++;
        } while (contador < cantidad);
        return numeros;
    }

    // ===== DEMOSTRACIÓN =====
    
    // Función para demostrar control de flujo
    function demostrarControlFlujo() {
        const numero = parseInt(document.getElementById('numeroInput').value);
        const resultadoControl = document.getElementById('resultadoControl');
        let contenido = '';

        // Demostrar condicionales
        contenido += `<h4>Evaluación del número:</h4>`;
        contenido += `<p>${evaluarNumero(numero)}</p>`;

        // Demostrar switch
        contenido += `<h4>Evaluación de día:</h4>`;
        contenido += `<p>${evaluarDiaSemana('viernes')}</p>`;

        // Demostrar operador ternario
        contenido += `<h4>Evaluación de edad:</h4>`;
        contenido += `<p>${esMayorDeEdad(20)}</p>`;

        // Demostrar bucles
        contenido += `<h4>Tabla de multiplicar:</h4>`;
        contenido += generarTablaMultiplicar(5);

        // Demostrar for...of
        const numeros = [1, 2, 3, 4, 5];
        contenido += `<h4>Suma de array:</h4>`;
        contenido += `<p>La suma de ${numeros.join(', ')} es ${sumarArray(numeros)}</p>`;

        // Demostrar for...in
        const persona = { nombre: 'Juan', edad: 25, ciudad: 'Madrid' };
        contenido += `<h4>Propiedades del objeto:</h4>`;
        contenido += listarPropiedades(persona);

        // Demostrar while
        contenido += `<h4>Conteo hasta 5:</h4>`;
        contenido += contarHasta(5);

        // Demostrar do...while
        contenido += `<h4>Números aleatorios:</h4>`;
        contenido += `<p>${generarNumerosAleatorios(5).join(', ')}</p>`;

        resultadoControl.innerHTML = contenido;
    }

    // Asignar evento al botón
    document.getElementById('btnEvaluar').addEventListener('click', demostrarControlFlujo);
}); 