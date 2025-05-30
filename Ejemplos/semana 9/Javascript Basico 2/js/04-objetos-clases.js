// ===== EJEMPLOS DE OBJETOS Y CLASES =====

document.addEventListener('DOMContentLoaded', function() {
    // ===== OBJETOS =====
    
    // 1. Objeto literal básico
    const persona = {
        nombre: 'Juan',
        edad: 25,
        saludar: function() {
            return `Hola, soy ${this.nombre}`;
        }
    };

    // 2. Objeto con métodos y propiedades computadas
    const calculadora = {
        valor1: 0,
        valor2: 0,
        setValores(a, b) {
            this.valor1 = a;
            this.valor2 = b;
        },
        sumar() {
            return this.valor1 + this.valor2;
        },
        restar() {
            return this.valor1 - this.valor2;
        }
    };

    // 3. Objeto con getters y setters
    const estudiante = {
        _nombre: '',
        _edad: 0,
        
        get nombre() {
            return this._nombre;
        },
        
        set nombre(valor) {
            this._nombre = valor.toUpperCase();
        },
        
        get edad() {
            return this._edad;
        },
        
        set edad(valor) {
            if (valor >= 0) {
                this._edad = valor;
            } else {
                console.error('La edad no puede ser negativa');
            }
        }
    };

    // ===== CLASES =====
    
    // 1. Clase básica
    class Animal {
        constructor(nombre) {
            this.nombre = nombre;
        }

        hacerSonido() {
            return 'Sonido genérico';
        }
    }

    // 2. Herencia
    class Perro extends Animal {
        constructor(nombre, raza) {
            super(nombre);
            this.raza = raza;
        }

        hacerSonido() {
            return '¡Guau!';
        }

        ladrar() {
            return `${this.nombre} está ladrando`;
        }
    }

    // 3. Clase con métodos estáticos
    class Matematica {
        static sumar(a, b) {
            return a + b;
        }

        static restar(a, b) {
            return a - b;
        }

        static PI = 3.14159;
    }

    // ===== DEMOSTRACIÓN =====
    
    // Función para demostrar objetos
    function demostrarObjetos() {
        const infoObjeto = document.getElementById('infoObjeto');
        let contenido = '';

        // Demostrar objeto persona
        contenido += `<h4>Objeto Persona:</h4>`;
        contenido += `<p>${persona.saludar()}</p>`;

        // Demostrar objeto calculadora
        calculadora.setValores(10, 5);
        contenido += `<h4>Objeto Calculadora:</h4>`;
        contenido += `<p>Suma: ${calculadora.sumar()}</p>`;
        contenido += `<p>Resta: ${calculadora.restar()}</p>`;

        // Demostrar objeto estudiante con getters y setters
        estudiante.nombre = 'maría';
        estudiante.edad = 20;
        contenido += `<h4>Objeto Estudiante:</h4>`;
        contenido += `<p>Nombre: ${estudiante.nombre}</p>`;
        contenido += `<p>Edad: ${estudiante.edad}</p>`;

        infoObjeto.innerHTML = contenido;
    }

    // Función para demostrar clases
    function demostrarClases() {
        const infoClase = document.getElementById('infoClase');
        let contenido = '';

        // Crear instancias
        const animal = new Animal('Genérico');
        const perro = new Perro('Rex', 'Pastor Alemán');

        // Demostrar clase Animal
        contenido += `<h4>Clase Animal:</h4>`;
        contenido += `<p>${animal.hacerSonido()}</p>`;

        // Demostrar clase Perro
        contenido += `<h4>Clase Perro:</h4>`;
        contenido += `<p>${perro.hacerSonido()}</p>`;
        contenido += `<p>${perro.ladrar()}</p>`;

        // Demostrar clase Matematica
        contenido += `<h4>Clase Matematica:</h4>`;
        contenido += `<p>Suma: ${Matematica.sumar(5, 3)}</p>`;
        contenido += `<p>Resta: ${Matematica.restar(5, 3)}</p>`;
        contenido += `<p>PI: ${Matematica.PI}</p>`;

        infoClase.innerHTML = contenido;
    }

    // Asignar eventos a los botones
    document.getElementById('btnCrearObjeto').addEventListener('click', demostrarObjetos);
    document.getElementById('btnCrearInstancia').addEventListener('click', demostrarClases);
}); 